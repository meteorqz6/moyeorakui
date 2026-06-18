import { css } from "../../../styled-system/css";
import { Icon, type DecorativeIconType } from "../Icon/Icon";

export type ToastVariant = "neutral" | "negative" | "positive";

type NeutralToastProps = {
  variant: "neutral";
  icon?: DecorativeIconType;
  message: string;
};

type NegativeToastProps = {
  variant: "negative";
  message: string;
};

type PositiveToastProps = {
  variant: "positive";
  message: string;
};

export type ToastProps = NeutralToastProps | NegativeToastProps | PositiveToastProps;

export function Toast(props: ToastProps) {
  const { variant, message } = props;

  return (
    <div
      className={css({
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        px: "16px",
        py: "8px",
        bg: "fg.neutral.default",
        borderRadius: "full",
        whiteSpace: "nowrap",
      })}
    >
      {variant === "neutral" && props.icon && (
        <Icon type={props.icon} variant="inverted" size="sm" />
      )}
      {variant === "negative" && <Icon type="error" size="sm" />}
      {variant === "positive" && <Icon type="success" size="sm" />}
      <span
        className={css({
          textStyle: "body4",
          color: "fg.neutral.faintest",
        })}
      >
        {message}
      </span>
    </div>
  );
}
