import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: {
    children: "뱃지",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["brand", "neutral", "stroke"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Brand: Story = {
  args: { variant: "brand", size: "md" },
};

export const Neutral: Story = {
  args: { variant: "neutral", size: "md" },
};

export const Stroke: Story = {
  args: { variant: "stroke", size: "md" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Badge variant="brand" size="md">brand md</Badge>
        <Badge variant="neutral" size="md">neutral md</Badge>
        <Badge variant="stroke" size="md">stroke md</Badge>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Badge variant="brand" size="sm">brand sm</Badge>
        <Badge variant="neutral" size="sm">neutral sm</Badge>
        <Badge variant="stroke" size="sm">stroke sm</Badge>
      </div>
    </div>
  ),
};
