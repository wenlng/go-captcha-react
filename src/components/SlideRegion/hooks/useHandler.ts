/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import {MutableRefObject, useCallback, useEffect, useState} from "react";
import {SlideRegionData, SlideRegionPoint} from "../meta/data";
import {SlideRegionEvent} from "../meta/event";
import {checkTargetFather} from "../../../helper/helper";
import {SlideRegionConfig} from "../meta/config";

export const useHandler = (
  data: SlideRegionData,
  event: SlideRegionEvent,
  config: SlideRegionConfig,
  rootRef: MutableRefObject<any>,
  containerRef: MutableRefObject<any>,
  tileRef: MutableRefObject<any>,
  clearCbs: () => void,
) => {
  const [thumbPoint, setThumbPoint] = useState<SlideRegionPoint>({x: data.thumbX || 0, y: data.thumbY || 0})
  const [isFreeze, setIsFreeze] = useState<boolean>(false)

  useEffect(() => {
    if(!isFreeze){
      setThumbPoint({x: data.thumbX || 0, y: data.thumbY || 0})
    }
  }, [data, setThumbPoint])

  const resetData = useCallback<any>(() => {
    setThumbPoint({x: data.thumbX || 0, y: data.thumbY || 0})
  }, [data.thumbX, data.thumbY, setThumbPoint])

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
    let tmpLeaveDragEvent: Event|any = null
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
      clearEvent()

      if (tileLeft < 0 || tileTop < 0) {
        return
      }

      event.confirm && event.confirm({x: tileLeft, y: tileTop}, () => {
        resetData()
      })

      e.cancelBubble = true
      e.preventDefault()
    }

    const leaveDragBlockEvent = (e: Event|any) => {
      tmpLeaveDragEvent = e
    }

    const enterDragBlockEvent = () => {
      tmpLeaveDragEvent = null
    }

    const leaveUpEvent = (_: Event|any) => {
      if(!tmpLeaveDragEvent) {
        return
      }

      upEvent(tmpLeaveDragEvent)
      clearEvent()
    }

    const scope = config.scope
    const dragDom = scope ? rootRef.current : containerRef.current
    const scopeDom = scope ? rootRef.current : document.body

    const clearEvent = () => {
      scopeDom.removeEventListener("mousemove", moveEvent, false)
      scopeDom.removeEventListener("touchmove", moveEvent, { passive: false })

      dragDom.removeEventListener( "mouseup", upEvent, false)
      dragDom.removeEventListener( "mouseenter", enterDragBlockEvent, false)
      dragDom.removeEventListener( "mouseleave", leaveDragBlockEvent, false)
      dragDom.removeEventListener("touchend", upEvent, false)

      scopeDom.removeEventListener("mouseleave", upEvent, false)
      scopeDom.removeEventListener("mouseup", leaveUpEvent, false)

      setIsFreeze(false)
    }

    setIsFreeze(true)

    scopeDom.addEventListener("mousemove", moveEvent, false)
    scopeDom.addEventListener("touchmove", moveEvent, { passive: false })

    dragDom.addEventListener( "mouseup", upEvent, false)
    dragDom.addEventListener( "mouseenter", enterDragBlockEvent, false)
    dragDom.addEventListener( "mouseleave", leaveDragBlockEvent, false)
    dragDom.addEventListener("touchend", upEvent, false)

    scopeDom.addEventListener("mouseleave", upEvent, false)
    scopeDom.addEventListener("mouseup", leaveUpEvent, false)
  }, [rootRef, containerRef, tileRef, config, event, setIsFreeze, resetData])

  const clearData = useCallback<any>(() => {
    resetData()
    clearCbs && clearCbs()
  }, [resetData, clearCbs])

  const close = useCallback<any>(() => {
    event.close && event.close()
    resetData()
  }, [event, resetData])

  const refresh = useCallback<any>(() => {
    event.refresh && event.refresh()
    resetData()
  }, [event, resetData])

  const closeEvent = useCallback<any>((e: Event|any) => {
    close()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [close])

  const refreshEvent = useCallback<any>((e: Event|any) => {
    refresh()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [refresh])

  return {
    thumbPoint,
    dragEvent,
    closeEvent,
    refreshEvent,
    resetData,
    clearData,
    close,
    refresh,
  }
}
