import React, { InputHTMLAttributes, CSSProperties } from "react";
interface AutowidthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    extraWidth?: number | string;
    minWidth?: number | string;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    onAutosize?: (newWidth: number) => void;
    placeholderIsMinWidth?: boolean;
    value?: string;
}
/**
 * Automatically sized input field.
 */
declare const AutowidthInput: React.FC<AutowidthInputProps>;
export default AutowidthInput;
