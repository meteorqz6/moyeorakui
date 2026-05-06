import type { Meta, StoryObj } from "@storybook/react";
import { ButtonCta } from "./ButtonCta";

const meta: Meta<typeof ButtonCta> = {
  title: "Components/ButtonCta",
  component: ButtonCta,
  args: { children: "참여하기" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "brand"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "12px 20px", maxWidth: "375px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ButtonCta>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Brand: Story = {
  args: { variant: "brand" },
};

export const Disabled: Story = {
  args: { variant: "default", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <ButtonCta variant="default">default</ButtonCta>
      <ButtonCta variant="brand">brand</ButtonCta>
      <ButtonCta variant="default" disabled>disabled</ButtonCta>
    </div>
  ),
};
