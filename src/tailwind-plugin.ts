import plugin from "tailwindcss/plugin"

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
})
