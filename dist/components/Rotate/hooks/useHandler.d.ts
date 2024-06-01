/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
import { MutableRefObject } from "react";
import { CaptchaData } from "../meta/data";
import { CaptchaEvent } from "../meta/event";
export declare const useHandler: (data: CaptchaData, event: CaptchaEvent, dragBlockRef: MutableRefObject<any>, dragBarRef: MutableRefObject<any>) => {
    getState: () => {
        dragLeft: number;
        thumbAngle: number;
    };
    thumbAngle: number;
    dragEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
