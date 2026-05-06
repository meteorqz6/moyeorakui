import type { Meta, StoryObj } from "@storybook/react"
import { PinLogoText } from "./Pin"

const meta: Meta<typeof PinLogoText> = {
  title: "Components/Pin/PinLogoText",
  component: PinLogoText,
  argTypes: {
    size: { control: "select", options: ["large", "small"] },
    text: { control: "text" },
  },
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof PinLogoText>

export const Large: Story = {
  args: { size: "large", text: "카페" },
}

export const Small: Story = {
  args: { size: "small", text: "카페" },
}

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-end", padding: 32 }}>
      <PinLogoText size="large" text="카페" />
      <PinLogoText size="small" text="카페" />
    </div>
  ),
}
