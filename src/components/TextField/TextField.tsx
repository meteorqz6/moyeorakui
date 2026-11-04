import {
  forwardRef,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type Ref,
} from "react";
import { css, cx } from "../../../styled-system/css";
import { Field } from "../Field/Field";
import { Icon } from "../Icon/Icon";
import { IconButton } from "../IconButton/IconButton";

const containerStyles = css({
  display: "flex",
  alignItems: "center",
  w: "full",
  boxSizing: "border-box",
  bg: "fill.neutral.faintest",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "stroke.neutral.default",
  borderRadius: "md",
  transition: "[border-color 0.15s]",
  _focusWithin: { borderColor: "stroke.brand.default" },
  "&[data-invalid]": {
    borderColor: "stroke.negative.default",
    _focusWithin: { borderColor: "stroke.negative.default" },
  },
});

const inputStyles = css({
  flex: "1",
  minW: "[0]",
  m: "[0]",
  p: "16px",
  border: "none",
  outline: "none",
  bg: "transparent",
  boxSizing: "border-box",
  fontFamily: "[inherit]",
  textStyle: "body2",
  color: "fg.neutral.stronger",
  caretColor: "fg.brand.default",
  _placeholder: { color: "fg.neutral.subtler" },
});

const clearButtonAreaStyles = css({ display: "flex", pr: "4px" });

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "disabled" | "maxLength" | "size" | "children" | "aria-invalid" | "aria-describedby"
> & {
  /** 제목이에요. 입력칸의 접근 가능한 이름이 돼요. */
  label: string;
  /** 평소 안내문이에요. 에러가 있으면 화면에서는 숨고 스크린 리더용으로 남아요. */
  helperText?: string;
  /** 있으면 에러 상태가 돼요. */
  errorMessage?: string;
  /** 있으면 글자 수를 "2/4"로 보여 줘요. 입력을 막지 않고, 넘으면 에러 색으로 바뀌어요. */
  maxCharacterCount?: number;
  /** 있으면 입력하는 중에 지우기 버튼을 보여 줘요. */
  onClear?: () => void;
  className?: string;
};

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") ref(value);
  else if (ref) (ref as { current: T | null }).current = value;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  {
    label,
    helperText,
    errorMessage,
    maxCharacterCount,
    onClear,
    id,
    className,
    value,
    defaultValue,
    onChange,
    ...props
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focusWithin, setFocusWithin] = useState(false);
  const isControlled = value !== undefined;
  const [uncontrolledLength, setUncontrolledLength] = useState(String(defaultValue ?? "").length);
  // 서비스의 글자 수 검증(zod `.max()`)과 같은 기준으로 문자열 길이를 센다.
  const length = isControlled ? String(value).length : uncontrolledLength;
  const showClear = Boolean(onClear) && focusWithin && length > 0;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setUncontrolledLength(event.target.value.length);
    onChange?.(event);
  };

  const handleClear = () => {
    // 버튼이 사라지기 전에 포커스를 입력칸으로 돌려, 포커스가 화면 밖으로 빠지지 않게 한다.
    inputRef.current?.focus();
    if (!isControlled && inputRef.current) {
      inputRef.current.value = "";
      setUncontrolledLength(0);
    }
    onClear?.();
  };

  return (
    <Field
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      characterCount={
        maxCharacterCount !== undefined ? { current: length, max: maxCharacterCount } : undefined
      }
      controlId={id}
      className={className}
    >
      {(control) => (
        <div
          className={containerStyles}
          data-invalid={control["aria-invalid"]}
          onFocus={() => setFocusWithin(true)}
          onBlur={(event) => {
            // 입력칸에서 지우기 버튼으로 Tab을 옮길 때는 포커스가 안에 남아 있다.
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setFocusWithin(false);
            }
          }}
        >
          <input
            {...props}
            {...control}
            ref={(node) => {
              inputRef.current = node;
              assignRef(ref, node);
            }}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            className={inputStyles}
          />
          {showClear && (
            <div className={clearButtonAreaStyles}>
              <IconButton
                aria-label="입력 지우기"
                size="md"
                variant="clear"
                // 누르는 순간 입력칸 포커스가 빠지면 버튼이 사라져 눌리지 않는다.
                // 포커스 이동은 mousedown에서 일어난다. WebKit 터치에서는 pointerdown을 막아도 이동한다.
                onMouseDown={(event) => event.preventDefault()}
                onClick={handleClear}
              >
                <Icon type="x_circle" size="md" />
              </IconButton>
            </div>
          )}
        </div>
      )}
    </Field>
  );
});
