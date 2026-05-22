import { cva } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { iconRegistry, type IconType, type IconStyle, type IconSize } from "./registry";

const iconStyles = cva({
  base: {
    display: "inline-block",
    flexShrink: 0,
  },
  variants: {
    iconStyle: {
      default: { color: "fg.neutral.subtler" },
      weak: { color: "fg.neutral.subtlest" },
      weakest: { color: "fg.neutral.faintest" },
      brand: { color: "fg.brand.default" },
      inverted: { color: "fg.inverted.default" },
    },
    iconSize: {
      xs: { width: "16px", height: "16px" },
      sm: { width: "20px", height: "20px" },
      md: { width: "24px", height: "24px" },
      lg: { width: "32px", height: "32px" },
    },
  },
});

export type SemanticIconType = "check" | "valid" | "success" | "error" | "invalid";
export type DecorativeIconType = Exclude<IconType, SemanticIconType>;

type SemanticIconProps = {
  type: SemanticIconType;
  size?: IconSize;
  variant?: never;
  className?: string;
};

type DecorativeIconProps = {
  type: DecorativeIconType;
  size?: IconSize;
  variant?: IconStyle;
  className?: string;
};

export type IconProps = SemanticIconProps | DecorativeIconProps;

export function Icon({ type, size = "md", variant, className }: IconProps) {
  const entry = iconRegistry[type];

  return (
    <svg
      viewBox={entry.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(iconStyles({ iconStyle: variant, iconSize: size }), className)}
    >
      {entry.paths}
    </svg>
  );
}
