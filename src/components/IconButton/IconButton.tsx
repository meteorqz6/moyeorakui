import { cva, type RecipeVariantProps } from "../../../styled-system/css";
import { cx } from "../../lib/utils";

const iconButtonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      clear: {
        bg: "transparent",
        color: "fg.neutral.subtler",
        _active: {
          color: "fg.neutral.subtlest",
        },
        _disabled: {
          color: "fg.neutral.faintest",
          bg: "transparent",
          _active: { color: "fg.neutral.faintest" },
        },
      },
      fill: {
        bg: "fill.inverted.default",
        color: "fg.inverted.default",
        _active: {
          bg: "fill.inverted.default-pressed",
        },
        _disabled: {
          bg: "fill.inverted.default-disabled",
          color: "fg.neutral.subtlest",
          _active: {
            bg: "fill.inverted.default-disabled",
            color: "fg.neutral.subtlest",
          },
        },
      },
    },
    size: {
      sm: { width: "36px", height: "36px", borderRadius: "xs" },
      md: { width: "48px", height: "48px", borderRadius: "sm" },
      lg: { width: "54px", height: "54px", borderRadius: "sm" },
    },
  },
  defaultVariants: {
    variant: "clear",
    size: "md",
  },
});

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof iconButtonStyles>;

export function IconButton({ size, variant, className, children, ...props }: IconButtonProps) {
  return (
    <button className={cx(iconButtonStyles({ size, variant }), className)} {...props}>
      {children}
    </button>
  );
}
