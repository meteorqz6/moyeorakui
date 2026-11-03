import { css } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export type HeaderProps = {
  title: string;
  onBack?: () => void;
  /** 뒤로 가기 버튼의 접근 가능한 이름이에요. 화면에는 보이지 않고 스크린 리더가 읽어요. */
  backAriaLabel?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

export function Header({
  title,
  onBack,
  backAriaLabel = "뒤로 가기",
  actionLabel,
  onAction,
  className,
}: HeaderProps) {
  return (
    <header
      className={cx(
        css({
          position: "relative",
          h: "[56px]",
          w: "full",
        }),
        className,
      )}
    >
      {onBack && (
        <div
          className={css({
            position: "absolute",
            left: "4px",
            top: "50%",
            transform: "translateY(-50%)",
          })}
        >
          <IconButton size="md" aria-label={backAriaLabel} onClick={onBack}>
            <Icon type="chevron_left" size="md" />
          </IconButton>
        </div>
      )}

      <h1
        className={css({
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          m: "[0]",
          textStyle: "title1",
          color: "fg.neutral.strong",
          textAlign: "center",
          whiteSpace: "nowrap",
        })}
      >
        {title}
      </h1>

      {actionLabel && (
        <Button
          variant="ghost-brand"
          size="lg"
          onClick={onAction}
          className={css({
            position: "absolute",
            right: "12px",
            top: "4px",
          })}
        >
          {actionLabel}
        </Button>
      )}
    </header>
  );
}
