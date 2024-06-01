/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
import { MutableRefObject } from "react";
import { CaptchaData } from "../meta/data";
import { CaptchaEvent } from "../meta/event";
export declare const useHandler: (data: CaptchaData, event: CaptchaEvent, containerRef: MutableRefObject<any>, tileRef: MutableRefObject<any>, dragBlockRef: MutableRefObject<any>, dragBarRef: MutableRefObject<any>) => {
    getState: () => {
        dragLeft: number;
        thumbLeft: number;
    };
    getPoint: any;
    dragEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
