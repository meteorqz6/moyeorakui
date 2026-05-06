import type { Meta, StoryObj } from "@storybook/react";
import { FloatingButton } from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "Components/FloatingButton",
  component: FloatingButton,
  argTypes: {
    variant: { control: "select", options: ["up", "back"] },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Up: Story = {
  args: { variant: "up" },
};

export const Back: Story = {
  args: { variant: "back" },
};

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, padding: 32 }}>
      <FloatingButton variant="up" />
      <FloatingButton variant="back" />
    </div>
  ),
};
