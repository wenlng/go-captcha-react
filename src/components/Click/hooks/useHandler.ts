/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import {useCallback, useState} from "react";
import {ClickData, ClickDot} from "../meta/data";
import {ClickEvent} from "../meta/event";
import {getDomXY} from "../../../helper/helper";

export const useHandler = (
  _data: ClickData,
  event: ClickEvent,
) => {
  const [dots, setDots] = useState<Array<ClickDot>>([])

  const clickEvent = useCallback<any>((e: Event|any) => {
    const dom = e.currentTarget
    const xy = getDomXY(dom)

    const mouseX = e.pageX || e.clientX
    const mouseY = e.pageY || e.clientY

    const domX = xy.domX
    const domY = xy.domY

    const xPos = mouseX - domX;
    const yPos = mouseY - domY;

    const xx = parseInt(xPos.toString())
    const yy = parseInt(yPos.toString())
    const date = new Date()
    const index = dots.length
    setDots([...dots, {key: date.getTime(), index: index + 1, x: xx, y: yy}])

    event.click && event.click(xx, yy)
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [dots, event])

  const confirmEvent = useCallback<any>((e: Event|any) => {
    event.confirm && event.confirm(dots, () => {
      setDots([])
    })
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [dots, event])

  const closeEvent = useCallback<any>((e: Event|any) => {
    event.close && event.close()
    setDots([])
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [event])

  const refreshEvent = useCallback<any>((e: Event|any) => {
    event.refresh && event.refresh()
    setDots([])
    e.cancelBubble = true
    e.preventDefault()
    return false
  }, [event])

  const getDots = useCallback<any>(() => {
    return dots
  }, [dots])

  return {
    setDots,
    getDots,
    clickEvent,
    confirmEvent,
    closeEvent,
    refreshEvent,
  }
}
