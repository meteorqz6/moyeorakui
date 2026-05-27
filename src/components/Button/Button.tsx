import { Slot } from "@radix-ui/react-slot";
import { cva, type RecipeVariantProps } from "../../../styled-system/css";
import { cx } from "../../lib/utils";

const buttonStyles = cva({
  base: {
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    cursor: "pointer",
    gap: "2px",
    _disabled: {
      cursor: "not-allowed",
      bg: "fill.inverted.default-disabled",
      color: "fg.neutral.subtlest",
      borderColor: "transparent",
      _active: {
        bg: "fill.inverted.default-disabled",
      },
    },
  },
  variants: {
    variant: {
      default: {
        bg: "fill.inverted.default",
        color: "fg.inverted.default",
        _active: { bg: "fill.inverted.default-pressed" },
      },
      brand: {
        bg: "fill.brand.default",
        color: "fg.inverted.default",
        _active: { bg: "fill.brand.default-pressed" },
      },
      "brand-weak": {
        bg: "fill.brand.subtle",
        color: "fg.brand.default",
        _active: { bg: "fill.brand.subtle-pressed" },
      },
      outline: {
        bg: "fill.neutral.default",
        color: "fg.neutral.subtle",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "stroke.neutral.subtle",
        _active: { bg: "fill.neutral.stronger" },
      },
      ghost: {
        bg: "transparent",
        color: "fg.neutral.subtle",
        _active: { bg: "fill.neutral.stronger" },
      },
      "ghost-brand": {
        bg: "transparent",
        color: "fg.brand.default",
        _active: { bg: "fill.neutral.stronger" },
      },
    },
    display: {
      inline: { display: "inline-flex" },
      full: { display: "flex", width: "100%" },
    },
    size: {
      sm: {
        textStyle: "body5",
        borderRadius: "xs",
        px: "10px",
        py: "4px",
      },
      md: {
        textStyle: "body4",
        borderRadius: "sm",
        px: "16px",
        py: "10px",
      },
      lg: {
        textStyle: "body1",
        borderRadius: "sm",
        px: "16px",
        py: "12px",
      },
      xl: {
        textStyle: "title3",
        borderRadius: "sm",
        p: "16px",
      },
    },
  },
  compoundVariants: [
    {
      variant: "ghost",
      css: {
        _disabled: {
          bg: "transparent",
          color: "fg.neutral.faintest",
          _active: { bg: "transparent" },
        },
      },
    },
    {
      variant: "ghost-brand",
      css: {
        _disabled: {
          bg: "transparent",
          color: "fg.neutral.faintest",
          _active: { bg: "transparent" },
        },
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    display: "inline",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof buttonStyles> & {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    asChild?: boolean;
  };

export function Button({
  variant,
  size,
  display,
  leadingIcon,
  trailingIcon,
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp type="button" className={cx(buttonStyles({ variant, size, display }), className)} {...props}>
      {asChild ? children : <>{leadingIcon}{children}{trailingIcon}</>}
    </Comp>
  );
}
