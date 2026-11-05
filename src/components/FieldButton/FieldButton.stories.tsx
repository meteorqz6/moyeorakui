import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef } from "react";
import { FieldButton } from "./FieldButton";

const meta: Meta<typeof FieldButton> = {
  title: "Components/Field Button",
  component: FieldButton,
  tags: ["!dev"],
  argTypes: {
    label: {
      control: "text",
      description: "제목이에요. 고른 값과 함께 버튼의 접근 가능한 이름이 돼요.",
    },
    value: { control: "text", description: "고른 값이에요. 비어 있으면 placeholder를 보여 줘요." },
    placeholder: { control: "text", description: "값이 없을 때 보이는 글자예요." },
  },
};

export default meta;
type Story = StoryObj<typeof FieldButton>;

const frame = { width: 335 };

const LONG_VALUE = "경기도 성남시 분당구 판교역로 235 에이치스퀘어 엔동 7층";

export const Default: Story = {
  name: "기본",
  args: {
    label: "출발지",
    placeholder: "주소를 검색해주세요",
  },
  render: (args) => (
    <div style={frame}>
      <FieldButton {...args} />
    </div>
  ),
};

export const States: Story = {
  name: "상태",
  parameters: {
    docs: {
      source: {
        code: `// 값 없음
<FieldButton label="출발지" placeholder="주소를 검색해주세요" onClick={openAddressSearch} />

// 값 있음
<FieldButton label="출발지" value="서울 강남구 강남대로 396" placeholder="주소를 검색해주세요" onClick={openAddressSearch} />

// 긴 값
<FieldButton label="출발지" value="${LONG_VALUE}" placeholder="주소를 검색해주세요" onClick={openAddressSearch} />`,
      },
    },
  },
  render: () => (
    <div style={{ ...frame, display: "flex", flexDirection: "column", gap: 24 }}>
      <FieldButton label="출발지" placeholder="주소를 검색해주세요" />
      <FieldButton
        label="출발지"
        value="서울 강남구 강남대로 396"
        placeholder="주소를 검색해주세요"
      />
      <FieldButton label="출발지" value={LONG_VALUE} placeholder="주소를 검색해주세요" />
    </div>
  ),
};

function FocusedExample() {
  const ref = useRef<HTMLButtonElement>(null);
  // autoFocus를 쓰면 문서를 열 때 이 스토리까지 스크롤이 내려간다.
  useEffect(() => ref.current?.focus({ preventScroll: true }), []);
  return (
    <div style={{ ...frame, padding: 4 }}>
      <FieldButton
        ref={ref}
        label="출발지"
        value="서울 강남구 강남대로 396"
        placeholder="주소를 검색해주세요"
      />
    </div>
  );
}

export const Focused: Story = {
  name: "포커스",
  parameters: {
    docs: {
      description: {
        story: "키보드로 칸에 들어오면 포커스 링이 보여요.",
      },
      source: {
        code: `<FieldButton label="출발지" value="서울 강남구 강남대로 396" placeholder="주소를 검색해주세요" onClick={openAddressSearch} />`,
      },
    },
  },
  render: () => <FocusedExample />,
};
