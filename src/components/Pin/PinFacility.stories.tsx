import type { Meta, StoryObj } from "@storybook/react"
import { PinFacility } from "./Pin"

const meta: Meta<typeof PinFacility> = {
  title: "Components/Pin/PinFacility",
  component: PinFacility,
  argTypes: {
    type: { control: "select", options: ["studyroom", "meetingroom", "restaurant", "cafe"] },
    selected: { control: "boolean" },
  },
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof PinFacility>

export const StudyroomDefault: Story = {
  args: { type: "studyroom", selected: false },
}

export const StudyroomSelected: Story = {
  args: { type: "studyroom", selected: true },
}

export const MeetingroomDefault: Story = {
  args: { type: "meetingroom", selected: false },
}

export const MeetingroomSelected: Story = {
  args: { type: "meetingroom", selected: true },
}

export const RestaurantDefault: Story = {
  args: { type: "restaurant", selected: false },
}

export const RestaurantSelected: Story = {
  args: { type: "restaurant", selected: true },
}

export const CafeDefault: Story = {
  args: { type: "cafe", selected: false },
}

export const CafeSelected: Story = {
  args: { type: "cafe", selected: true },
}

export const All: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 32 }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <PinFacility type="studyroom" selected={false} />
        <PinFacility type="meetingroom" selected={false} />
        <PinFacility type="restaurant" selected={false} />
        <PinFacility type="cafe" selected={false} />
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
        <PinFacility type="studyroom" selected={true} />
        <PinFacility type="meetingroom" selected={true} />
        <PinFacility type="restaurant" selected={true} />
        <PinFacility type="cafe" selected={true} />
      </div>
    </div>
  ),
}
