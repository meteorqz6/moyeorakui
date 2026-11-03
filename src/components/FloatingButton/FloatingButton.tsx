import { css } from "../../../styled-system/css";
import { cx } from "../../lib/utils";
import { focusRing } from "../../lib/focus-ring";
import { Icon } from "../Icon/Icon";
import type { IconType } from "../Icon/registry";

// 모양만 갖고 화면 위치는 갖지 않아요. 배치는 소비 앱에서 잡아요 (FloatingButton.mdx 참고).
const floatingButtonStyles = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  w: "[40px]",
  h: "[40px]",
  borderRadius: "full",
  bg: "fill.neutral.faintest",
  shadow: "strong",
  cursor: "pointer",
  border: "none",
  boxSizing: "border-box",
  _active: { bg: "fill.neutral.subtler" },
  ...focusRing,
});

const ICON_MAP: Record<FloatingButtonType, IconType> = {
  up: "arrow_up",
  back: "chevron_left",
};

export type FloatingButtonType = "up" | "back";

export type FloatingButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "aria-label"
> & {
  type: FloatingButtonType;
  /** 텍스트 라벨이 없는 아이콘 전용 버튼이므로, 스크린 리더를 위한 접근 가능한 이름을 필수로 전달해야 해요. */
  "aria-label": string;
};

export function FloatingButton({ type, className, ...props }: FloatingButtonProps) {
  return (
    <button type="button" className={cx(floatingButtonStyles, className)} {...props}>
      <Icon type={ICON_MAP[type]} size="md" />
    </button>
  );
}
