import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { css } from "../../../styled-system/css";

// Modal은 화면 전체를 덮고(position: fixed) 스크롤과 포커스를 잠가요.
// 문서 페이지에 여러 예시를 그대로 띄우면 페이지 전체가 막히니, 각 예시를 별도 iframe에서 렌더해요.
const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["!dev"],
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, iframeHeight: 320 } },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

type ModalPreviewProps = {
  title: string;
  body?: string;
  mainLabel: string;
  alternativeLabel?: string;
};

// 문서에서는 처음부터 열린 상태로 보여주고, 버튼, Dim, ESC로 닫으면 다시 열 수 있게 해요.
function ModalPreview({ alternativeLabel, ...props }: ModalPreviewProps) {
  const [open, setOpen] = useState(true);
  const close = () => setOpen(false);
  const shared = { ...props, open, onOpenChange: setOpen, onMain: close };
  return (
    <div className={css({ display: "flex", alignItems: "center", justifyContent: "center", h: "100vh" })}>
      {!open && (
        <Button variant="outline" size="md" onClick={() => setOpen(true)}>
          모달 열기
        </Button>
      )}
      {alternativeLabel !== undefined ? (
        <Modal {...shared} alternativeLabel={alternativeLabel} onAlternative={close} />
      ) : (
        <Modal {...shared} />
      )}
    </div>
  );
}

export const MainAction: Story = {
  name: "Main Action",
  parameters: {
    docs: {
      source: {
        code: `const [open, setOpen] = useState(false);

<Modal
  open={open}
  onOpenChange={setOpen}
  title="설정된 인원을 초과했어요"
  body="팀장에게 인원 수정을 요청해보세요"
  mainLabel="확인"
  onMain={() => setOpen(false)}
/>`,
      },
    },
  },
  render: () => (
    <ModalPreview
      title="설정된 인원을 초과했어요"
      body="팀장에게 인원 수정을 요청해보세요"
      mainLabel="확인"
    />
  ),
};

export const AlternativeAction: Story = {
  name: "Alternative Action",
  parameters: {
    docs: {
      source: {
        code: `const [open, setOpen] = useState(false);

<Modal
  open={open}
  onOpenChange={setOpen}
  title="설정된 인원을 초과했어요"
  body="멤버를 추가하려면 인원 수정이 필요해요"
  mainLabel="수정하기"
  onMain={() => {
    editMemberLimit();
    setOpen(false);
  }}
  alternativeLabel="취소"
  onAlternative={() => setOpen(false)}
/>`,
      },
    },
  },
  render: () => (
    <ModalPreview
      title="설정된 인원을 초과했어요"
      body="멤버를 추가하려면 인원 수정이 필요해요"
      mainLabel="수정하기"
      alternativeLabel="취소"
    />
  ),
};

export const TitleOnly: Story = {
  name: "Title Only",
  parameters: {
    docs: {
      source: {
        code: `const [open, setOpen] = useState(false);

<Modal
  open={open}
  onOpenChange={setOpen}
  title="입력한 내용을 모두 삭제할까요?"
  mainLabel="초기화"
  onMain={() => {
    resetForm();
    setOpen(false);
  }}
  alternativeLabel="취소"
  onAlternative={() => setOpen(false)}
/>`,
      },
    },
  },
  render: () => (
    <ModalPreview
      title="입력한 내용을 모두 삭제할까요?"
      mainLabel="초기화"
      alternativeLabel="취소"
    />
  ),
};

export const WithLongBody: Story = {
  name: "Body 2줄",
  parameters: {
    docs: {
      source: {
        code: `const [open, setOpen] = useState(false);

<Modal
  open={open}
  onOpenChange={setOpen}
  title="시간표 범위를 수정할까요?"
  body={"기존에 등록된 일정 중 변경된 범위에\\n포함되지 않는 시간은 자동으로 삭제돼요."}
  mainLabel="수정하기"
  onMain={() => {
    updateTimetableRange();
    setOpen(false);
  }}
  alternativeLabel="취소"
  onAlternative={() => setOpen(false)}
/>`,
      },
    },
  },
  render: () => (
    <ModalPreview
      title="시간표 범위를 수정할까요?"
      body={"기존에 등록된 일정 중 변경된 범위에\n포함되지 않는 시간은 자동으로 삭제돼요."}
      mainLabel="수정하기"
      alternativeLabel="취소"
    />
  ),
};
