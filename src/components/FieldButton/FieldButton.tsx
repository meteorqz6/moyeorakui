import { forwardRef, useId, type ButtonHTMLAttributes } from "react";
import { css, cx } from "../../../styled-system/css";
import { focusRing } from "../../lib/focus-ring";
import { Field } from "../Field/Field";
import { Icon } from "../Icon/Icon";

const buttonStyles = css({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  w: "full",
  minH: "[58px]",
  m: "[0]",
  py: "16px",
  pl: "12px",
  pr: "16px",
  boxSizing: "border-box",
  bg: "fill.neutral.faintest",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "stroke.neutral.default",
  borderRadius: "md",
  fontFamily: "[inherit]",
  textAlign: "start",
  cursor: "pointer",
  _active: { bg: "fill.neutral.subtler" },
  ...focusRing,
});

const contentStyles = css({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  minW: "[0]",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
});

const valueStyles = css({ textStyle: "body2", color: "fg.neutral.stronger" });

const placeholderStyles = css({ textStyle: "body2", color: "fg.neutral.subtler" });

const descriptionStyles = css({ textStyle: "body5", color: "fg.neutral.default" });

export type FieldButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "type"
  | "disabled"
  | "value"
  | "children"
  | "aria-label"
  | "aria-labelledby"
  | "aria-invalid"
  | "aria-describedby"
> & {
  /** 제목이에요. 고른 값과 함께 버튼의 접근 가능한 이름이 돼요. */
  label: string;
  /** 고른 값이에요. 비어 있으면 placeholder를 보여 줘요. */
  value?: string;
  /** 고른 값 아래에 보이는 설명이에요. 값이 없으면 보이지 않아요. */
  description?: string;
  /** 값이 없을 때 보이는 글자예요. */
  placeholder: string;
  className?: string;
};

export const FieldButton = forwardRef<HTMLButtonElement, FieldButtonProps>(function FieldButton(
  { label, value, description, placeholder, id, className, ...props },
  ref,
) {
  const baseId = useId();
  const textId = `${baseId}-text`;
  const descriptionId = `${baseId}-description`;
  const visibleDescription = value ? description : undefined;

  return (
    <Field label={label} controlId={id} className={className}>
      {(control, { labelId }) => (
        <button
          {...props}
          {...control}
          ref={ref}
          type="button"
          aria-labelledby={[labelId, textId, visibleDescription && descriptionId]
            .filter(Boolean)
            .join(" ")}
          className={buttonStyles}
        >
          <Icon type="search" size="md" variant="default" />
          <span className={contentStyles}>
            <span id={textId} className={value ? valueStyles : placeholderStyles}>
              {value || placeholder}
            </span>
            {visibleDescription && (
              <span id={descriptionId} className={descriptionStyles}>
                {visibleDescription}
              </span>
            )}
          </span>
        </button>
      )}
    </Field>
  );
});
