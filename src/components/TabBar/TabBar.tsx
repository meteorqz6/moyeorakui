import { cva, css } from "../../../styled-system/css";
import { cx } from "../../lib/utils";

const tabItemStyles = cva({
  base: {
    flex: 1,
    px: "20px",
    py: "10px",
    textAlign: "center",
    bg: "transparent",
    cursor: "pointer",
    borderBottomStyle: "solid",
    whiteSpace: "nowrap",
  },
  variants: {
    selected: {
      true: {
        borderBottomWidth: "2px",
        borderBottomColor: "stroke.brand.default",
        textStyle: "title3",
        color: "fg.brand.default",
      },
      false: {
        borderBottomWidth: "1px",
        borderBottomColor: "stroke.neutral.subtle",
        textStyle: "body1",
        color: "fg.neutral.subtlest",
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type TabBarProps = {
  tabs: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  className?: string;
};

export function TabBar({ tabs, selectedIndex, onChange, className }: TabBarProps) {
  return (
    <div className={cx(css({ display: "flex", w: "full" }), className)}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onChange(index)}
          className={tabItemStyles({ selected: index === selectedIndex })}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
