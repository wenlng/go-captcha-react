/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import React, {FC, useEffect, useRef} from 'react';
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

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: RotateData,
  config?: RotateConfig;
  events?: RotateEvent,
}

const Index:FC<Props> = (props: Props) => {
  const conf = {
    ...defaultConfig(),
    ...(props.config || {})
  }

  const dragBarRef = useRef<any>(null)
  const dragBlockRef = useRef<any>(null)

  const data = props.data || {}
  const handler = useHandler(data, props.events || {}, dragBlockRef, dragBarRef);

  const hPadding = conf.horizontalPadding || 0
  const vPadding = conf.verticalPadding || 0
  const width = (conf.width || 0) + ( hPadding * 2) + (conf.showTheme ? 2 : 0)

  useEffect(() => {
    dragBlockRef.current.addEventListener('dragstart', (event: any) => event.preventDefault());
  }, [dragBlockRef]);

  return <div className={classnames(styles.wrapper, cstyles.wrapper, conf.showTheme ? styles.theme : '')}
              style={{
                width:  width+ "px",
                paddingLeft: hPadding + "px",
                paddingRight: hPadding + "px",
                paddingTop: vPadding + "px",
                paddingBottom: vPadding + "px",
              }}>
    <div className={styles.header}>
      <span>{conf.title}</span>
      <div className={styles.iconBlock}>
        <CloseIcon width={22} height={22} onClick={handler.closeEvent}/>
        <RefreshIcon width={22} height={22} onClick={handler.refreshEvent}/>
      </div>
    </div>
    <div className={classnames(styles.body, cstyles.body)} style={{width: conf.size + 'px', height: conf.size + 'px'}}>
      <div className={styles.loading}>
        <LoadingIcon />
      </div>

      <div className={cstyles.picture} style={{width: conf.size + 'px', height: conf.size + 'px'}}>
        <img className={data.image == '' ? styles.hide : ''} src={data.image} alt="..." />
        <div className={cstyles.round} />
      </div>

      <div className={cstyles.thumb}>
        <div className={cstyles.thumbBlock} style={{ transform: `rotate(${handler.getState().thumbAngle}deg)`}}>
          <img className={data.thumb == '' ? styles.hide : ''} src={data.thumb} alt="..." />
        </div>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.dragSlideBar} ref={dragBarRef}>
        <div className={styles.dragLine} />
        <div className={styles.dragBlock} ref={dragBlockRef} onMouseDown={handler.dragEvent} style={{left: handler.getState().dragLeft + "px"}}>
          <div className={styles.dragBlockInline} onTouchStart={handler.dragEvent}>
            <ArrowsIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default React.memo(Index)