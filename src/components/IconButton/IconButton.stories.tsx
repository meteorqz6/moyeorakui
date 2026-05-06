import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import type { IconSize, IconStyle } from "../Icon/registry";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    iconSize: { control: "select", options: ["16px", "20px", "24px", "32px"] },
    iconStyle: { control: "select", options: ["default", "weak", "brand", "inverted"] },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { icon: "search", size: "md", iconSize: "24px", iconStyle: "default" },
};

const iconSizes: IconSize[] = ["16px", "20px", "24px", "32px"];
const iconStyles: IconStyle[] = ["default", "weak", "brand", "inverted"];

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      {(["sm", "md"] as const).map((size) => (
        <div key={size} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ width: "36px", fontSize: "12px", color: "#737a89" }}>{size}</span>
          <IconButton icon="search" size={size} />
          <IconButton icon="chevron_right" size={size} />
          <IconButton icon="chevron_left" size={size} />
          <IconButton icon="share" size={size} />
          <IconButton icon="delete" size={size} />
        </div>
      ))}
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      {iconSizes.map((iconSize) => (
        <div key={iconSize} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ width: "36px", fontSize: "12px", color: "#737a89" }}>{iconSize}</span>
          <IconButton icon="search" size="sm" iconSize={iconSize} />
          <IconButton icon="search" size="md" iconSize={iconSize} />
          <IconButton icon="chevron_right" size="sm" iconSize={iconSize} />
          <IconButton icon="chevron_right" size="md" iconSize={iconSize} />
        </div>
      ))}
    </div>
  ),
};

export const IconStyles: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      {iconStyles.map((iconStyle) => (
        <div
          key={iconStyle}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "12px 16px",
            background: iconStyle === "inverted" ? "#2c3038" : "#f9fafd",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              width: "60px",
              fontSize: "12px",
              color: iconStyle === "inverted" ? "#9fa5b3" : "#737a89",
            }}
          >
            {iconStyle}
          </span>
          <IconButton icon="search" size="md" iconStyle={iconStyle} />
          <IconButton icon="chevron_right" size="md" iconStyle={iconStyle} />
          <IconButton icon="chevron_left" size="md" iconStyle={iconStyle} />
          <IconButton icon="share" size="md" iconStyle={iconStyle} />
          <IconButton icon="arrow_up" size="md" iconStyle={iconStyle} />
        </div>
      ))}
    </div>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", padding: "16px", alignItems: "center" }}>
      <IconButton icon="search" size="sm" disabled />
      <IconButton icon="search" size="md" disabled />
      <IconButton icon="chevron_right" size="sm" disabled />
      <IconButton icon="chevron_right" size="md" disabled />
    </div>
  ),
};
