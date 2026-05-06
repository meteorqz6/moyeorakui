import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  args: {
    children: "칩",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["brand", "brand-weak", "neutral", "inverted", "inverted-stroke"],
    },
    shape: {
      control: "select",
      options: ["square", "pill"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#737a89" }}>Square / Selected</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Chip variant="brand" shape="square">brand</Chip>
          <Chip variant="brand-weak" shape="square">brand-weak</Chip>
          <Chip variant="neutral" shape="square">neutral</Chip>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#737a89" }}>Square / Disabled</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Chip variant="neutral" shape="square" disabled>neutral</Chip>
          <Chip variant="inverted" shape="square" disabled>inverted</Chip>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#737a89" }}>Pill / Selected</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Chip variant="brand" shape="pill">brand</Chip>
          <Chip variant="brand-weak" shape="pill">brand-weak</Chip>
          <Chip variant="neutral" shape="pill">neutral</Chip>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#737a89" }}>Pill / Disabled</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Chip variant="neutral" shape="pill" disabled>neutral</Chip>
          <Chip variant="inverted" shape="pill" disabled>inverted</Chip>
          <Chip variant="inverted-stroke" shape="pill" disabled>inverted-stroke</Chip>
        </div>
      </div>
    </div>
  ),
};

export const Brand: Story = {
  args: { variant: "brand", shape: "square" },
};

export const BrandWeak: Story = {
  args: { variant: "brand-weak", shape: "square" },
};

export const Neutral: Story = {
  args: { variant: "neutral", shape: "square" },
};

export const NeutralDisabled: Story = {
  args: { variant: "neutral", shape: "square", disabled: true },
};

export const Inverted: Story = {
  args: { variant: "inverted", shape: "square", disabled: true },
};

export const InvertedStroke: Story = {
  args: { variant: "inverted-stroke", shape: "pill", disabled: true },
};
