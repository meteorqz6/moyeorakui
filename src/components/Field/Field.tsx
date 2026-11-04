import { useId, type ReactNode } from "react";
import { css, cx } from "../../../styled-system/css";

// 입력칸 하나의 제목, 안내문, 에러, 글자 수를 그리고 접근성 연결을 붙이는 내부 부품이에요.
// TextField(다음 단계에서 FieldButton, Select)가 안에서 쓰고, 패키지에서 export하지 않아요.
// 화면에서 Field와 입력칸을 직접 조합하면 id 연결을 빠뜨릴 수 있어, 조립된 컴포넌트만 공개해요.

export const fieldLabelStyles = css({
  display: "block",
  textStyle: "body3",
  color: "fg.neutral.stronger",
});

const rootStyles = css({
  display: "flex",
  flexDirection: "column",
  w: "full",
});

const labelSpacingStyles = css({ mb: "[8px]" });

// 아래 줄은 에러 live region 때문에 항상 그리지만, 보여 줄 내용이 있을 때만 위쪽 간격을 둔다.
const footerStyles = css({
  display: "flex",
  justifyContent: "space-between",
  gap: "8px",
  px: "4px",
  textStyle: "caption3",
  "&[data-has-content]": { mt: "[8px]" },
});

const helperTextStyles = css({ color: "fg.neutral.subtler" });

const errorMessageStyles = css({ color: "fg.negative.default" });

const characterCountStyles = css({
  flexShrink: 0,
  color: "fg.neutral.subtler",
  "&[data-exceeded], &[data-invalid]": { color: "fg.negative.default" },
});

type FieldMessagesProps = {
  helperText?: string;
  errorMessage?: string;
  helperTextId: string;
  errorMessageId: string;
  trailing?: ReactNode;
};

/** 안내문과 에러를 한 줄에 그린다. 에러가 있으면 안내문은 화면에서만 숨기고 스크린 리더용으로 남긴다. */
export function FieldMessages({
  helperText,
  errorMessage,
  helperTextId,
  errorMessageId,
  trailing,
}: FieldMessagesProps) {
  const hasContent = Boolean(helperText || errorMessage || trailing);
  return (
    <div className={footerStyles} data-has-content={hasContent || undefined}>
      <div>
        {helperText && (
          <span
            id={helperTextId}
            className={errorMessage ? css({ srOnly: true }) : helperTextStyles}
          >
            {helperText}
          </span>
        )}
        {/* 에러가 나타날 때 읽히도록 live region은 항상 그려 둔다. */}
        <span id={errorMessageId} aria-live="polite" className={errorMessageStyles}>
          {errorMessage}
        </span>
      </div>
      {trailing}
    </div>
  );
}

/** 그려진 안내문과 에러의 id만 모은다. */
export function describedBy({
  helperText,
  errorMessage,
  helperTextId,
  errorMessageId,
}: Pick<FieldMessagesProps, "helperText" | "errorMessage" | "helperTextId" | "errorMessageId">) {
  const ids = [helperText && helperTextId, errorMessage && errorMessageId].filter(Boolean);
  return ids.length > 0 ? ids.join(" ") : undefined;
}

export type FieldControlProps = {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: true;
};

export type FieldProps = {
  label: string;
  helperText?: string;
  /** 있으면 에러 상태가 돼요. */
  errorMessage?: string;
  characterCount?: { current: number; max: number };
  /** 입력칸의 id예요. 넘기지 않으면 자동으로 만들어요. */
  controlId?: string;
  className?: string;
  /** 입력칸을 그린다. 받은 속성을 입력칸에 그대로 넘겨야 제목, 안내문, 에러가 연결돼요. */
  children: (control: FieldControlProps) => ReactNode;
};

export function Field({
  label,
  helperText,
  errorMessage,
  characterCount,
  controlId: controlIdProp,
  className,
  children,
}: FieldProps) {
  const id = useId();
  const controlId = controlIdProp ?? `${id}-control`;
  const helperTextId = `${id}-helper`;
  const errorMessageId = `${id}-error`;
  const characterCountId = `${id}-count`;
  const invalid = Boolean(errorMessage);
  const exceeded = characterCount ? characterCount.current > characterCount.max : false;
  // 안내문에 제한을 적지 않은 화면에서도 제한과 현재 글자 수가 전달되도록, 글자 수도 입력칸에 연결한다.
  const ariaDescribedBy = [
    describedBy({ helperText, errorMessage, helperTextId, errorMessageId }),
    characterCount && characterCountId,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cx(rootStyles, className)}>
      <label htmlFor={controlId} className={cx(fieldLabelStyles, labelSpacingStyles)}>
        {label}
      </label>
      {children({
        id: controlId,
        "aria-describedby": ariaDescribedBy || undefined,
        "aria-invalid": invalid || undefined,
      })}
      <FieldMessages
        helperText={helperText}
        errorMessage={errorMessage}
        helperTextId={helperTextId}
        errorMessageId={errorMessageId}
        trailing={
          characterCount && (
            <span
              className={characterCountStyles}
              data-exceeded={exceeded || undefined}
              data-invalid={invalid || undefined}
            >
              {/* 보이는 "2/4"는 "2 슬래시 4"로 읽혀, 스크린 리더용 문구를 따로 둔다. */}
              <span aria-hidden>
                {characterCount.current}/{characterCount.max}
              </span>
              <span id={characterCountId} className={css({ srOnly: true })}>
                {characterCount.max}자 중 {characterCount.current}자 입력
              </span>
            </span>
          )
        }
      />
    </div>
  );
}
