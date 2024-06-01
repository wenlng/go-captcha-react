/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/

import React, {FC, useRef} from 'react';
import classnames from "classnames";
import cstyles from './index.module.less'
import styles from './../../gocaptcha.module.less'
import CloseIcon from './../../assets/icons/CloseIcon'
import RefreshIcon from './../../assets/icons/RefreshIcon'
import LoadingIcon from './../../assets/icons/LoadingIcon'
import ArrowsIcon from "../../assets/icons/ArrowsIcon";
import {CaptchaConfig, defaultConfig} from "./meta/config";
import {useHandler} from "./hooks/useHandler";
import {CaptchaData} from "./meta/data";
import {CaptchaEvent} from "./meta/event";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: CaptchaData,
  config?: CaptchaConfig;
  events?: CaptchaEvent,
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
  const width = (conf.width || 0) + ( vPadding * 2)

  return <div className={classnames(styles.wrapper, cstyles.wrapper, conf.showTheme && styles.theme)}
              style={{
                width:  width+ "px",
                paddingLeft: vPadding + "px",
                paddingRight: vPadding + "px",
                paddingTop: hPadding + "px",
                paddingBottom: hPadding + "px",
              }}>
    <div className={styles.header}>
      <span>请拖动滑块完成拼图</span>
      <div className={styles.iconBlock}>
        <CloseIcon width={22} height={22} onClick={handler.closeEvent}/>
        <RefreshIcon width={22} height={22} onClick={handler.refreshEvent}/>
      </div>
    </div>
    <div className={classnames(styles.body, cstyles.body)}>
      <div className={styles.loading}>
        <LoadingIcon />
      </div>

      <div className={cstyles.picture} style={{width: conf.size + 'px', height: conf.size + 'px'}}>
        <img src={data.image} alt="..." />
        <div className={cstyles.round} />
      </div>

      <div className={cstyles.thumb}>
        <div className={cstyles.thumbBlock} style={{ transform: `rotate(${handler.getState().thumbAngle}deg)`}}>
          <img src={data.thumb} alt="..." />
        </div>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.dragSlideBar} ref={dragBarRef} onMouseDown={handler.dragEvent}>
        <div className={styles.dragLine} />
        <div className={styles.dragBlock} ref={dragBlockRef} onTouchStart={handler.dragEvent} style={{left: handler.getState().dragLeft + "px"}}>
          <ArrowsIcon />
        </div>
      </div>
    </div>
  </div>
}

export default React.memo(Index)