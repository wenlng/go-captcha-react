/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import {MutableRefObject, useCallback, useState} from "react";
import {RotateData} from "../meta/data";
import {RotateEvent} from "../meta/event";
import {checkTargetFather} from "../../../helper/helper";

export const useHandler = (
  data: RotateData,
  event: RotateEvent,
  dragBlockRef: MutableRefObject<any>,
  dragBarRef: MutableRefObject<any>,
) => {
  const [dragLeft, setDragLeft] = useState<number>(0)
  const [thumbAngle, setThumbAngle] = useState<number>(data.angle || 0)

  const clear = useCallback<any>(() => {
    setDragLeft(0)
    setThumbAngle(0)
  }, [])

  const dragEvent = useCallback<any>((e: Event|any) => {
    const touch = e.touches && e.touches[0];

    const offsetLeft = dragBlockRef.current.offsetLeft
    const width = dragBarRef.current.offsetWidth
    const blockWidth = dragBlockRef.current.offsetWidth
    const maxWidth = width - blockWidth
    const p = 360 / maxWidth

    let angle = 0
    let isMoving = false
    let startX = 0;
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
      angle = (left * p)
      setThumbAngle(angle)

      event.rotate && event.rotate(angle)

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
      event.confirm && event.confirm(parseInt(angle.toString()), () => {
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
  }, [dragBlockRef, dragBarRef, event, clear])

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

  const getState = useCallback<() => {dragLeft: number, thumbAngle: number}>(() => {
    return {
      dragLeft,
      thumbAngle,
    }
  }, [thumbAngle, dragLeft])

  return {
    getState,
    thumbAngle,
    dragEvent,
    closeEvent,
    refreshEvent,
  }
}
