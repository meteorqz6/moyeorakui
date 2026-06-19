import type { Meta, StoryObj } from "@storybook/react";
import { FloatingButton } from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "Components/Floating Button",
  component: FloatingButton,
  tags: ["!dev"],
  argTypes: {
    type: {
      control: "select",
      options: ["up", "back"],
      description:
        "버튼의 동작 유형을 설정해요. `up`은 위로 스크롤, `back`은 이전 화면으로 이동해요.",
      table: { defaultValue: { summary: "up" } },
    },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  name: "기본",
  // `type="up"`은 position: fixed가 내장되어 있어요. Storybook 문서 페이지에서 실제
  // 뷰포트 모서리에 떠서 다른 컨텐츠 위를 덮지 않도록 문서에서만 static으로 덮어써요.
  args: { type: "up", "aria-label": "위로 이동", style: { position: "static" } },
};

export const Variants: Story = {
  name: "종류",
  parameters: {
    docs: {
      source: {
        code: `<FloatingButton type="up" aria-label="위로 이동" />
<FloatingButton type="back" aria-label="뒤로 가기" />`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <FloatingButton type="up" aria-label="위로 이동" style={{ position: "static" }} />
      <FloatingButton type="back" aria-label="뒤로 가기" />
    </div>
  ),
};
