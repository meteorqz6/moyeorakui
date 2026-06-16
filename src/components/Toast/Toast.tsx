import { css } from "../../../styled-system/css";
import { Icon } from "../Icon/Icon";

export type ToastType = "success" | "error";

export type ToastProps = {
  type: ToastType;
  message: string;
};

export function Toast({ type, message }: ToastProps) {
  return (
    <div
      className={css({
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        px: "16px",
        py: "8px",
        bg: "fg.neutral.subtle",
        borderRadius: "full",
        whiteSpace: "nowrap",
      })}
    >
      <Icon type={type} size="sm" />
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
