import { useId, type FieldsetHTMLAttributes, type ReactNode } from "react";
import { css, cx } from "../../../styled-system/css";
import { describedBy, fieldLabelStyles, FieldMessages } from "../Field/Field";

const rootStyles = css({
  display: "flex",
  flexDirection: "column",
  // fieldset은 기본으로 내용 폭보다 줄어들지 않아, 안에서 가로 스크롤이 되도록 최소 폭을 없앤다.
  minW: "[0]",
  m: "[0]",
  p: "[0]",
  border: "none",
});

// legend는 flex 항목이 아니라 gap을 받지 않아, Field와 같은 제목 아래 간격 8px를 직접 준다.
const legendStyles = css({ p: "[0]", mb: "[8px]" });

// 에러는 쓰는 곳이 생길 때 Field와 같은 부품(FieldMessages)으로 붙인다.
export type FieldsetProps = Omit<
  FieldsetHTMLAttributes<HTMLFieldSetElement>,
  "disabled" | "aria-describedby"
> & {
  /** 묶음의 제목이에요. `legend`로 그려져 묶음의 이름이 돼요. */
  label: string;
  /** 묶음 아래의 안내문이에요. 묶음에 연결돼 스크린 리더가 묶음에 들어갈 때 함께 읽어요. */
  helperText?: string;
  children: ReactNode;
};

export function Fieldset({ label, helperText, className, children, ...props }: FieldsetProps) {
  const id = useId();
  const helperTextId = `${id}-helper`;
  const errorMessageId = `${id}-error`;

  return (
    <fieldset
      {...props}
      aria-describedby={describedBy({ helperText, helperTextId, errorMessageId })}
      className={cx(rootStyles, className)}
    >
      <legend className={cx(fieldLabelStyles, legendStyles)}>{label}</legend>
      {children}
      {helperText && (
        <FieldMessages
          helperText={helperText}
          helperTextId={helperTextId}
          errorMessageId={errorMessageId}
        />
      )}
    </fieldset>
  );
}
