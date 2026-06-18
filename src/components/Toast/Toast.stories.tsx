import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["!dev"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "negative", "positive"],
      description:
        "토스트의 스타일을 설정해요. `neutral`은 중립적인 정보 전달, `negative`는 실패/오류, `positive`는 성공을 의미해요.",
      table: { defaultValue: { summary: "neutral" } },
    },
    icon: {
      control: "select",
      options: ["calendar", "clock", "location", "member", "share"],
      description:
        "`neutral` 스타일에서만 사용할 수 있는 선택적 아이콘이에요. 생략하면 메시지만 단독으로 표시돼요.",
    },
    message: {
      control: "text",
      description: "토스트에 표시할 메시지예요.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  name: "기본",
  args: { variant: "neutral", message: "알림이 도착했어요" },
};

export const Variants: Story = {
  name: "스타일",
  parameters: {
    docs: {
      source: {
        code: `<Toast variant="neutral" message="message" />
<Toast variant="neutral" icon="member" message="message" />
<Toast variant="negative" message="message" />
<Toast variant="positive" message="message" />`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        padding: "16px",
      }}
    >
      <Toast variant="neutral" message="message" />
      <Toast variant="neutral" icon="member" message="message" />
      <Toast variant="negative" message="message" />
      <Toast variant="positive" message="message" />
    </div>
  ),
};
