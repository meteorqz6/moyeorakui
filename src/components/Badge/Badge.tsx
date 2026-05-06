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
  },
  variants: {
    variant: {
      brand: {
        bg: "fill.brand.subtler",
        color: "fg.brand.default",
      },
      neutral: {
        bg: "stroke.neutral.subtler",
        color: "fg.neutral.subtler",
      },
      stroke: {
        bg: "fill.neutral.default",
        color: "fg.neutral.subtler",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "stroke.neutral.subtle",
      },
    },
    size: {
      sm: { textStyle: "caption3" },
      md: { textStyle: "body4" },
    },
  },
  defaultVariants: {
    variant: "neutral",
    size: "md",
  },
});

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  RecipeVariantProps<typeof badgeStyles>;

export function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cx(badgeStyles({ variant, size }), className)} {...props}>
      {children}
    </span>
  );
}
