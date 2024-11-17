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
import ArrowsIcon from './../../assets/icons/ArrowsIcon'
import {defaultSlideData, SlideData} from "./meta/data";
import {SlideConfig, defaultConfig} from "./meta/config";
import {SlideEvent} from "./meta/event";
import {useHandler} from "./hooks/useHandler";

export interface SlideRef {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: SlideData,
  config?: SlideConfig;
  events?: SlideEvent,
  [x: string]: any,
}

const Index:FC<Props> = forwardRef<SlideRef, Props>((props: Props, ref) => {
  const [localConfig, setLocalConfig] = useState<SlideConfig>({...defaultConfig(), ...(props.config || {})})
  const [localData, setLocalData] = useState<SlideData>({...defaultSlideData(), ...(props.data || {})})
  const [localEvents, setLocalEvents] = useState<SlideEvent>({...(props.events || {})})

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
  const dragBarRef = useRef<any>(null)
  const containerRef = useRef<any>(null)
  const dragBlockRef = useRef<any>(null)
  const tileRef = useRef<any>(null)

  const handler = useHandler(
    localData,
    localEvents,
    localConfig,
    rootRef,
    containerRef,
    tileRef,
    dragBlockRef,
    dragBarRef,
    () => {
      setLocalData({...localData, ...defaultSlideData()})
    }
    );

  const hPadding = localConfig.horizontalPadding || 0
  const vPadding = localConfig.verticalPadding || 0
  const width = (localConfig.width || 0) + ( hPadding * 2) + (localConfig.showTheme ? 2 : 0)
  const hasDisplayWrapperState = (localConfig.width || 0) > 0 || (localConfig.height || 0) > 0
  const hasDisplayImageState = localData.image != '' && localData.thumb != ''

  useImperativeHandle(ref, () => ({
    reset: handler.resetData,
    clear: handler.clearData,
    refresh: handler.refresh,
    close: handler.close
  }));

  useEffect(() => {
    dragBlockRef.current.addEventListener('dragstart', (event: any) => event.preventDefault());
  }, [dragBlockRef]);

  return <div
    className={classnames(styles.wrapper, localConfig.showTheme ? styles.theme : '')}
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
    <div className={styles.header}>
      <span>{localConfig.title}</span>
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
        style={{
          width: localConfig.width + "px",
          height: localConfig.height + "px",
          display: hasDisplayImageState ? 'block' : 'none'
        }}
        src={localData.image}
        alt=""
      />
      <div
        className={cstyles.tile}
        ref={tileRef}
        style={{
          width: (localData.thumbWidth || 0) + 'px',
          height: (localData.thumbHeight || 0) + 'px',
          top: (localData.thumbY || 0) + "px",
          left: handler.getState().thumbLeft + "px"
        }}
      >
        <img
          className={localData.thumb == '' ? styles.hide : ''}
          style={{ display: hasDisplayImageState ? 'block' : 'none' }}
          src={localData.thumb}
          alt=""
        />
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.dragSlideBar} ref={dragBarRef}>
        <div className={styles.dragLine} />
        <div
          className={classnames(styles.dragBlock, !hasDisplayImageState && styles.disabled)}
          ref={dragBlockRef}
          onMouseDown={handler.dragEvent}
          style={{left: handler.getState().dragLeft + "px"}}
        >
          <div
            className={styles.dragBlockInline}
            onTouchStart={handler.dragEvent}
          >
            <ArrowsIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
})

export default React.memo(Index)