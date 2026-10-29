import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["!dev"],
  parameters: { layout: "fullscreen" },
  argTypes: {
    title: {
      control: "text",
      description: "화면 제목이에요. 가운데 정렬된 `h1`으로 렌더링돼요.",
    },
    onBack: {
      description: "전달하면 왼쪽에 뒤로가기 버튼이 표시돼요.",
    },
    actionLabel: {
      control: "text",
      description: "전달하면 오른쪽에 액션 버튼이 표시돼요.",
    },
    onAction: {
      description: "액션 버튼을 눌렀을 때 호출돼요.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const TitleOnly: Story = {
  name: "제목",
  parameters: {
    docs: {
      source: {
        code: `<Header title="일정 추가" />`,
      },
    },
  },
  render: () => <Header title="일정 추가" />,
};

export const WithBack: Story = {
  name: "뒤로가기 + 제목",
  parameters: {
    docs: {
      source: {
        code: `<Header title="일정 추가" onBack={() => navigate(-1)} />`,
      },
    },
  },
  render: () => <Header title="일정 추가" onBack={() => {}} />,
};

export const WithBackAndAction: Story = {
  name: "뒤로가기 + 제목 + 액션",
  parameters: {
    docs: {
      source: {
        code: `<Header
  title="일정 추가"
  onBack={() => navigate(-1)}
  actionLabel="초기화"
  onAction={handleReset}
/>`,
      },
    },
  },
  render: () => (
    <Header title="일정 추가" onBack={() => {}} actionLabel="초기화" onAction={() => {}} />
  ),
};
