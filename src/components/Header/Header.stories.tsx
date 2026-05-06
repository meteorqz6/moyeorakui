import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
  argTypes: {
    title: { control: "text" },
    actionLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const TitleOnly: Story = {
  args: {
    title: "타이틀",
  },
};

export const WithBack: Story = {
  args: {
    title: "타이틀",
    onBack: () => {},
  },
};

export const WithBackAndAction: Story = {
  args: {
    title: "타이틀",
    onBack: () => {},
    actionLabel: "완료",
    onAction: () => {},
  },
};
