import React from "react";
import { CaptchaConfig } from "./meta/config";
export interface Props extends React.HTMLAttributes<HTMLElement> {
    config?: CaptchaConfig;
    clickEvent?: () => void;
    disabled?: boolean;
    type?: "default" | "warn" | "error" | "success";
    title?: string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
