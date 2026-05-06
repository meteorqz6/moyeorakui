import type { Meta, StoryObj } from "@storybook/react"
import { PinLogo } from "./Pin"

const meta: Meta<typeof PinLogo> = {
  title: "Components/Pin/PinLogo",
  component: PinLogo,
  argTypes: {
    size: { control: "select", options: ["large", "small"] },
  },
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof PinLogo>

export const Large: Story = {
  args: { size: "large" },
}

export const Small: Story = {
  args: { size: "small" },
}

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-end", padding: 32 }}>
      <PinLogo size="large" />
      <PinLogo size="small" />
    </div>
  ),
}
