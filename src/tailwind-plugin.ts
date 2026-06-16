import plugin from "tailwindcss/plugin"

const colors = {
  // fill
  "fill-neutral-default": "var(--colors-fill-neutral-default)",
  "fill-neutral-default-pressed": "var(--colors-fill-neutral-default-pressed)",
  "fill-neutral-default-disabled": "var(--colors-fill-neutral-default-disabled)",
  "fill-neutral-subtle": "var(--colors-fill-neutral-subtle)",
  "fill-neutral-subtler": "var(--colors-fill-neutral-subtler)",
  "fill-neutral-subtlest": "var(--colors-fill-neutral-subtlest)",
  "fill-neutral-faintest": "var(--colors-fill-neutral-faintest)",
  "fill-brand-default": "var(--colors-fill-brand-default)",
  "fill-brand-default-pressed": "var(--colors-fill-brand-default-pressed)",
  "fill-brand-subtle": "var(--colors-fill-brand-subtle)",
  "fill-brand-subtle-pressed": "var(--colors-fill-brand-subtle-pressed)",
  "fill-brand-subtler": "var(--colors-fill-brand-subtler)",
  "fill-brand-subtlest": "var(--colors-fill-brand-subtlest)",
  // fg
  "fg-neutral-stronger": "var(--colors-fg-neutral-stronger)",
  "fg-neutral-strong": "var(--colors-fg-neutral-strong)",
  "fg-neutral-default": "var(--colors-fg-neutral-default)",
  "fg-neutral-subtle": "var(--colors-fg-neutral-subtle)",
  "fg-neutral-subtler": "var(--colors-fg-neutral-subtler)",
  "fg-neutral-subtlest": "var(--colors-fg-neutral-subtlest)",
  "fg-neutral-faintest": "var(--colors-fg-neutral-faintest)",
  "fg-brand-default": "var(--colors-fg-brand-default)",
  "fg-brand-subtle": "var(--colors-fg-brand-subtle)",
  "fg-brand-subtlest": "var(--colors-fg-brand-subtlest)",
  "fg-positive-default": "var(--colors-fg-positive-default)",
  "fg-negative-default": "var(--colors-fg-negative-default)",
  // bg
  "bg-neutral-strongest": "var(--colors-bg-neutral-strongest)",
  "bg-neutral-strong": "var(--colors-bg-neutral-strong)",
  "bg-neutral-default": "var(--colors-bg-neutral-default)",
  // stroke
  "stroke-neutral-strong": "var(--colors-stroke-neutral-strong)",
  "stroke-neutral-default": "var(--colors-stroke-neutral-default)",
  "stroke-neutral-subtle": "var(--colors-stroke-neutral-subtle)",
  "stroke-neutral-subtler": "var(--colors-stroke-neutral-subtler)",
  "stroke-brand-default": "var(--colors-stroke-brand-default)",
  "stroke-brand-subtle": "var(--colors-stroke-brand-subtle)",
  "stroke-negative-default": "var(--colors-stroke-negative-default)",
  // overlay
  "overlay-neutral-stronger": "var(--colors-overlay-neutral-stronger)",
  "overlay-neutral-strong": "var(--colors-overlay-neutral-strong)",
  "overlay-neutral-default": "var(--colors-overlay-neutral-default)",
  "overlay-neutral-subtle": "var(--colors-overlay-neutral-subtle)",
  "overlay-neutral-subtler": "var(--colors-overlay-neutral-subtler)",
  // shadow
  "shadow-neutral-stronger": "var(--colors-shadow-neutral-stronger)",
  "shadow-neutral-strong": "var(--colors-shadow-neutral-strong)",
  "shadow-neutral-default": "var(--colors-shadow-neutral-default)",
  "shadow-neutral-subtle": "var(--colors-shadow-neutral-subtle)",
}

export default plugin(({ addUtilities }) => {
  addUtilities({
    ".textStyle_head1": {
      fontSize: "28px",
      fontWeight: "600",
      letterSpacing: "-0.005em",
      lineHeight: "1.36",
    },
    ".textStyle_head2": {
      fontSize: "24px",
      fontWeight: "700",
      letterSpacing: "-0.005em",
      lineHeight: "1.17",
    },
    ".textStyle_head3": {
      fontSize: "24px",
      fontWeight: "600",
      letterSpacing: "-0.005em",
      lineHeight: "1.33",
    },
    ".textStyle_head4": {
      fontSize: "20px",
      fontWeight: "500",
      letterSpacing: "-0.005em",
      lineHeight: "1.4",
    },
    ".textStyle_title1": {
      fontSize: "20px",
      fontWeight: "600",
      letterSpacing: "-0.005em",
      lineHeight: "1.4",
    },
    ".textStyle_title2": {
      fontSize: "20px",
      fontWeight: "400",
      letterSpacing: "-0.005em",
      lineHeight: "1.4",
    },
    ".textStyle_title3": {
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "-0.005em",
      lineHeight: "1.38",
    },
    ".textStyle_body1": {
      fontSize: "16px",
      fontWeight: "500",
      letterSpacing: "-0.01em",
      lineHeight: "1.5",
    },
    ".textStyle_body2": {
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "-0.01em",
      lineHeight: "1.5",
    },
    ".textStyle_body3": {
      fontSize: "14px",
      fontWeight: "600",
      letterSpacing: "-0.01em",
      lineHeight: "1.57",
    },
    ".textStyle_body4": {
      fontSize: "14px",
      fontWeight: "500",
      letterSpacing: "-0.01em",
      lineHeight: "1.57",
    },
    ".textStyle_body5": {
      fontSize: "14px",
      fontWeight: "400",
      letterSpacing: "-0.01em",
      lineHeight: "1.57",
    },
    ".textStyle_caption1": {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "-0.01em",
      lineHeight: "1.67",
    },
    ".textStyle_caption2": {
      fontSize: "12px",
      fontWeight: "500",
      letterSpacing: "-0.01em",
      lineHeight: "1.5",
    },
    ".textStyle_caption3": {
      fontSize: "12px",
      fontWeight: "400",
      letterSpacing: "-0.01em",
      lineHeight: "1.5",
    },
  })
}, {
  theme: {
    extend: {
      colors,
    },
  },
})
