import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "버튼" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "brand", "brand-weak", "stroke", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {(["default", "brand", "brand-weak", "stroke", "ghost"] as const).map(
        (variant) => (
          <div
            key={variant}
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ width: "90px", fontSize: "12px", color: "#737a89" }}>
              {variant}
            </span>
            <Button variant={variant} size="sm">
              Small
            </Button>
            <Button variant={variant} size="md">
              Medium
            </Button>
            <Button variant={variant} size="lg">
              Large
            </Button>
            <Button variant={variant} size="xl">
              XLarge
            </Button>
          </div>
        ),
      )}
    </div>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button variant="default" size="md" disabled>
        default
      </Button>
      <Button variant="brand" size="md" disabled>
        brand
      </Button>
      <Button variant="brand-weak" size="md" disabled>
        brand-weak
      </Button>
      <Button variant="stroke" size="md" disabled>
        stroke
      </Button>
      <Button variant="ghost" size="md" disabled>
        ghost
      </Button>
    </div>
  ),
};

export const Default: Story = {
  args: { variant: "default", size: "md" },
};

export const Brand: Story = {
  args: { variant: "brand", size: "md" },
};

export const BrandWeak: Story = {
  args: { variant: "brand-weak", size: "md" },
};

export const Stroke: Story = {
  args: { variant: "stroke", size: "md" },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "lg" },
};
