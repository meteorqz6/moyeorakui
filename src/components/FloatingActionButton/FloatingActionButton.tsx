import { cva } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { Icon } from "../Icon/Icon";
import type { IconType } from "../Icon/registry";

const floatingActionButtonStyles = cva({
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

const ICON_MAP: Record<FloatingActionButtonVariant, IconType> = {
  up: "arrow_up",
  back: "chevron_left",
};

export type FloatingActionButtonVariant = "up" | "back";

export type FloatingActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: FloatingActionButtonVariant;
};

export function FloatingActionButton({ variant, className, ...props }: FloatingActionButtonProps) {
  return (
    <button type="button" className={cx(floatingActionButtonStyles(), className)} {...props}>
      <Icon type={ICON_MAP[variant]} size="md" />
    </button>
  );
}
