import { cva, type RecipeVariantProps } from "../../../styled-system/css";
import { cx } from "../../lib/utils";

const badgeStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    borderRadius: "xs",
    px: "8px",
    py: "4px",
    boxSizing: "border-box",
  },
  variants: {
    variant: {
      "brand-weak": {
        bg: "fill.brand.subtler",
        color: "fg.brand.default",
      },
      "neutral-weak": {
        bg: "fill.neutral.subtler",
        color: "fg.neutral.subtle",
      },
      outline: {
        bg: "fill.neutral.faintest",
        color: "fg.neutral.subtle",
        boxShadow: "[inset 0 0 0 1px {colors.stroke.neutral.subtle}]",
      },
    },
    size: {
      sm: { textStyle: "caption3" },
      md: { textStyle: "body4" },
    },
  },
  defaultVariants: {
    variant: "neutral-weak",
    size: "md",
  },
});

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  RecipeVariantProps<typeof badgeStyles>;

export function Badge({ variant, size, className, children, ...props }: BadgeProps) {
  return (
    <span className={cx(badgeStyles({ variant, size }), className)} {...props}>
      {children}
    </span>
  );
}
