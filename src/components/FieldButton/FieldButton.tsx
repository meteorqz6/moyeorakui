import { forwardRef, useId, type ButtonHTMLAttributes } from "react";
import { css, cx } from "../../../styled-system/css";
import { focusRing } from "../../lib/focus-ring";
import { Field } from "../Field/Field";
import { Icon } from "../Icon/Icon";

const buttonStyles = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  w: "full",
  h: "[58px]",
  m: "[0]",
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

const textStyles = css({
  flex: "1",
  minW: "[0]",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textStyle: "body2",
});

const valueStyles = css({ color: "fg.neutral.stronger" });

const placeholderStyles = css({ color: "fg.neutral.subtler" });

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
  /** 값이 없을 때 보이는 글자예요. */
  placeholder: string;
  className?: string;
};

export const FieldButton = forwardRef<HTMLButtonElement, FieldButtonProps>(function FieldButton(
  { label, value, placeholder, id, className, ...props },
  ref,
) {
  const textId = useId();

  return (
    <Field label={label} controlId={id} className={className}>
      {(control, { labelId }) => (
        <button
          {...props}
          {...control}
          ref={ref}
          type="button"
          aria-labelledby={`${labelId} ${textId}`}
          className={buttonStyles}
        >
          <Icon type="search" size="md" variant="default" />
          <span id={textId} className={cx(textStyles, value ? valueStyles : placeholderStyles)}>
            {value || placeholder}
          </span>
        </button>
      )}
    </Field>
  );
});
