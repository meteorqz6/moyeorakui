import type { Meta, StoryObj } from "@storybook/react"
import { PinText } from "./Pin"

const meta: Meta<typeof PinText> = {
  title: "Components/Pin/PinText",
  component: PinText,
  argTypes: {
    style: { control: "select", options: ["brand", "neutral"] },
    text: { control: "text" },
  },
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof PinText>

export const Brand: Story = {
  args: { style: "brand", text: "text" },
}

export const Neutral: Story = {
  args: { style: "neutral", text: "text" },
}

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: 32 }}>
      <PinText style="brand" text="카페" />
      <PinText style="neutral" text="카페" />
    </div>
  ),
}
