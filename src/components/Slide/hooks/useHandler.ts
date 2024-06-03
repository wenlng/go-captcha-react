/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/

import {MutableRefObject, useCallback, useState} from "react";
import {CaptchaData} from "../meta/data";
import {CaptchaEvent} from "../meta/event";
import {checkTargetFather} from "../../../helper/helper";

export const useHandler = (
  data: CaptchaData,
  event: CaptchaEvent,
  containerRef: MutableRefObject<any>,
  tileRef: MutableRefObject<any>,
  dragBlockRef: MutableRefObject<any>,
  dragBarRef: MutableRefObject<any>,
) => {
  const [dragLeft, setDragLeft] = useState<number>(0)
  const [thumbLeft, setThumbLeft] = useState<number>(data.thumbX || 0)

  const clear = useCallback<any>(() => {
    setDragLeft(0)
    setThumbLeft(0)
  }, [])

  const dragEvent = useCallback<any>((e: Event|any) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = dragBlockRef.current.offsetLeft
    const width = containerRef.current.offsetWidth
    const blockWidth = dragBlockRef.current.offsetWidth
    const maxWidth =width - blockWidth
    const thumbX = data.thumbX || 0

    const tileWith  = tileRef.current.offsetWidth
    const ad = blockWidth - tileWith
    const ratio = ((maxWidth - thumbX) + ad) / maxWidth

    let isMoving = false
    let startX = 0
    let currentThumbX = 0
    if (touch) {
      startX = touch.pageX - offsetLeft
    } else {
      startX = e.clientX - offsetLeft
    }

    const moveEvent = (e: Event|any) => {
      isMoving = true
      const mTouche = e.touches && e.touches[0];

      let left = 0;
      if (mTouche) {
        left = mTouche.pageX - startX
      } else {
        left = e.clientX - startX
      }

      if (left >= maxWidth) {
        setDragLeft(maxWidth)
        return
      }

      if (left <= 0) {
        setDragLeft(0)
        return
      }

      setDragLeft(left)
      currentThumbX = thumbX + (left * ratio)
      setThumbLeft(currentThumbX)

      event.move && event.move(currentThumbX, data.thumbY || 0)

      e.cancelBubble = true
      e.preventDefault()
    }

    const upEvent = (e: Event|any) => {
      if (!checkTargetFather(dragBarRef.current, e)) {
        return
      }

      if (!isMoving) {
        return
      }

      dragBarRef.current.removeEventListener("mousemove", moveEvent, false)
      dragBarRef.current.removeEventListener("touchmove", moveEvent, { passive: false })

      dragBarRef.current.removeEventListener( "mouseup", upEvent, false)
      dragBarRef.current.removeEventListener( "mouseout", upEvent, false)
      dragBarRef.current.removeEventListener("touchend", upEvent, false)

      isMoving = false
      event.confirm && event.confirm({x: parseInt(currentThumbX.toString()), y: data.thumbY || 0}, () => {
        clear()
      })

      e.cancelBubble = true
      e.preventDefault()
    }

    dragBarRef.current.addEventListener("mousemove", moveEvent, false)
    dragBarRef.current.addEventListener("touchmove", moveEvent, { passive: false })
    dragBarRef.current.addEventListener( "mouseup", upEvent, false)
    dragBarRef.current.addEventListener( "mouseout", upEvent, false)
    dragBarRef.current.addEventListener("touchend", upEvent, false)
  }, [dragBlockRef, containerRef, data.thumbX, data.thumbY, tileRef, dragBarRef, event, clear])

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

  const getPoint = useCallback<any>(() => {
    return {
      x: thumbLeft,
      y: data.thumbY || 0
    }
  }, [data.thumbY, thumbLeft])

  const getState = useCallback<() => {dragLeft: number, thumbLeft: number}>(() => {
    return {
      dragLeft,
      thumbLeft,
    }
  }, [thumbLeft, dragLeft])

  return {
    getState,
    getPoint,
    dragEvent,
    closeEvent,
    refreshEvent,
  }
}