import type { Meta, StoryObj } from "@storybook/react";
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
    description: {
      control: "text",
      description: "고른 값 아래에 보이는 설명이에요. 값이 없으면 보이지 않아요.",
    },
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

// 값과 설명
<FieldButton label="출발지" value="서대문역 5호선" description="서울 종로구 통일로 지하 126" placeholder="주소를 검색해주세요" onClick={openAddressSearch} />

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
      <FieldButton
        label="출발지"
        value="서대문역 5호선"
        description="서울 종로구 통일로 지하 126"
        placeholder="주소를 검색해주세요"
      />
      <FieldButton label="출발지" value={LONG_VALUE} placeholder="주소를 검색해주세요" />
    </div>
  ),
};

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
  // 문서에서 포커스를 옮기면 페이지가 이 스토리까지 내려가고, Tab이 앞쪽 예시를 건너뛴다.
  render: (_, { viewMode }) => (
    <div style={{ ...frame, padding: 4 }}>
      <FieldButton
        label="출발지"
        value="서울 강남구 강남대로 396"
        placeholder="주소를 검색해주세요"
        autoFocus={viewMode === "story"}
      />
    </div>
  ),
};
