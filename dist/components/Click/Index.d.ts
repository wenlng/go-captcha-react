/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
import React from 'react';
import { CaptchaConfig } from './meta/config';
import { CaptchaData } from "./meta/data";
import { CaptchaEvent } from "./meta/event";
export interface Props extends React.HTMLAttributes<HTMLElement> {
    data: CaptchaData;
    config?: CaptchaConfig;
    events?: CaptchaEvent;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
