import type { Meta, StoryObj } from "@storybook/react";
import { FloatingButton } from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "Components/Floating Button",
  component: FloatingButton,
  tags: ["!dev"],
  argTypes: {
    variant: {
      control: "select",
      options: ["up", "back"],
      description:
        "버튼의 동작 유형을 설정해요. `up`은 위로 스크롤, `back`은 이전 화면으로 이동해요.",
      table: { defaultValue: { summary: "up" } },
    },
    disabled: {
      control: "boolean",
      description: "버튼을 비활성화해요.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  name: "기본",
  args: { variant: "up" },
};

export const Variants: Story = {
  name: "변형",
  parameters: {
    docs: {
      source: {
        code: `<FloatingButton variant="up" />
<FloatingButton variant="back" />`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <FloatingButton variant="up" />
      <FloatingButton variant="back" />
    </div>
  ),
};

export const Disabled: Story = {
  name: "비활성화",
  parameters: {
    docs: {
      source: {
        code: `<FloatingButton variant="up" disabled />
<FloatingButton variant="back" disabled />`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <FloatingButton variant="up" disabled />
      <FloatingButton variant="back" disabled />
    </div>
  ),
};
