import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["!dev"],
  args: { children: "뱃지" },
  argTypes: {
    variant: {
      control: "select",
      options: ["brand-weak", "neutral-weak", "outline"],
      description: "뱃지의 시각적 스타일을 설정해요.",
      table: { defaultValue: { summary: "neutral-weak" } },
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "뱃지의 크기를 설정해요.",
      table: { defaultValue: { summary: "md" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Badge 컴포넌트는 항목의 상태나 속성을 짧은 텍스트로 표시할 때 사용해요. 새 항목 표시, 카테고리 분류, 상태 라벨 등에 활용할 수 있어요.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: "기본",
  args: { variant: "neutral-weak", size: "md" },
};

export const Sizes: Story = {
  name: "크기",
  parameters: {
    docs: {
      source: {
        code: `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  ),
};

export const Styles: Story = {
  name: "스타일",
  parameters: {
    docs: {
      source: {
        code: `<Badge variant="neutral-weak">Neutral Weak</Badge>
<Badge variant="brand-weak">Brand Weak</Badge>
<Badge variant="outline">Outline</Badge>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Badge variant="neutral-weak">Neutral Weak</Badge>
      <Badge variant="brand-weak">Brand Weak</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
