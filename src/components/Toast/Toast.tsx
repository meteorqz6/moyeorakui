import * as RadixToast from "@radix-ui/react-toast";
import { css } from "../../../styled-system/css";
import { Icon, type DecorativeIconType } from "../Icon/Icon";

export const ToastProvider = RadixToast.Provider;

export type ToastViewportProps = RadixToast.ToastViewportProps;

export function ToastViewport(props: ToastViewportProps) {
  return (
    <RadixToast.Viewport
      className={css({
        position: "fixed",
        bottom: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        zIndex: 100,
        outline: "none",
        listStyleType: "none",
      })}
      {...props}
    />
  );
}

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

export type ToastProps = (NeutralToastProps | NegativeToastProps | PositiveToastProps) & {
  /** 토스트가 열려 있는지 여부예요. 전달하면 controlled로 동작해요. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** 자동으로 닫히기까지의 시간(ms)이에요. */
  duration?: number;
};

export function Toast(props: ToastProps) {
  const { variant, message, open, defaultOpen, onOpenChange, duration } = props;

  return (
    <RadixToast.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      duration={duration}
      className={css({
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        px: "16px",
        py: "8px",
        bg: "overlay.neutral.stronger",
        borderRadius: "full",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
      })}
    >
      {variant === "neutral" && props.icon && (
        <Icon type={props.icon} variant="inverted" size="sm" />
      )}
      {variant === "negative" && <Icon type="error" size="sm" />}
      {variant === "positive" && <Icon type="success" size="sm" />}
      <RadixToast.Description
        className={css({
          textStyle: "body4",
          color: "fg.neutral.faintest",
        })}
      >
        {message}
      </RadixToast.Description>
    </RadixToast.Root>
  );
}
