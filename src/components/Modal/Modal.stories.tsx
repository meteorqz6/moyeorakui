import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ActionButton } from "../ActionButton/ActionButton";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo(props: Omit<React.ComponentProps<typeof Modal>, "open" | "onOpenChange">) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ActionButton variant="brand" size="md" onClick={() => setOpen(true)}>
        모달 열기
      </ActionButton>
      <Modal open={open} onOpenChange={setOpen} {...props} />
    </>
  );
}

export const OneButton: Story = {
  render: () => (
    <ModalDemo
      title="타이틀을 입력하세요"
      subtitle="서브 타이틀을 입력하세요"
      confirmLabel="확인"
      onConfirm={() => {}}
    />
  ),
};

export const TwoButtons: Story = {
  render: () => (
    <ModalDemo
      title="타이틀을 입력하세요"
      subtitle="서브 타이틀을 입력하세요"
      confirmLabel="확인"
      onConfirm={() => {}}
      cancelLabel="취소"
      onCancel={() => {}}
    />
  ),
};

export const NoSubtitle: Story = {
  render: () => (
    <ModalDemo
      title="타이틀을 입력하세요"
      confirmLabel="확인"
      onConfirm={() => {}}
      cancelLabel="취소"
      onCancel={() => {}}
    />
  ),
};
