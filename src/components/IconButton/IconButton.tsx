import { cva, type RecipeVariantProps } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { Icon } from "../Icon/Icon";
import type { IconType, IconStyle, IconSize } from "../Icon/registry";

const iconButtonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer",
    bg: "transparent",
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4,
    },
  },
  variants: {
    size: {
      sm: { width: "36px", height: "36px" },
      md: { width: "48px", height: "48px" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof iconButtonStyles> & {
    icon: IconType;
    iconStyle?: IconStyle;
    iconSize?: IconSize;
  };

export function IconButton({
  icon,
  iconStyle = "default",
  iconSize = "24px",
  size,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button className={cx(iconButtonStyles({ size }), className)} {...props}>
      <Icon type={icon} size={iconSize} style={iconStyle} />
    </button>
  );
}
