import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    type: { control: "select", options: ["success", "error"] },
    message: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: { type: "success", message: "notification" },
};

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <Toast type="success" message="notification" />
      <Toast type="error" message="notification" />
    </div>
  ),
};
