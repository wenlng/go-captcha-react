/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import React, {FC} from "react";
import {ButtonConfig, defaultConfig} from "./meta/config";
import styles from './index.module.less'
import BtnDefaultIcon from "../../assets/icons/BtnDefaultIcon";
import BtnErrorIcon from "../../assets/icons/BtnErrorIcon";
import BtnWarnIcon from "../../assets/icons/BtnWarnIcon";
import BtnSuccessIcon from "../../assets/icons/BtnSuccessIcon";
import classnames from "classnames";

export type ButtonType = "default" | "warn" | "error" | "success";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  config?: ButtonConfig;
  clickEvent?: () => void;
  disabled?: boolean;
  type?: ButtonType;
  title?: string;
}

const Index:FC<Props> = (props: Props) => {
  const conf = {
    ...defaultConfig(),
    ...(props.config || {})
  }

  const type = props.type || "default"

  let btnIcon = <BtnDefaultIcon />
  let cn = styles.default
  if (type == "warn") {
    btnIcon = <BtnWarnIcon />
    cn = styles.warn
  } else if (type == "error") {
    btnIcon = <BtnErrorIcon />
    cn = styles.error
  } else if (type == "success") {
    btnIcon = <BtnSuccessIcon />
    cn = styles.success
  }

  return <div
    className={classnames(styles.btnBlock, cn, props.disabled ? styles.disabled : '')}
    style={{
      width:  conf.width + "px",
      height: conf.height + "px",
      paddingLeft: conf.verticalPadding + "px",
      paddingRight: conf.verticalPadding + "px",
      paddingTop: conf.verticalPadding + "px",
      paddingBottom: conf.verticalPadding + "px",
    }}
    onClick={props.clickEvent}
  >
    {type == "default" ? <div className={styles.ripple}>{btnIcon}</div> : btnIcon}
    <span>{props.title || "点击按键进行验证"}</span>
  </div>
}

export default React.memo(Index)