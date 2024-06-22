/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import React, {FC} from 'react';
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

export interface Props extends React.HTMLAttributes<HTMLElement> {
  data: ClickData,
  config?: ClickConfig;
  events?: ClickEvent,
}

const Index:FC<Props> = (props: Props) => {
  const conf = {
    ...defaultConfig(),
    ...(props.config || {})
  }

  const data = props.data || {}
  const handler = useHandler(data, props.events || {});

  const hPadding = conf.horizontalPadding || 0
  const vPadding = conf.verticalPadding || 0
  const width = (conf.width || 0) + ( hPadding * 2) + (conf.showTheme ? 2 : 0)

  return <div className={classnames(styles.wrapper, conf.showTheme ? styles.theme : '')}
              style={{
                width:  width+ "px",
                paddingLeft: hPadding + "px",
                paddingRight: hPadding + "px",
                paddingTop: vPadding + "px",
                paddingBottom: vPadding + "px",
              }}>
    <div className={styles.header}>
      <span>{conf.title}</span>
      <img className={data.thumb == '' ? styles.hide : ''} style={{width: conf.thumbWidth + "px", height: conf.thumbHeight + "px"}} src={data.thumb} alt="..." />
    </div>
    <div className={styles.body} style={{width: conf.width + "px", height: conf.height + "px"}}>
      <div className={styles.loading}>
        <LoadingIcon />
      </div>
      <img className={classnames(styles.picture, data.image == '' ? styles.hide : '')} style={{width: conf.width + "px", height: conf.height + "px"}} src={data.image} alt="..." onClick={handler.clickEvent}/>
      <div className={cstyles.dots}>
        {
          handler.getDots().map((dot: ClickDot) => {
            return <div className="dot" style={{
              top: (dot.y - 11) + "px",
              left: (dot.x - 11) + "px",
            }} key={dot.key + "-" + dot.index}>{dot.index}</div>
          })
        }
      </div>
    </div>
    <div className={styles.footer}>
      <div className={classnames(styles.iconBlock, cstyles.iconBlock)}>
        <CloseIcon width={22} height={22} onClick={handler.closeEvent}/>
        <RefreshIcon width={22} height={22} onClick={handler.refreshEvent}/>
      </div>
      <div className={styles.buttonBlock}>
        <button onClick={handler.confirmEvent}>{conf.buttonText}</button>
      </div>
    </div>
  </div>
}

export default React.memo(Index)