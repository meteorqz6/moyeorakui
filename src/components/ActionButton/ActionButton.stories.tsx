import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "./ActionButton";
import { Icon } from "../Icon";

const meta: Meta<typeof ActionButton> = {
  title: "Components/Buttons/Action Button",
  component: ActionButton,
  tags: ["!dev"],
  args: { children: "버튼" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "brand", "brand-weak", "outline", "ghost", "ghost-brand"],
      description: "버튼의 시각적 스타일을 설정해요.",
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "버튼의 크기를 설정해요.",
      table: { defaultValue: { summary: "md" } },
    },
    display: {
      control: "select",
      options: ["inline", "full"],
      description:
        "버튼의 형태를 설정해요. `inline`은 다른 요소와 나란히 배치되고, `full`은 부모 요소의 전체 너비를 차지해요.",
      table: { defaultValue: { summary: "inline" } },
    },
    disabled: {
      control: "boolean",
      description: "버튼을 비활성화해요. 비활성화된 버튼은 클릭할 수 없어요.",
      table: { defaultValue: { summary: "false" } },
    },
    leftIcon: {
      control: false,
      description: "버튼 텍스트 왼쪽에 표시할 아이콘 요소예요.",
    },
    rightIcon: {
      control: false,
      description: "버튼 텍스트 오른쪽에 표시할 아이콘 요소예요.",
    },
    asChild: {
      control: "boolean",
      description:
        "true로 설정하면 자식 요소에 버튼 스타일을 적용해요. Radix UI의 Slot 패턴을 사용해요.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "ActionButton 컴포넌트는 사용자가 어떤 액션을 트리거하거나 이벤트를 실행할 때 사용해요. 폼 제출, 다이얼로그 열기, 작업 취소 등 다양한 인터랙션에 활용할 수 있어요.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  name: "기본",
  args: { children: "버튼" },
};

export const Sizes: Story = {
  name: "크기",
  parameters: {
    docs: {
      source: {
        code: `<ActionButton size="sm">Small</ActionButton>
<ActionButton size="md">Medium</ActionButton>
<ActionButton size="lg">Large</ActionButton>
<ActionButton size="xl">XLarge</ActionButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <ActionButton size="sm">Small</ActionButton>
      <ActionButton size="md">Medium</ActionButton>
      <ActionButton size="lg">Large</ActionButton>
      <ActionButton size="xl">XLarge</ActionButton>
    </div>
  ),
};

export const Variants: Story = {
  name: "스타일",
  parameters: {
    docs: {
      source: {
        code: `<ActionButton variant="default">Default</ActionButton>
<ActionButton variant="brand">Brand</ActionButton>
<ActionButton variant="brand-weak">Brand Weak</ActionButton>
<ActionButton variant="outline">Outline</ActionButton>
<ActionButton variant="ghost">Ghost</ActionButton>
<ActionButton variant="ghost-brand">Ghost Brand</ActionButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
      <ActionButton variant="default">Default</ActionButton>
      <ActionButton variant="brand">Brand</ActionButton>
      <ActionButton variant="brand-weak">Brand Weak</ActionButton>
      <ActionButton variant="outline">Outline</ActionButton>
      <ActionButton variant="ghost">Ghost</ActionButton>
      <ActionButton variant="ghost-brand">Ghost Brand</ActionButton>
    </div>
  ),
};

export const Display: Story = {
  name: "형태",
  parameters: {
    docs: {
      source: {
        code: `<ActionButton display="inline">Inline</ActionButton>
<ActionButton display="full">Full</ActionButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div>
        <ActionButton display="inline">Inline</ActionButton>
      </div>
      <ActionButton display="full">Full</ActionButton>
    </div>
  ),
};

export const Layout: Story = {
  name: "레이아웃",
  parameters: {
    docs: {
      source: {
        code: `// Text Only
<ActionButton>버튼</ActionButton>

// Icon First
<ActionButton leftIcon={<Icon type="chevron_left" size="xs" />}>버튼</ActionButton>

// Icon Last
<ActionButton rightIcon={<Icon type="chevron_right" size="xs" />}>버튼</ActionButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
      <ActionButton>버튼</ActionButton>
      <ActionButton leftIcon={<Icon type="chevron_left" size="xs" />}>버튼</ActionButton>
      <ActionButton rightIcon={<Icon type="chevron_right" size="xs" />}>버튼</ActionButton>
    </div>
  ),
};

export const Disabled: Story = {
  name: "비활성화",
  parameters: {
    docs: {
      source: {
        code: `<ActionButton variant="default" disabled>Default</ActionButton>
<ActionButton variant="brand" disabled>Brand</ActionButton>
<ActionButton variant="brand-weak" disabled>Brand Weak</ActionButton>
<ActionButton variant="outline" disabled>Outline</ActionButton>

<ActionButton variant="ghost" disabled>Ghost</ActionButton>
<ActionButton variant="ghost-brand" disabled>Ghost Brand</ActionButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <ActionButton variant="default" disabled>Default</ActionButton>
        <ActionButton variant="brand" disabled>Brand</ActionButton>
        <ActionButton variant="brand-weak" disabled>Brand Weak</ActionButton>
        <ActionButton variant="outline" disabled>Outline</ActionButton>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <ActionButton variant="ghost" disabled>Ghost</ActionButton>
        <ActionButton variant="ghost-brand" disabled>Ghost Brand</ActionButton>
      </div>
    </div>
  ),
};

export const AsChild: Story = {
  name: "asChild",
  parameters: {
    docs: {
      source: {
        code: `<ActionButton asChild variant="brand">
  <a href="#">링크 버튼</a>
</ActionButton>`,
      },
    },
  },
  render: () => (
    <ActionButton asChild variant="brand">
      <a href="#">링크 버튼</a>
    </ActionButton>
  ),
};
