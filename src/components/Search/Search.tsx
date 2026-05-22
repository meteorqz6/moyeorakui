import { useState, useRef } from "react";
import { css } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { Icon } from "../Icon/Icon";
import { IconButton } from "../IconButton/IconButton";

export type SearchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  onClear?: () => void;
};

export function Search({
  className,
  placeholder = "텍스트를 입력해주세요.",
  value,
  defaultValue,
  onChange,
  onClear,
  onFocus,
  onBlur,
  ...props
}: SearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const inputRef = useRef<HTMLInputElement>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = String(currentValue).length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue("");
    onClear?.();
    inputRef.current?.focus();
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div
      className={cx(
        css({
          display: "flex",
          alignItems: "center",
          gap: "2px",
          px: "11px",
          h: "48px",
          w: "full",
          bg: "fill.neutral.default",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: isFocused ? "stroke.brand.default" : "stroke.neutral.default",
          borderRadius: "sm",
          overflow: "hidden",
          transition: "border-color 0.15s ease",
        }),
        className,
      )}
    >
      <Icon type="search" size="md" variant="default" className={css({ flexShrink: 0 })} />
      <div
        className={css({
          flex: 1,
          display: "flex",
          alignItems: "center",
          px: "4px",
          overflow: "hidden",
        })}
      >
        <input
          ref={inputRef}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={css({
            flex: 1,
            w: "full",
            bg: "transparent",
            border: "none",
            outline: "none",
            textStyle: "body2",
            color: "fg.neutral.default",
            caretColor: "stroke.brand.default",
            _placeholder: { color: "fg.neutral.subtlest" },
          })}
          {...props}
        />
      </div>
      {isFocused && hasValue && (
        <IconButton
          size="md"
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleClear();
          }}
          className={css({ mr: "-11px" })}
          aria-label="검색어 지우기"
        >
          <Icon type="delete" size="md" />
        </IconButton>
      )}
    </div>
  );
}
