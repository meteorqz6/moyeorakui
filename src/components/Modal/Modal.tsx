import * as Dialog from "@radix-ui/react-dialog";
import { css } from "../../../styled-system/css";
import { ActionArea } from "../ActionArea/ActionArea";
import { Button } from "../Button/Button";

type ModalBaseProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  /** 최대 2줄 이내의 간결한 메시지를 권장해요. `\n`을 넣으면 그 위치에서 줄이 바뀌어요. */
  body?: string;
  mainLabel: string;
  onMain: () => void;
};

// Alternative는 취소뿐 아니라 실제 동작이 있는 선택지일 수 있어서, 라벨과 핸들러를 항상 함께 받아요.
type ModalAlternativeProps =
  | {
      /** 지정하면 Main과 1:1 비율의 Alternative 버튼이 함께 표시돼요. */
      alternativeLabel: string;
      onAlternative: () => void;
    }
  | {
      alternativeLabel?: never;
      onAlternative?: never;
    };

export type ModalProps = ModalBaseProps & ModalAlternativeProps;

export function Modal({
  open,
  onOpenChange,
  title,
  body,
  mainLabel,
  onMain,
  alternativeLabel,
  onAlternative,
}: ModalProps) {
  const mainButton = (
    <Button variant="brand" size="lg" display="full" onClick={onMain}>
      {mainLabel}
    </Button>
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={css({
            position: "fixed",
            inset: 0,
            bg: "overlay.neutral.default",
            zIndex: 50,
          })}
        />
        <Dialog.Content
          {...(body ? {} : { "aria-describedby": undefined })}
          className={css({
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
            w: "303px",
            bg: "bg.neutral.default",
            borderRadius: "lg",
            overflow: "hidden",
            pt: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            outline: "none",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              px: "16px",
            })}
          >
            <Dialog.Title
              className={css({
                m: 0,
                textStyle: "title1",
                color: "fg.neutral.default",
                textAlign: "center",
                wordBreak: "keep-all",
                whiteSpace: "pre-line",
                overflowWrap: "break-word",
              })}
            >
              {title}
            </Dialog.Title>
            {body && (
              <Dialog.Description
                className={css({
                  m: 0,
                  textStyle: "body4",
                  color: "fg.neutral.subtler",
                  textAlign: "center",
                  wordBreak: "keep-all",
                  whiteSpace: "pre-line",
                  overflowWrap: "break-word",
                })}
              >
                {body}
              </Dialog.Description>
            )}
          </div>

          {alternativeLabel !== undefined ? (
            <ActionArea
              type="equal"
              safeArea={false}
              alternative={
                <Button variant="outline" size="lg" display="full" onClick={onAlternative}>
                  {alternativeLabel}
                </Button>
              }
              main={mainButton}
            />
          ) : (
            <ActionArea type="single" safeArea={false} main={mainButton} />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
