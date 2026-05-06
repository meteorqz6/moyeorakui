import { cva } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { Icon } from "../Icon/Icon";
import type { IconType } from "../Icon/registry";

const floatingButtonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    w: "40px",
    h: "40px",
    borderRadius: "full",
    bg: "fill.neutral.default",
    shadow: "strong",
    cursor: "pointer",
    _active: { bg: "fill.neutral.stronger" },
    _disabled: { cursor: "not-allowed", opacity: 0.4 },
  },
});

const ICON_MAP: Record<FloatingButtonVariant, IconType> = {
  up: "arrow_up",
  back: "chevron_left",
};

export type FloatingButtonVariant = "up" | "back";

export type FloatingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: FloatingButtonVariant;
};

export function FloatingButton({ variant, className, ...props }: FloatingButtonProps) {
  return (
    <button
      type="button"
      className={cx(floatingButtonStyles(), className)}
      {...props}
    >
      <Icon type={ICON_MAP[variant]} size="24px" style="default" />
    </button>
  );
}
