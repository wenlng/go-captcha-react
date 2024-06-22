/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import {MutableRefObject, useCallback, useState} from "react";
import {SlideRegionData, SlideRegionPoint} from "../meta/data";
import {SlideRegionEvent} from "../meta/event";
import {checkTargetFather} from "../../../helper/helper";

export const useHandler = (
  data: SlideRegionData,
  event: SlideRegionEvent,
  containerRef: MutableRefObject<any>,
  tileRef: MutableRefObject<any>,
) => {
  const [thumbPoint, setThumbPoint] = useState<SlideRegionPoint>({x: data.thumbX || 0, y: data.thumbY || 0})

  const clear = useCallback<any>(() => {
    setThumbPoint({x: data.thumbX || 0, y: data.thumbY || 0})
  }, [data.thumbX, data.thumbY])

  const dragEvent = useCallback<any>((e: Event|any) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = tileRef.current.offsetLeft
    const offsetTop = tileRef.current.offsetTop
    const width = containerRef.current.offsetWidth
    const height = containerRef.current.offsetHeight
    const tileWidth = tileRef.current.offsetWidth
    const tileHeight = tileRef.current.offsetHeight
    const maxWidth = width - tileWidth
    const maxHeight = height - tileHeight

    let isMoving = false
    let startX = 0
    let startY = 0
    let tileLeft = 0
    let tileTop = 0
    if (touch) {
      startX = touch.pageX - offsetLeft
      startY = touch.pageY - offsetTop
    } else {
      startX = e.clientX - offsetLeft
      startY = e.clientY - offsetTop
    }

    const moveEvent = (e: Event|any) => {
      isMoving = true
      const mTouche = e.touches && e.touches[0];

      let left = 0;
      let top = 0;
      if (mTouche) {
        left = mTouche.pageX - startX
        top = mTouche.pageY - startY
      } else {
        left = e.clientX - startX
        top = e.clientY - startY
      }

      if (left <= 0) {
        left = 0
      }

      if (top <= 0) {
        top = 0
      }

      if (left >= maxWidth) {
        left = maxWidth
      }

      if (top >= maxHeight) {
        top = maxHeight
      }

      setThumbPoint({x: left, y: top})
      tileLeft = left
      tileTop = top
      event.move && event.move(left, top)

      e.cancelBubble = true
      e.preventDefault()
    }

    const upEvent = (e: Event|any) => {
      if (!checkTargetFather(containerRef.current, e)) {
        return
      }

      if (!isMoving) {
        return
      }
      isMoving = false

      containerRef.current.removeEventListener("mousemove", moveEvent, false)
      containerRef.current.removeEventListener("touchmove", moveEvent, { passive: false })

      containerRef.current.removeEventListener( "mouseup", upEvent, false)
      containerRef.current.removeEventListener( "mouseout", upEvent, false)
      containerRef.current.removeEventListener("touchend", upEvent, false)

      event.confirm && event.confirm({x: tileLeft, y: tileTop}, () => {
        clear()
      })

      e.cancelBubble = true
      e.preventDefault()
    }

    containerRef.current.addEventListener("mousemove", moveEvent, false)
    containerRef.current.addEventListener("touchmove", moveEvent, { passive: false })
    containerRef.current.addEventListener( "mouseup", upEvent, false)
    containerRef.current.addEventListener( "mouseout", upEvent, false)
    containerRef.current.addEventListener("touchend", upEvent, false)
  }, [containerRef, tileRef, event, clear])

  const closeEvent = useCallback<any>((e: Event|any) => {
    event && event.close && event.close()
    clear()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [clear, event])

  const refreshEvent = useCallback<any>((e: Event|any) => {
    event && event.refresh && event.refresh()
    clear()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [clear, event])

  return {
    thumbPoint,
    dragEvent,
    closeEvent,
    refreshEvent,
  }
}
