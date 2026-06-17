import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["!dev"],
  args: { children: "칩" },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "neutral-weak", "brand", "outlined-brand"],
      description: "칩의 시각적 스타일을 설정해요.",
      table: { defaultValue: { summary: "neutral-weak" } },
    },
    shape: {
      control: "select",
      options: ["square", "pill"],
      description: "칩의 모양을 설정해요.",
      table: { defaultValue: { summary: "square" } },
    },
    disabled: {
      control: "boolean",
      description: "칩을 비활성화해요. 비활성화된 칩은 클릭할 수 없어요.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Chip 컴포넌트는 정보를 선택하거나 콘텐츠를 필터링하는 데 사용해요. 사용자의 선택 상태를 시각적으로 표현하며, 원하는 조건을 설정하거나 해제하는 등의 상호작용을 통해 정보 탐색과 선택 과정을 더 직관적으로 만들어줘요.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  name: "기본",
  args: { variant: "neutral-weak", shape: "square" },
};

export const Shapes: Story = {
  name: "모양",
  parameters: {
    docs: {
      source: {
        code: `<Chip shape="square">Square</Chip>
<Chip shape="pill">Pill</Chip>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Chip shape="square">Square</Chip>
      <Chip shape="pill">Pill</Chip>
    </div>
  ),
};

export const Styles: Story = {
  name: "스타일",
  parameters: {
    docs: {
      source: {
        code: `<Chip variant="neutral-weak">Neutral Weak</Chip>
<Chip variant="neutral">Neutral</Chip>
<Chip variant="brand">Brand</Chip>
<Chip variant="outlined-brand">Outlined Brand</Chip>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Chip variant="neutral-weak">Neutral Weak</Chip>
      <Chip variant="neutral">Neutral</Chip>
      <Chip variant="brand">Brand</Chip>
      <Chip variant="outlined-brand">Outlined Brand</Chip>
    </div>
  ),
};
