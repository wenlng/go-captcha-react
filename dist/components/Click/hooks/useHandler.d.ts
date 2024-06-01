/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/
import { CaptchaData, CaptchaDot } from "../meta/data";
import { CaptchaEvent } from "../meta/event";
export declare const useHandler: (_data: CaptchaData, event: CaptchaEvent) => {
    setDots: import("react").Dispatch<import("react").SetStateAction<CaptchaDot[]>>;
    getDots: any;
    clickEvent: any;
    confirmEvent: any;
    closeEvent: any;
    refreshEvent: any;
};
