/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
import { MutableRefObject } from "react";
import { CaptchaData, CaptchaPoint } from "../meta/data";
import { CaptchaEvent } from "../meta/event";
export declare const useHandler: (data: CaptchaData, event: CaptchaEvent, containerRef: MutableRefObject<any>, tileRef: MutableRefObject<any>) => {
    thumbPoint: CaptchaPoint;
    dragEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
