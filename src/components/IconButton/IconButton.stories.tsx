import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/Icon Button",
  component: IconButton,
  tags: ["!dev"],
  argTypes: {
    variant: {
      control: "select",
      options: ["clear", "fill"],
      description: "버튼의 시각적 스타일을 설정해요.",
      table: { defaultValue: { summary: "clear" } },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "버튼의 크기를 설정해요.",
      table: { defaultValue: { summary: "md" } },
    },
    disabled: {
      control: "boolean",
      description: "버튼을 비활성화해요. 비활성화된 버튼은 클릭할 수 없어요.",
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  name: "기본",
  args: { variant: "clear", size: "md" },
  render: ({ variant, size, ...args }) => (
    <IconButton variant={variant} size={size} {...args}>
      <Icon type="search" size="md" />
    </IconButton>
  ),
};

export const Sizes: Story = {
  name: "크기",
  parameters: {
    docs: {
      source: {
        code: `<IconButton variant="fill" size="sm">
  <Icon type="search" />
</IconButton>

<IconButton variant="fill" size="md">
  <Icon type="search" />
</IconButton>

<IconButton variant="fill" size="lg">
  <Icon type="search" />
</IconButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconButton variant="fill" size="sm">
        <Icon type="search" />
      </IconButton>
      <IconButton variant="fill" size="md">
        <Icon type="search" />
      </IconButton>
      <IconButton variant="fill" size="lg">
        <Icon type="search" />
      </IconButton>
    </div>
  ),
};

export const Variants: Story = {
  name: "스타일",
  parameters: {
    docs: {
      source: {
        code: `<IconButton variant="clear">
  <Icon type="search" />
</IconButton>

<IconButton variant="fill">
  <Icon type="search" />
</IconButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <IconButton variant="clear">
        <Icon type="search" />
      </IconButton>
      <IconButton variant="fill">
        <Icon type="search" />
      </IconButton>
    </div>
  ),
};

export const States: Story = {
  name: "상태",
  parameters: {
    docs: {
      source: {
        code: `// Default
<IconButton variant="clear"><Icon type="search" /></IconButton>
<IconButton variant="fill"><Icon type="search" /></IconButton>

// Disabled
<IconButton variant="clear" disabled><Icon type="search" /></IconButton>
<IconButton variant="fill" disabled><Icon type="search" /></IconButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>Default</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <IconButton variant="clear"><Icon type="search" /></IconButton>
          <IconButton variant="fill"><Icon type="search" /></IconButton>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 12, color: "#888", fontWeight: 600 }}>Disabled</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <IconButton variant="clear" disabled><Icon type="search" /></IconButton>
          <IconButton variant="fill" disabled><Icon type="search" /></IconButton>
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
        code: `<IconButton variant="clear" disabled>
  <Icon type="search" />
</IconButton>

<IconButton variant="fill" disabled>
  <Icon type="search" />
</IconButton>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <IconButton variant="clear" disabled>
        <Icon type="search" />
      </IconButton>
      <IconButton variant="fill" disabled>
        <Icon type="search" />
      </IconButton>
    </div>
  ),
};
