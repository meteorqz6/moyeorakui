import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Chip } from "../Chip/Chip";
import { Fieldset } from "./Fieldset";

const meta: Meta<typeof Fieldset> = {
  title: "Components/Fieldset",
  component: Fieldset,
  tags: ["!dev"],
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

// 문서에 보이는 코드와 화면이 같도록, 화면을 그리는 코드를 그대로 문자열로 둔다.
const COUNTS = Array.from({ length: 19 }, (_, i) => i + 2); // 2명부터 20명까지

function CountFieldset() {
  const [count, setCount] = useState<number>();
  return (
    <Fieldset label="인원" helperText="2명부터 20명까지 고를 수 있어요">
      <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
        {COUNTS.map((n) => (
          <Chip
            key={n}
            pressed={count === n}
            variant={count === n ? "outlined-brand" : "neutral-weak"}
            onClick={() => setCount(n)}
            style={{ flexShrink: 0 }}
          >
            {n}명
          </Chip>
        ))}
      </div>
    </Fieldset>
  );
}

export const Default: Story = {
  name: "기본",
  parameters: {
    docs: {
      source: {
        code: `const COUNTS = Array.from({ length: 19 }, (_, i) => i + 2); // 2명부터 20명까지
const [count, setCount] = useState<number>();

<Fieldset label="인원" helperText="2명부터 20명까지 고를 수 있어요">
  <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
    {COUNTS.map((n) => (
      <Chip
        key={n}
        pressed={count === n}
        variant={count === n ? "outlined-brand" : "neutral-weak"}
        onClick={() => setCount(n)}
        style={{ flexShrink: 0 }}
      >
        {n}명
      </Chip>
    ))}
  </div>
</Fieldset>`,
      },
    },
  },
  render: () => (
    <div style={{ width: 335 }}>
      <CountFieldset />
    </div>
  ),
};
