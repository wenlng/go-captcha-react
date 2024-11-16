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
import ArrowsIcon from "../../assets/icons/ArrowsIcon";
import {RotateConfig, defaultConfig} from "./meta/config";
import {useHandler} from "./hooks/useHandler";
import {RotateData} from "./meta/data";
import {RotateEvent} from "./meta/event";


export interface RotateRef {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: RotateData,
  config?: RotateConfig;
  events?: RotateEvent,
  [x: string]: any,
}

const Index:FC<Props> = forwardRef<RotateRef, Props>((props: Props, ref) => {
  const [localConfig, setLocalConfig] = useState<RotateConfig>({...defaultConfig(), ...(props.config || {})})
  const [localData, setLocalData] = useState<RotateData>({...(props.data || {})})
  const [localEvents, setLocalEvents] = useState<RotateEvent>({...(props.events || {})})

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
  const dragBlockRef = useRef<any>(null)

  const handler = useHandler(localData, localEvents, localConfig, rootRef, dragBlockRef, dragBarRef);

  const hPadding = localConfig.horizontalPadding || 0
  const vPadding = localConfig.verticalPadding || 0
  const width = (localConfig.width || 0) + ( hPadding * 2) + (localConfig.showTheme ? 2 : 0)
  const size = (localConfig.size || 0) > 0 ? localConfig.size : defaultConfig().size
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
      className={classnames(styles.body, cstyles.body)}
      style={{
        width: localConfig.width + 'px',
        height: localConfig.height + 'px'
      }}
    >
      <div style={{width: size  + "px", height: size + "px" }}>
        <div className={styles.loading}>
          <LoadingIcon />
        </div>

        <div
          className={cstyles.picture}
          style={{
            width: localConfig.size + 'px',
            height: localConfig.size + 'px'
          }}
        >
          <img
            className={localData.image == '' ? styles.hide : ''}
            src={localData.image}
            style={{display: hasDisplayImageState ? 'block' : 'none' }}
            alt=""
          />
          <div className={cstyles.round} />
        </div>

        <div className={cstyles.thumb}>
          <div
            className={cstyles.thumbBlock}
            style={{ transform: `rotate(${handler.getState().thumbAngle}deg)`}}
          >
            <img
              className={localData.thumb == '' ? styles.hide : ''}
              src={localData.thumb}
              style={{display: hasDisplayImageState ? 'block' : 'none' }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.dragSlideBar} ref={dragBarRef}>
        <div className={styles.dragLine} />
        <div
          className={classnames(styles.dragBlock, !hasDisplayImageState && 'disabled')}
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