import type { Meta, StoryObj } from "@storybook/react";
import * as RadixToast from "@radix-ui/react-toast";
import { Toast, ToastProvider } from "./Toast";

// 실제 `ToastViewport`는 화면에 고정(position: fixed)돼요. Storybook 문서 페이지처럼
// 여러 스토리가 한 페이지에 길게 나열되는 곳에서는 떠다니면 안 되니, 문서에서만 일반 흐름을 따르는
// 뷰포트를 별도로 써요.
function DocsViewport() {
  return (
    <RadixToast.Viewport
      style={{
        position: "static",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        marginTop: "8px",
        outline: "none",
        listStyleType: "none",
      }}
    />
  );
}

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["!dev"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <DocsViewport />
      </ToastProvider>
    ),
  ],
  args: {
    // 문서를 보는 동안 자동으로 사라지지 않도록 storybook에서만 무한대로 설정
    duration: Infinity,
  },
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
      <Toast variant="neutral" message="message" duration={Infinity} />
      <Toast variant="neutral" icon="member" message="message" duration={Infinity} />
      <Toast variant="negative" message="message" duration={Infinity} />
      <Toast variant="positive" message="message" duration={Infinity} />
    </div>
  ),
};
