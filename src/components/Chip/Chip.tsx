import { cva, type RecipeVariantProps } from "../../../styled-system/css";
import { cx } from "../../lib/utils";

const chipStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    cursor: "pointer",
    textStyle: "body4",
    py: "6px",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      brand: {
        bg: "fill.brand.default",
        color: "fg.neutral.faintest",
      },
      "brand-weak": {
        bg: "fill.brand.subtle",
        color: "fg.brand.default",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "stroke.brand.default",
      },
      neutral: {
        bg: "fill.neutral.default",
        color: "fg.neutral.faintest",
        _disabled: {
          bg: "fill.neutral.subtler",
          color: "fg.neutral.subtler",
        },
      },
      inverted: {
        bg: "fill.neutral.default",
        color: "fg.neutral.subtler",
      },
      "inverted-stroke": {
        bg: "fill.neutral.default",
        color: "fg.neutral.subtler",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "stroke.neutral.subtle",
      },
    },
    shape: {
      square: {
        borderRadius: "xs",
        px: "12px",
      },
      pill: {
        borderRadius: "full",
        px: "14px",
      },
    },
  },
  defaultVariants: {
    variant: "neutral",
    shape: "square",
  },
});

export type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof chipStyles>;

export function Chip({
  variant,
  shape,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      className={cx(chipStyles({ variant, shape }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
