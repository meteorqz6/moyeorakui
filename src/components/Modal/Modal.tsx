import * as Dialog from "@radix-ui/react-dialog";
import { css } from "../../../styled-system/css";
import { Button } from "../Button/Button";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle?: string;
  confirmLabel: string;
  onConfirm: () => void;
  cancelLabel?: string;
  onCancel?: () => void;
};

export function Modal({
  open,
  onOpenChange,
  title,
  subtitle,
  confirmLabel,
  onConfirm,
  cancelLabel,
  onCancel,
}: ModalProps) {
  const hasTwoButtons = cancelLabel !== undefined;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={css({
            position: "fixed",
            inset: 0,
            bg: "bg.dim.default",
            zIndex: 50,
          })}
        />
        <Dialog.Content
          className={css({
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
            w: "303px",
            bg: "fill.neutral.default",
            borderRadius: "lg",
            pt: "32px",
            pb: "16px",
            px: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            outline: "none",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            })}
          >
            <Dialog.Title
              className={css({
                textStyle: "title1",
                color: "fg.neutral.default",
                textAlign: "center",
              })}
            >
              {title}
            </Dialog.Title>
            {subtitle && (
              <Dialog.Description
                className={css({
                  textStyle: "body4",
                  color: "fg.neutral.subtler",
                  textAlign: "center",
                })}
              >
                {subtitle}
              </Dialog.Description>
            )}
          </div>

          {hasTwoButtons ? (
            <div className={css({ display: "flex", gap: "11px" })}>
              <Button
                variant="outline"
                size="lg"
                className={css({ flex: 1 })}
                onClick={onCancel}
              >
                {cancelLabel}
              </Button>
              <Button
                variant="brand"
                size="lg"
                className={css({ flex: 1 })}
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
            </div>
          ) : (
            <Button
              variant="brand"
              size="lg"
              className={css({ w: "full" })}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
