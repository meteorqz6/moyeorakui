import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { iconRegistry, type IconType, type IconStyle } from "./registry";
import { css } from "../../../styled-system/css";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    type: { control: "select", options: Object.keys(iconRegistry) },
    size: { control: "select", options: ["16px", "20px", "24px", "32px"] },
    style: { control: "select", options: ["default", "weak", "brand", "inverted"] },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { type: "search", size: "24px", style: "default" },
};

const SEMANTIC_ICONS: IconType[] = ["check", "valid", "success", "error", "delete", "invalid"];
const DECORATIVE_ICONS = (Object.keys(iconRegistry) as IconType[]).filter(
  (type) => !SEMANTIC_ICONS.includes(type),
);
const allStyles: IconStyle[] = ["default", "weak", "brand", "inverted"];

function IconGrid({
  types,
  style,
  dark = false,
}: {
  types: IconType[];
  style: IconStyle;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        padding: "16px",
        background: dark ? "#2c3038" : "#f9fafd",
        borderRadius: "8px",
      }}
    >
      {types.map((type) => (
        <div
          key={type}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            width: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          >
            <Icon type={type} size="24px" style={style} />
          </div>
          <span
            className={css({ textStyle: "body5" })}
            style={{
              color: dark ? "#9fa5b3" : "#737a89",
              textAlign: "center",
              wordBreak: "break-all",
              fontSize: "10px",
            }}
          >
            {type}
          </span>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{ fontSize: "12px", color: "#737a89", marginBottom: "12px", fontWeight: 600 }}>
      {children}
    </p>
  );
}

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "16px" }}>
      {/* Semantic */}
      <div>
        <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
          Semantic — 고정 색상 (style prop 무시)
        </p>
        <IconGrid types={SEMANTIC_ICONS} style="default" />
      </div>

      {/* Decorative */}
      <div>
        <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
          Decorative — currentColor
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {allStyles.map((style) => (
            <div key={style}>
              <SectionLabel>{`style: ${style}`}</SectionLabel>
              <IconGrid
                types={DECORATIVE_ICONS}
                style={style}
                dark={style === "inverted"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      {(["16px", "20px", "24px", "32px"] as const).map((size) => (
        <div key={size} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ width: "36px", fontSize: "12px", color: "#737a89" }}>{size}</span>
          <Icon type="search" size={size} style="default" />
          <Icon type="chevron_right" size={size} style="default" />
          <Icon type="share" size={size} style="default" />
          <Icon type="check" size={size} />
          <Icon type="error" size={size} />
          <Icon type="success" size={size} />
        </div>
      ))}
    </div>
  ),
};
