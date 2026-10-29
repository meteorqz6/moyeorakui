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

const focusRing = css({
  _focusVisible: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "stroke.brand.default",
    outlineOffset: "2px",
  },
});

export function Header({ title, onBack, actionLabel, onAction, className }: HeaderProps) {
  return (
    <header
      className={cx(
        css({
          position: "relative",
          h: "56px",
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
          <IconButton size="md" aria-label="뒤로가기" onClick={onBack} className={focusRing}>
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
          m: "0",
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
          className={cx(
            css({
              position: "absolute",
              right: "12px",
              top: "4px",
            }),
            focusRing,
          )}
        >
          {actionLabel}
        </Button>
      )}
    </header>
  );
}
