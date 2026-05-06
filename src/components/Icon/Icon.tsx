import { cva, type RecipeVariantProps } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { iconRegistry, type IconType, type IconStyle, type IconSize } from "./registry";

const iconStyles = cva({
  base: {
    display: "inline-block",
    flexShrink: 0,
  },
  variants: {
    iconStyle: {
      default:  { color: "fg.neutral.default" },
      weak:     { color: "fg.neutral.subtlest" },
      brand:    { color: "fg.brand.default" },
      inverted: { color: "fg.inverted.default" },
    },
  },
  defaultVariants: {
    iconStyle: "default",
  },
});

const sizeMap: Record<IconSize, number> = {
  "16px": 16,
  "20px": 20,
  "24px": 24,
  "32px": 32,
};

export type IconProps = RecipeVariantProps<typeof iconStyles> & {
  type: IconType;
  size?: IconSize;
  style?: IconStyle;
  className?: string;
};

export function Icon({ type, size = "24px", style = "default", className }: IconProps) {
  const entry = iconRegistry[type];
  const dimension = sizeMap[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={entry.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(iconStyles({ iconStyle: style }), className)}
    >
      {entry.paths}
    </svg>
  );
}
