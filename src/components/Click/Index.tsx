/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import React, {FC, forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import classnames from "classnames";
import cstyles from './index.module.less'
import styles from './../../gocaptcha.module.less'
import {ClickConfig, defaultConfig} from './meta/config'
import {ClickData, ClickDot} from "./meta/data";
import CloseIcon from './../../assets/icons/CloseIcon'
import RefreshIcon from './../../assets/icons/RefreshIcon'
import LoadingIcon from './../../assets/icons/LoadingIcon'
import {ClickEvent} from "./meta/event";
import {useHandler} from "./hooks/useHandler";

export interface ClickRef {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: ClickData,
  config?: ClickConfig;
  events?: ClickEvent,
  [x: string]: any,
}

const Index:FC<Props> = forwardRef<ClickRef, Props>((props: Props, ref) => {
  const [localConfig, setLocalConfig] = useState<ClickConfig>({...defaultConfig(), ...(props.config || {})})
  const [localData, setLocalData] = useState<ClickData>({...(props.data || {})})
  const [localEvents, setLocalEvents] = useState<ClickEvent>({...(props.events || {})})

  useEffect(() => {
    setLocalConfig({...localConfig, ...(props.config || {})})
  }, [props.config, setLocalConfig])

  useEffect(() => {
    setLocalData({...localData, ...(props.data || {})})
  }, [props.data, setLocalData])

  useEffect(() => {
    setLocalEvents({...localEvents, ...(props.events || {})})
  }, [props.events, setLocalEvents])

  const handler = useHandler(localData, localEvents, () => {
    setLocalData({...localData, thumb: '', image: ''})
  });

  const hPadding = localConfig.horizontalPadding || 0
  const vPadding = localConfig.verticalPadding || 0
  const width = (localConfig.width || 0) + ( hPadding * 2) + (localConfig.showTheme ? 2 : 0)
  const hasDisplayWrapperState = (localConfig.width || 0) > 0 || (localConfig.height || 0) > 0
  const hasDisplayImageState = localData.image != '' || localData.thumb != ''

  useImperativeHandle(ref, () => ({
    reset: handler.resetData,
    clear: handler.clearData,
    refresh: handler.refresh,
    close: handler.close
  }));

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
  >
    <div className={styles.header}>
      <span>{localConfig.title}</span>
      <img
        className={localData.thumb == '' ? styles.hide : ''}
        style={{
          width: localConfig.thumbWidth + "px",
          height: localConfig.thumbHeight + "px",
          display: hasDisplayImageState ? 'block' : 'none'
        }}
        src={localData.thumb}
        alt=""
      />
    </div>
    <div
      className={styles.body}
      style={{
        width: localConfig.width + "px",
        height: localConfig.height + "px"
      }}
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
        onClick={handler.clickEvent}
      />
      <div className={cstyles.dots}>
        {
          handler.getDots().map((dot: ClickDot) => {
            return <div
              className="dot"
              style={{
                width: localConfig.dotSize + 'px',
                height: localConfig.dotSize + 'px',
                borderRadius: localConfig.dotSize + 'px',
                top: (dot.y - ((localConfig.dotSize || 1)/2)-1) + "px",
                left: (dot.x - ((localConfig.dotSize || 1)/2)-1) + "px",
              }}
              key={dot.key + "-" + dot.index}
            >{dot.index}</div>
          })
        }
      </div>
    </div>
    <div className={styles.footer}>
      <div className={classnames(styles.iconBlock, cstyles.iconBlock)}>
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
      <div className={styles.buttonBlock}>
        <button
          className={classnames(!hasDisplayImageState && styles.disabled)}
          onClick={handler.confirmEvent}
        >{localConfig.buttonText}</button>
      </div>
    </div>
  </div>
})

export default React.memo(Index)