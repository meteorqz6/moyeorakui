import * as Toggle from "@radix-ui/react-toggle";
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
    border: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
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
      "outlined-brand": {
        bg: "fill.brand.subtle",
        color: "fg.brand.default",
        boxShadow: "inset 0 0 0 1px {colors.stroke.brand.default}",
      },
      neutral: {
        bg: "fill.neutral.default",
        color: "fg.neutral.faintest",
      },
      "neutral-weak": {
        bg: "fill.neutral.subtler",
        color: "fg.neutral.subtler",
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
    variant: "neutral-weak",
    shape: "square",
  },
});

export type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof chipStyles> & {
    /** 칩의 선택 상태예요. 전달하면 controlled로 동작하며, `aria-pressed`에 반영돼요. */
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
  };

export function Chip({
  variant,
  shape,
  className,
  children,
  pressed,
  defaultPressed,
  onPressedChange,
  ...props
}: ChipProps) {
  return (
    <Toggle.Root
      pressed={pressed}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      className={cx(chipStyles({ variant, shape }), className)}
      {...props}
    >
      {children}
    </Toggle.Root>
  );
}
