import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", maxWidth: "375px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: "텍스트를 입력해주세요.",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "텍스트를 입력해주세요.",
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("텍스트를 입력해주세요.");
    return (
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#737a89", marginBottom: "8px" }}>
          기본 (빈 값)
        </p>
        <Search placeholder="텍스트를 입력해주세요." />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#737a89", marginBottom: "8px" }}>
          텍스트 있음 (포커스 시 지우기 버튼 표시)
        </p>
        <Search defaultValue="텍스트를 입력해주세요." />
      </div>
    </div>
  ),
};
