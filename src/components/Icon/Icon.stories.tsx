import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type SemanticIconType, type DecorativeIconType } from "./Icon";
import { iconRegistry, type IconType, type IconStyle } from "./registry";
import { css } from "../../../styled-system/css";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["!dev"],
  argTypes: {
    type: { control: "select", options: Object.keys(iconRegistry) },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "weak", "weakest", "brand", "inverted"] },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  name: "기본",
  args: { type: "search", size: "md", variant: "default" },
};

const SEMANTIC_ICONS: SemanticIconType[] = ["check", "valid", "invalid", "success", "error"];
const SEMANTIC_SET = new Set<string>(SEMANTIC_ICONS);
const DECORATIVE_ICONS = (Object.keys(iconRegistry) as IconType[]).filter(
  (type): type is DecorativeIconType => !SEMANTIC_SET.has(type),
);

function IconGrid({
  types,
  variant = "default",
  dark = false,
}: {
  types: IconType[];
  variant?: IconStyle;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        padding: "16px",
        background: dark ? "#2c3038" : "#f9fafd",
        borderRadius: "8px",
      }}
    >
      {types.map((type) => (
        <div
          key={type}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            width: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          >
            {SEMANTIC_SET.has(type) ? (
              <Icon type={type as SemanticIconType} size="md" />
            ) : (
              <Icon type={type as DecorativeIconType} size="md" variant={variant} />
            )}
          </div>
          <span
            className={css({ textStyle: "body5" })}
            style={{
              color: dark ? "#9fa5b3" : "#737a89",
              textAlign: "center",
              wordBreak: "break-all",
              fontSize: "9px",
            }}
          >
            {type}
          </span>
        </div>
      ))}
    </div>
  );
}

export const AllIcons: Story = {
  name: "아이콘 목록",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px", color: "#737a89" }}>
          Semantic
        </p>
        <IconGrid types={SEMANTIC_ICONS} />
      </div>
      <div>
        <p style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px", color: "#737a89" }}>
          Decorative
        </p>
        <IconGrid types={DECORATIVE_ICONS} />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: "크기",
  parameters: {
    docs: {
      source: {
        code: `<Icon type="search" size="xs" />
<Icon type="search" size="sm" />
<Icon type="search" size="md" />
<Icon type="search" size="lg" />`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Icon type="search" size="xs" />
      <Icon type="search" size="sm" />
      <Icon type="search" size="md" />
      <Icon type="search" size="lg" />
    </div>
  ),
};

export const Styles: Story = {
  name: "스타일",
  parameters: {
    docs: {
      source: {
        code: `<Icon type="search" variant="default" />
<Icon type="search" variant="weak" />
<Icon type="search" variant="weakest" />
<Icon type="search" variant="brand" />
<Icon type="search" variant="inverted" />`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Icon type="search" variant="default" />
      <Icon type="search" variant="weak" />
      <Icon type="search" variant="weakest" />
      <Icon type="search" variant="brand" />
      <div style={{ background: "#2c3038", padding: "4px", borderRadius: "4px" }}>
        <Icon type="search" variant="inverted" />
      </div>
    </div>
  ),
};
