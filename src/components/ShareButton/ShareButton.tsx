import { cva, css } from "../../../styled-system/css"
import { cx } from "../../lib/utils"
import { KAKAO_LOGO_SRC } from "./assets"

const wrapperStyles = cva({
  base: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    px: "12px",
    py: "8px",
    borderRadius: "12px",
    cursor: "pointer",
    bg: "transparent",
    border: "none",
    userSelect: "none",
  },
  variants: {
    selected: {
      true: { bg: "fill.neutral.stronger" },
      false: {},
    },
  },
  defaultVariants: { selected: false },
})

const circleStyles = cva({
  base: {
    w: "56px",
    h: "56px",
    borderRadius: "full",
    overflow: "hidden",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    variant: {
      kakao: { bg: "[#FBE300]" },
      link: { bg: "fg.brand.default" },
      more: { bg: "fg.neutral.subtlest" },
    },
  },
})

const labelStyles = css({
  textStyle: "body4",
  color: "fg.neutral.subtle",
})

export type ShareButtonVariant = "kakao" | "link" | "more"

export type ShareButtonProps = {
  variant: ShareButtonVariant
  selected?: boolean
  onClick?: () => void
  className?: string
}

const LABEL_MAP: Record<ShareButtonVariant, string> = {
  kakao: "카카오톡",
  link: "링크복사",
  more: "더보기",
}

function KakaoIcon() {
  return (
    <img
      src={KAKAO_LOGO_SRC}
      width={42}
      height={42}
      alt=""
      style={{ display: "block", pointerEvents: "none" }}
    />
  )
}

function LinkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.2291 19.7714L19.7715 12.2289M9.40114 15.057L7.51552 16.9426C5.43273 19.0254 5.43212 22.4026 7.51492 24.4854C9.59772 26.5682 12.9756 26.5676 15.0584 24.4848L16.942 22.5993M15.0572 9.39968L16.9428 7.51406C19.0256 5.43126 22.4021 5.43164 24.4849 7.51443C26.5677 9.59723 26.5676 12.9741 24.4848 15.0569L22.6002 16.9425"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg width="23" height="5" viewBox="0 0 23 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z" fill="white" />
      <path d="M14 2.5C14 3.88071 12.8807 5 11.5 5C10.1193 5 9 3.88071 9 2.5C9 1.11929 10.1193 0 11.5 0C12.8807 0 14 1.11929 14 2.5Z" fill="white" />
      <path d="M23 2.5C23 3.88071 21.8807 5 20.5 5C19.1193 5 18 3.88071 18 2.5C18 1.11929 19.1193 0 20.5 0C21.8807 0 23 1.11929 23 2.5Z" fill="white" />
    </svg>
  )
}

const ICON_MAP = {
  kakao: <KakaoIcon />,
  link: <LinkIcon />,
  more: <MoreIcon />,
}

export function ShareButton({ variant, selected = false, onClick, className }: ShareButtonProps) {
  return (
    <button
      type="button"
      className={cx(wrapperStyles({ selected }), className)}
      onClick={onClick}
    >
      <div className={circleStyles({ variant })}>
        {ICON_MAP[variant]}
      </div>
      <span className={labelStyles}>
        {LABEL_MAP[variant]}
      </span>
    </button>
  )
}
