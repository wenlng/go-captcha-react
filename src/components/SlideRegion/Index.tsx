/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import React, {FC, forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import classnames from "classnames";
import cstyles from './index.module.less'
import styles from './../../gocaptcha.module.less'
import CloseIcon from './../../assets/icons/CloseIcon'
import RefreshIcon from './../../assets/icons/RefreshIcon'
import LoadingIcon from './../../assets/icons/LoadingIcon'
import {SlideRegionConfig, defaultConfig} from "./meta/config";
import {useHandler} from "./hooks/useHandler";
import {defaultSlideRegionData, SlideRegionData} from "./meta/data";
import {SlideRegionEvent} from "./meta/event";

export interface SlideRegionRef {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: SlideRegionData,
  config?: SlideRegionConfig;
  events?: SlideRegionEvent,
  [x: string]: any,
}

const Index:FC<Props> = forwardRef<SlideRegionRef, Props>((props: Props, ref) => {
  const [localConfig, setLocalConfig] = useState<SlideRegionConfig>({...defaultConfig(), ...(props.config || {})})
  const [localData, setLocalData] = useState<SlideRegionData>({...defaultSlideRegionData(), ...(props.data || {})})
  const [localEvents, setLocalEvents] = useState<SlideRegionEvent>({...(props.events || {})})

  useEffect(() => {
    setLocalConfig({...localConfig, ...(props.config || {})})
  }, [props.config, setLocalConfig])

  useEffect(() => {
    setLocalData({...localData, ...(props.data || {})})
  }, [props.data, setLocalData])

  useEffect(() => {
    setLocalEvents({...localEvents, ...(props.events || {})})
  }, [props.events, setLocalEvents])

  const rootRef = useRef<any>(null)
  const containerRef = useRef<any>(null)
  const tileRef = useRef<any>(null)

  const handler = useHandler(
    localData,
    localEvents,
    localConfig,
    rootRef,
    containerRef,
    tileRef,
    () => {
      setLocalData({...localData, ...defaultSlideRegionData()})
    }
  );

  const hPadding = localConfig.horizontalPadding || 0
  const vPadding = localConfig.verticalPadding || 0
  const width = (localConfig.width || 0) + ( hPadding * 2) + (localConfig.showTheme ? 2 : 0)
  const hasDisplayWrapperState = (localConfig.width || 0) > 0 || (localConfig.height || 0) > 0
  const hasDisplayImageState = (localData.image && localData.image.length > 0) && (localData.thumb && localData.thumb.length > 0)

  useImperativeHandle(ref, () => ({
    reset: handler.resetData,
    clear: handler.clearData,
    refresh: handler.refresh,
    close: handler.close
  }));

  useEffect(() => {
    const fn = (event: any) => event.preventDefault()
    tileRef.current && tileRef.current.addEventListener('dragstart', fn);

    return () => {
      tileRef.current && tileRef.current.removeEventListener('dragstart', fn);
    }
  }, [tileRef]);

  return <div
    className={classnames(styles.wrapper, cstyles.wrapper, localConfig.showTheme ? styles.theme : '')}
    style={{
      width:  width+ "px",
      paddingLeft: hPadding + "px",
      paddingRight: hPadding + "px",
      paddingTop: vPadding + "px",
      paddingBottom: vPadding + "px",
      display: hasDisplayWrapperState ? 'block' : 'none'
    }}
    ref={rootRef}
  >
    <div className={classnames(styles.header, cstyles.header)}>
      <span>{localConfig.title}</span>
    </div>
    <div
      className={styles.body}
      ref={containerRef}
      style={{width: localConfig.width + "px", height: localConfig.height + "px"}}
    >
      <div className={styles.loading}>
        <LoadingIcon />
      </div>
      <img
        className={classnames(styles.picture, localData.image == '' ? styles.hide : '')}
        src={localData.image}
        style={{
          width: localConfig.width + "px",
          height: localConfig.height + "px",
          display: hasDisplayImageState ? 'block' : 'none'
        }}
        alt=""
      />
      <div
        className={cstyles.tile}
        ref={tileRef}
        style={{
          width: (localData.thumbWidth || 0) + 'px',
          height: (localData.thumbHeight || 0) + 'px',
          top: handler.thumbPoint.y + "px",
          left: handler.thumbPoint.x + "px"
        }}
        onMouseDown={handler.dragEvent}
        onTouchStart={handler.dragEvent} >
        <img
          className={localData.thumb == '' ? styles.hide : ''}
          style={{ display: hasDisplayImageState ? 'block' : 'none' }}
          src={localData.thumb}
          alt=""
        />
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.iconBlock}>
        <CloseIcon
          width={localConfig.iconSize}
          height={localConfig.iconSize}
          onClick={handler.closeEvent}
        />
        <RefreshIcon
          width={localConfig.iconSize}
          height={localConfig.iconSize}
          onClick={handler.refreshEvent}
        />
      </div>
    </div>
  </div>
})

export default React.memo(Index)