import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState, type Ref } from "react";
import { TextField, type TextFieldProps } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/Text Field",
  component: TextField,
  tags: ["!dev"],
  argTypes: {
    label: { control: "text", description: "제목이에요. 입력칸의 접근 가능한 이름이 돼요." },
    placeholder: { control: "text" },
    helperText: {
      control: "text",
      description: "평소 안내문이에요. 에러가 있으면 화면에서는 숨고 스크린 리더용으로 남아요.",
    },
    errorMessage: { control: "text", description: "있으면 에러 상태가 돼요." },
    maxCharacterCount: {
      control: "number",
      description: "있으면 글자 수를 보여 줘요. 입력을 막지 않아요.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

function Controlled({
  initialValue = "",
  inputRef,
  ...props
}: TextFieldProps & { initialValue?: string; inputRef?: Ref<HTMLInputElement> }) {
  const [value, setValue] = useState(initialValue);
  return (
    <TextField
      {...props}
      ref={inputRef}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onClear={() => setValue("")}
    />
  );
}

const frame = { width: 335 };

export const Default: Story = {
  name: "기본",
  args: {
    label: "모임장 이름",
    placeholder: "이름을 입력해주세요",
    helperText: "최대 4자까지 입력할 수 있어요",
    maxCharacterCount: 4,
  },
  render: (args) => (
    <div style={frame}>
      <Controlled {...args} />
    </div>
  ),
};

export const States: Story = {
  name: "상태",
  parameters: {
    docs: {
      source: {
        code: `// 기본
<TextField label="모임장 이름" placeholder="이름을 입력해주세요" helperText="최대 4자까지 입력할 수 있어요" maxCharacterCount={4} />

// 값 있음
<TextField label="모임장 이름" value="락이" helperText="최대 4자까지 입력할 수 있어요" maxCharacterCount={4} />

// 에러
<TextField label="모임장 이름" value="" helperText="최대 4자까지 입력할 수 있어요" errorMessage="이름을 입력해주세요" maxCharacterCount={4} />

// 글자 수 넘음
<TextField label="모임장 이름" value="락이락이락" helperText="최대 4자까지 입력할 수 있어요" errorMessage="최대 4자까지 입력할 수 있어요" maxCharacterCount={4} />`,
      },
    },
  },
  render: () => (
    <div style={{ ...frame, display: "flex", flexDirection: "column", gap: 24 }}>
      <Controlled
        label="모임장 이름"
        placeholder="이름을 입력해주세요"
        helperText="최대 4자까지 입력할 수 있어요"
        maxCharacterCount={4}
      />
      <Controlled
        label="모임장 이름"
        initialValue="락이"
        helperText="최대 4자까지 입력할 수 있어요"
        maxCharacterCount={4}
      />
      <Controlled
        label="모임장 이름"
        placeholder="이름을 입력해주세요"
        helperText="최대 4자까지 입력할 수 있어요"
        errorMessage="이름을 입력해주세요"
        maxCharacterCount={4}
      />
      <Controlled
        label="모임장 이름"
        initialValue="락이락이락"
        helperText="최대 4자까지 입력할 수 있어요"
        errorMessage="최대 4자까지 입력할 수 있어요"
        maxCharacterCount={4}
      />
    </div>
  ),
};

function FocusedExample() {
  const ref = useRef<HTMLInputElement>(null);
  // autoFocus를 쓰면 문서를 열 때 이 스토리까지 스크롤이 내려간다.
  useEffect(() => ref.current?.focus({ preventScroll: true }), []);
  return (
    <div style={frame}>
      <Controlled
        inputRef={ref}
        label="모임장 이름"
        initialValue="락이"
        helperText="최대 4자까지 입력할 수 있어요"
        maxCharacterCount={4}
      />
    </div>
  );
}

export const Focused: Story = {
  name: "포커스",
  parameters: {
    docs: {
      description: {
        story: "입력하는 중에는 테두리가 브랜드 색으로 바뀌고, 값이 있으면 지우기 버튼이 보여요.",
      },
    },
  },
  render: () => <FocusedExample />,
};
