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
    border: "none",
    boxSizing: "border-box",
    fontFamily: "[inherit]",
    _disabled: {
      cursor: "not-allowed",
      bg: "fill.neutral.default-disabled",
      color: "fg.neutral.subtler",
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
      "brand-weak": {
        bg: "fill.brand.subtle",
        color: "fg.brand.default",
        _active: { bg: "fill.brand.subtle-pressed" },
      },
      outline: {
        bg: "fill.neutral.faintest",
        color: "fg.neutral.default",
        boxShadow: "[inset 0 0 0 1px {colors.stroke.neutral.subtle}]",
        _active: { bg: "fill.neutral.subtler" },
      },
      ghost: {
        bg: "transparent",
        color: "fg.neutral.default",
        _active: { bg: "fill.neutral.subtler" },
      },
      "ghost-brand": {
        bg: "transparent",
        color: "fg.brand.default",
        _active: { bg: "fill.neutral.subtler" },
      },
    },
    display: {
      inline: { display: "inline-flex" },
      full: { display: "flex", width: "full" },
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
      variant: "outline",
      css: {
        _disabled: {
          boxShadow: "[none]",
        },
      },
    },
    {
      variant: "ghost",
      css: {
        _disabled: {
          bg: "transparent",
          color: "fg.neutral.subtlest",
          _active: { bg: "transparent" },
        },
      },
    },
    {
      variant: "ghost-brand",
      css: {
        _disabled: {
          bg: "transparent",
          color: "fg.neutral.subtlest",
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
    <Comp
      type={asChild ? undefined : "button"}
      className={cx(buttonStyles({ variant, size, display }), className)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {leadingIcon}
          {children}
          {trailingIcon}
        </>
      )}
    </Comp>
  );
}
