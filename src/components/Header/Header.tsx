import { css } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { IconButton } from "../IconButton/IconButton";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export type HeaderProps = {
  title: string;
  onBack?: () => void;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

export function Header({ title, onBack, actionLabel, onAction, className }: HeaderProps) {
  return (
    <div
      className={cx(
        css({
          position: "relative",
          h: "56px",
          w: "full",
          bg: "fill.neutral.default",
          overflow: "hidden",
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
          <IconButton size="md" aria-label="뒤로가기" onClick={onBack}>
            <Icon type="chevron_left" size="md" />
          </IconButton>
        </div>
      )}

      <div
        className={css({
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textStyle: "title1",
          color: "fg.neutral.default",
          textAlign: "center",
          whiteSpace: "nowrap",
        })}
      >
        {title}
      </div>

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
    </div>
  );
}
