import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    CSSProperties,
    useState,
    useEffect,
    useRef,
    useLayoutEffect,
    forwardRef,
} from "react";
import PropTypes from "prop-types";

function mergeRefs<T = any>(
    refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === "function") {
                ref(value);
            } else if (ref != null) {
                (ref as React.MutableRefObject<T | null>).current = value;
            }
        });
    };
}

interface AutowidthInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    extraWidth?: number | string;
    minWidth?: number | string;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    onAutosize?: (newWidth: number) => void;
    placeholderIsMinWidth?: boolean;
    value?: string | number;
}

const sizerStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    height: 0,
    overflow: "scroll",
    whiteSpace: "pre",
};

/**
 * Automatically sized input field.
 */
const AutowidthInput: React.FC<AutowidthInputProps> = forwardRef<
    HTMLInputElement,
    AutowidthInputProps
>(
    (
        {
            extraWidth = 16,
            wrapperClassName,
            wrapperStyle: wrapperStyleProp,
            onAutosize,
            placeholderIsMinWidth,
            minWidth = 0,
            ...props
        },
        forwardedRef
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const sizerRef = useRef<HTMLDivElement>(null);
        const placeholderSizerRef = useRef<HTMLDivElement>(null);

        const [input, setInput] = useState<string>("");
        const [inputWidth, setInputWidth] = useState(0);

        const usedValue = `${props.value ?? input}`;

        const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);

            if (props.onChange) props.onChange(e);
        };

        /* Copy styles of the input field to the sizer, ensuring that the width of the input adjusts accordingly */
        useLayoutEffect(() => {
            if (inputRef.current && sizerRef.current) {
                const computedStyle = window.getComputedStyle(inputRef.current);

                sizerRef.current.style.fontSize = computedStyle.fontSize;
                sizerRef.current.style.fontFamily = computedStyle.fontFamily;
                sizerRef.current.style.fontWeight = computedStyle.fontWeight;
                sizerRef.current.style.fontStyle = computedStyle.fontStyle;
                sizerRef.current.style.letterSpacing =
                    computedStyle.letterSpacing;
                sizerRef.current.style.textTransform =
                    computedStyle.textTransform;
            }
        }, []);

        useEffect(() => {
            const sizerWidth = sizerRef.current?.scrollWidth;
            const placeholderWidth = placeholderSizerRef.current?.scrollWidth;

            if (sizerWidth && usedValue.length) {
                /* If the input field has content, update the sizer to match its width  */

                let width = sizerWidth;

                if (
                    placeholderIsMinWidth &&
                    placeholderWidth &&
                    sizerWidth < placeholderWidth &&
                    placeholderSizerRef.current
                ) {
                    width = placeholderWidth;
                }

                if (width < +minWidth) {
                    width = +minWidth;
                }

                if (width) {
                    setInputWidth(width + +extraWidth);
                    if (onAutosize) onAutosize(width);
                }
            } else if (props.placeholder && placeholderWidth) {
                /* If no input value exists, check for placeholder value and update the sizer accordingly  */

                setInputWidth(Math.max(+minWidth, placeholderWidth) + +extraWidth);

                if (onAutosize) onAutosize(placeholderWidth);
            } else if (sizerRef.current) {
                /* If no input value or placeholder exists, update the sizer to the width of the "extraWidth" prop (default is 16) */

                setInputWidth(+extraWidth);
                if (onAutosize) onAutosize(+minWidth);
            }
        }, [
            usedValue,
            props.placeholder,
            extraWidth,
            placeholderIsMinWidth,
            onAutosize,
            setInputWidth,
            minWidth,
        ]);

        const wrapperStyle: CSSProperties = {
            ...wrapperStyleProp,
            position: "relative",
            display: props.style?.display ?? "inline-block",
        };

        const inputStyle: CSSProperties = {
            boxSizing: "content-box",
            width: inputWidth,
            ...props.style,
        };

        return (
            <div
                className={wrapperClassName}
                style={wrapperStyle}
                data-testid="wrapper"
            >
                <div style={sizerStyle} ref={sizerRef} data-testid="sizer">
                    {usedValue}
                </div>
                <input
                    {...props}
                    ref={mergeRefs([inputRef, forwardedRef])}
                    value={usedValue}
                    style={inputStyle}
                    onChange={handleInput}
                    data-testid="input"
                />
                {props.placeholder ? (
                    <div
                        ref={placeholderSizerRef}
                        style={sizerStyle}
                        data-testid="placeholder-sizer"
                    >
                        {props.placeholder}
                    </div>
                ) : null}
            </div>
        );
    }
);

AutowidthInput.propTypes = {
    className: PropTypes.string, // className for the outer element
    defaultValue: PropTypes.any, // default field value
    extraWidth: PropTypes.oneOfType([
        // additional width for input element
        PropTypes.number,
        PropTypes.string,
    ]),
    id: PropTypes.string, // id to use for the input, can be set for consistent snapshots
    wrapperClassName: PropTypes.string, // className for the wrapper element callback for the input element
    wrapperStyle: PropTypes.object, // css styles for the wrapper element
    minWidth: PropTypes.oneOfType([
        // minimum width for input element
        PropTypes.number,
        PropTypes.string,
    ]),
    onAutosize: PropTypes.func, // onAutosize handler: function(newWidth) {}
    onChange: PropTypes.func, // onChange handler: function(event) {}
    placeholder: PropTypes.string, // placeholder text
    placeholderIsMinWidth: PropTypes.bool, // don't collapse size to less than the placeholder
    style: PropTypes.object, // css styles for the outer element
    value: PropTypes.oneOfType([
        // field value
        PropTypes.number,
        PropTypes.string
    ]),
};

export default AutowidthInput;
