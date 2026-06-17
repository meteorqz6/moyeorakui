import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon } from "../Icon";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
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
    leadingIcon: {
      control: false,
      description: "버튼 텍스트 앞에 표시할 아이콘 요소예요.",
    },
    trailingIcon: {
      control: false,
      description: "버튼 텍스트 뒤에 표시할 아이콘 요소예요.",
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
          "Button 컴포넌트는 사용자가 어떤 액션을 트리거하거나 이벤트를 실행할 때 사용해요. 폼 제출, 다이얼로그 열기, 작업 취소 등 다양한 인터랙션에 활용할 수 있어요.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "기본",
  args: { children: "버튼" },
};

export const Sizes: Story = {
  name: "크기",
  parameters: {
    docs: {
      source: {
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">XLarge</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XLarge</Button>
    </div>
  ),
};

export const VariantsSolid: Story = {
  name: "스타일 — Solid",
  parameters: {
    docs: {
      source: {
        code: `<Button variant="default">Default</Button>
<Button variant="brand">Brand</Button>
<Button variant="outline">Outline</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Button variant="default">Default</Button>
      <Button variant="brand">Brand</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const VariantsWeak: Story = {
  name: "스타일 — Weak",
  parameters: {
    docs: {
      source: {
        code: `<Button variant="brand-weak">Brand Weak</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Button variant="brand-weak">Brand Weak</Button>
    </div>
  ),
};

export const VariantsGhost: Story = {
  name: "스타일 — Ghost",
  parameters: {
    docs: {
      source: {
        code: `<Button variant="ghost">Ghost</Button>
<Button variant="ghost-brand">Ghost Brand</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-brand">Ghost Brand</Button>
    </div>
  ),
};

export const Display: Story = {
  name: "형태",
  parameters: {
    docs: {
      source: {
        code: `<Button display="inline">Inline</Button>
<Button display="full">Full</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div>
        <Button display="inline">Inline</Button>
      </div>
      <Button display="full">Full</Button>
    </div>
  ),
};

export const Layout: Story = {
  name: "레이아웃",
  parameters: {
    docs: {
      source: {
        code: `// Label Only
<Button>Button</Button>

// Leading Icon + Label
<Button leadingIcon={<Icon type="chevron_left" size="xs" />}>Button</Button>

// Label + Trailing Icon
<Button trailingIcon={<Icon type="chevron_right" size="xs" />}>Button</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
      <Button>Button</Button>
      <Button leadingIcon={<Icon type="chevron_left" size="xs" />}>Button</Button>
      <Button trailingIcon={<Icon type="chevron_right" size="xs" />}>Button</Button>
    </div>
  ),
};

export const States: Story = {
  name: "상태",
  parameters: {
    docs: {
      source: {
        code: `// Default
<Button variant="default">Default</Button>
<Button variant="brand">Brand</Button>
<Button variant="brand-weak">Brand Weak</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="ghost-brand">Ghost Brand</Button>

// Disabled
<Button variant="default" disabled>Default</Button>
<Button variant="brand" disabled>Brand</Button>
<Button variant="brand-weak" disabled>Brand Weak</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="ghost-brand" disabled>Ghost Brand</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>Default</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Button variant="default">Default</Button>
          <Button variant="brand">Brand</Button>
          <Button variant="brand-weak">Brand Weak</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost-brand">Ghost Brand</Button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>Disabled</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Button variant="default" disabled>
            Default
          </Button>
          <Button variant="brand" disabled>
            Brand
          </Button>
          <Button variant="brand-weak" disabled>
            Brand Weak
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
          <Button variant="ghost-brand" disabled>
            Ghost Brand
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  name: "비활성화",
  parameters: {
    docs: {
      source: {
        code: `<Button variant="default" disabled>Default</Button>
<Button variant="brand" disabled>Brand</Button>
<Button variant="brand-weak" disabled>Brand Weak</Button>
<Button variant="outline" disabled>Outline</Button>

<Button variant="ghost" disabled>Ghost</Button>
<Button variant="ghost-brand" disabled>Ghost Brand</Button>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Button variant="default" disabled>
          Default
        </Button>
        <Button variant="brand" disabled>
          Brand
        </Button>
        <Button variant="brand-weak" disabled>
          Brand Weak
        </Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
        <Button variant="ghost-brand" disabled>
          Ghost Brand
        </Button>
      </div>
    </div>
  ),
};

export const AsChild: Story = {
  name: "asChild",
  parameters: {
    docs: {
      source: {
        code: `<Button asChild variant="brand">
  <a href="#">링크 버튼</a>
</Button>`,
      },
    },
  },
  render: () => (
    <Button asChild variant="brand">
      <a href="#">링크 버튼</a>
    </Button>
  ),
};
