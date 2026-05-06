import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabBar } from "./TabBar";

const meta: Meta<typeof TabBar> = {
  title: "Components/TabBar",
  component: TabBar,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TabBar>;

function TabBarDemo({ tabs }: { tabs: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <TabBar tabs={tabs} selectedIndex={selectedIndex} onChange={setSelectedIndex} />
  );
}

export const Default: Story = {
  render: () => <TabBarDemo tabs={["왼쪽", "오른쪽"]} />,
};

export const RightSelected: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    return (
      <TabBar tabs={["왼쪽", "오른쪽"]} selectedIndex={selectedIndex} onChange={setSelectedIndex} />
    );
  },
};
