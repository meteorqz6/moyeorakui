import type { Meta, StoryObj } from "@storybook/react"
import { ShareButton } from "./ShareButton"

const meta: Meta<typeof ShareButton> = {
  title: "Components/ShareButton",
  component: ShareButton,
  argTypes: {
    variant: { control: "select", options: ["kakao", "link", "more"] },
    selected: { control: "boolean" },
  },
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof ShareButton>

export const Kakao: Story = {
  args: { variant: "kakao", selected: false },
}

export const Link: Story = {
  args: { variant: "link", selected: false },
}

export const More: Story = {
  args: { variant: "more", selected: false },
}

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex" }}>
        <ShareButton variant="kakao" selected={false} />
        <ShareButton variant="link" selected={false} />
        <ShareButton variant="more" selected={false} />
      </div>
      <div style={{ display: "flex" }}>
        <ShareButton variant="kakao" selected={true} />
        <ShareButton variant="link" selected={true} />
        <ShareButton variant="more" selected={true} />
      </div>
    </div>
  ),
}
