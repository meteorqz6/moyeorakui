import { Slot } from "@radix-ui/react-slot";
import { cva, type RecipeVariantProps } from "../../../styled-system/css";
import { cx } from "../../lib/utils";

const buttonCtaStyles = cva({
  base: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    cursor: "pointer",
    textStyle: "title3",
    borderRadius: "sm",
    p: "16px",
    _disabled: {
      cursor: "not-allowed",
      bg: "fill.neutral.default-disabled",
      color: "fg.neutral.subtlest",
      _active: {
        bg: "fill.neutral.default-disabled",
      },
    },
  },
  variants: {
    variant: {
      default: {
        bg: "fill.neutral.default",
        color: "fg.neutral.faintest",
        _active: { bg: "fill.neutral.default-pressed" },
      },
      brand: {
        bg: "fill.brand.default",
        color: "fg.neutral.faintest",
        _active: { bg: "fill.brand.default-pressed" },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ButtonCtaProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof buttonCtaStyles> & {
    asChild?: boolean;
  };

export function ButtonCta({
  variant,
  asChild = false,
  className,
  children,
  ...props
}: ButtonCtaProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cx(buttonCtaStyles({ variant }), className)} {...props}>
      {children}
    </Comp>
  );
}
