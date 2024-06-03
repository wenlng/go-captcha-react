/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/

import React, {FC} from 'react';
import classnames from "classnames";
import cstyles from './index.module.less'
import styles from './../../gocaptcha.module.less'
import {CaptchaConfig, defaultConfig} from './meta/config'
import {CaptchaData, CaptchaDot} from "./meta/data";
import CloseIcon from './../../assets/icons/CloseIcon'
import RefreshIcon from './../../assets/icons/RefreshIcon'
import LoadingIcon from './../../assets/icons/LoadingIcon'
import {CaptchaEvent} from "./meta/event";
import {useHandler} from "./hooks/useHandler";

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

  const data = props.data || {}
  const handler = useHandler(data, props.events || {});

  const hPadding = conf.horizontalPadding || 0
  const vPadding = conf.verticalPadding || 0
  const width = (conf.width || 0) + ( vPadding * 2)

  return <div className={classnames(styles.wrapper, conf.showTheme ? styles.theme : '')}
              style={{
                width:  width+ "px",
                paddingLeft: vPadding + "px",
                paddingRight: vPadding + "px",
                paddingTop: hPadding + "px",
                paddingBottom: hPadding + "px",
              }}>
    <div className={styles.header}>
      <span>请在下图<em>依次</em>点击：</span>
      <img className={data.thumb == '' && styles.hide} style={{width: conf.thumbWidth + "px", height: conf.thumbHeight + "px"}} src={data.thumb} alt="..." />
    </div>
    <div className={styles.body} style={{width: conf.width + "px", height: conf.height + "px"}}>
      <div className={styles.loading}>
        <LoadingIcon />
      </div>
      <img className={classnames(styles.picture, data.image == '' && styles.hide)} style={{width: conf.width + "px", height: conf.height + "px"}} src={data.image} alt="..." onClick={handler.clickEvent}/>
      <div className={cstyles.dots}>
        {
          handler.getDots().map((dot: CaptchaDot) => {
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
        <button onClick={handler.confirmEvent}>确认</button>
      </div>
    </div>
  </div>
}

export default React.memo(Index)