// 디자인 토큰의 원본. panda.config.ts와 Storybook 문서(colors, typography)가 함께 읽는다.
// 타입만 가져와 빌드 결과에는 @pandacss/dev가 포함되지 않는다.
import type { SemanticTokens, TextStyles, Tokens } from "@pandacss/dev";

export const tokens = {
  colors: {
    // theme을 extend 없이 정의해 Panda 기본 프리셋의 transparent가 없으므로 직접 둔다.
    transparent: { value: "transparent" },
    gray: {
      0: { value: "#ffffff" },
      50: { value: "#f9fafd" },
      100: { value: "#f2f4f9" },
      200: { value: "#e1e4ec" },
      300: { value: "#ccd0d9" },
      400: { value: "#9fa5b3" },
      500: { value: "#737a89" },
      600: { value: "#5f6572" },
      700: { value: "#464b53" },
      800: { value: "#2c3038" },
      900: { value: "#171a1f" },
    },
    blue: {
      100: { value: "#f7faff" },
      200: { value: "#ebf2ff" },
      300: { value: "#e5eeff" },
      400: { value: "#cbddff" },
      500: { value: "#b0ccff" },
      600: { value: "#82acff" },
      700: { value: "#4181ff" },
      800: { value: "#3c76e9" },
      900: { value: "#3265cb" },
    },
    grayOpacity: {
      100: { value: "rgb(15 17 24 / 2%)" },
      200: { value: "rgb(15 17 24 / 4%)" },
      300: { value: "rgb(15 17 24 / 8%)" },
      400: { value: "rgb(15 17 24 / 20%)" },
      500: { value: "rgb(15 17 24 / 28%)" },
      600: { value: "rgb(15 17 24 / 56%)" },
      700: { value: "rgb(15 17 24 / 70%)" },
      800: { value: "rgb(15 17 24 / 80%)" },
      900: { value: "rgb(15 17 24 / 90%)" },
    },
    red: { value: "#f0405c" },
    green: { value: "#00cf95" },
  },
  fonts: {
    sans: { value: "'Pretendard Variable', Pretendard, sans-serif" },
  },
  fontSizes: {
    xs: { value: "12px" },
    sm: { value: "14px" },
    md: { value: "16px" },
    lg: { value: "20px" },
    xl: { value: "24px" },
    "2xl": { value: "28px" },
  },
  fontWeights: {
    regular: { value: "400" },
    medium: { value: "500" },
    semibold: { value: "600" },
    bold: { value: "700" },
  },
  letterSpacings: {
    tight: { value: "-0.01em" },
    tighter: { value: "-0.005em" },
  },
  radii: {
    "2xs": { value: "4px" },
    xs: { value: "6px" },
    sm: { value: "8px" },
    md: { value: "12px" },
    lg: { value: "16px" },
    xl: { value: "20px" },
    full: { value: "999px" },
  },
  // theme을 extend 없이 정의해 Panda 기본 sizes 토큰이 없으므로 w: "full"에 쓸 값을 직접 둔다.
  sizes: {
    full: { value: "100%" },
  },
  shadows: {
    strong: { value: "0 0 12px {colors.shadow.neutral.strong}" },
  },
} satisfies Tokens;

export const semanticTokens = {
  colors: {
    fill: {
      neutral: {
        default: { value: { base: "{colors.gray.800}" } },
        "default-pressed": { value: { base: "{colors.gray.600}" } },
        "default-disabled": { value: { base: "{colors.gray.200}" } },
        subtle: { value: { base: "{colors.gray.300}" } },
        subtler: { value: { base: "{colors.gray.100}" } },
        subtlest: { value: { base: "{colors.gray.50}" } },
        faintest: { value: { base: "{colors.gray.0}" } },
      },
      brand: {
        default: { value: { base: "{colors.blue.700}" } },
        "default-pressed": { value: { base: "{colors.blue.900}" } },
        subtle: { value: { base: "{colors.blue.300}" } },
        "subtle-pressed": { value: { base: "{colors.blue.500}" } },
        subtler: { value: { base: "{colors.blue.200}" } },
        subtlest: { value: { base: "{colors.blue.100}" } },
      },
    },
    bg: {
      neutral: {
        strongest: { value: { base: "{colors.gray.800}" } },
        strong: { value: { base: "{colors.gray.100}" } },
        default: { value: { base: "{colors.gray.0}" } },
      },
    },
    overlay: {
      neutral: {
        stronger: { value: { base: "{colors.grayOpacity.900}" } },
        strong: { value: { base: "{colors.grayOpacity.800}" } },
        default: { value: { base: "{colors.grayOpacity.700}" } },
        subtle: { value: { base: "{colors.grayOpacity.600}" } },
        subtler: { value: { base: "{colors.grayOpacity.500}" } },
      },
    },
    stroke: {
      neutral: {
        strong: { value: { base: "{colors.gray.400}" } },
        default: { value: { base: "{colors.gray.300}" } },
        subtle: { value: { base: "{colors.gray.200}" } },
        subtler: { value: { base: "{colors.gray.100}" } },
      },
      brand: {
        default: { value: { base: "{colors.blue.700}" } },
        subtle: { value: { base: "{colors.blue.600}" } },
      },
      negative: {
        default: { value: { base: "{colors.red}" } },
      },
    },
    shadow: {
      neutral: {
        stronger: { value: { base: "{colors.grayOpacity.500}" } },
        strong: { value: { base: "{colors.grayOpacity.300}" } },
        default: { value: { base: "{colors.grayOpacity.200}" } },
        subtle: { value: { base: "{colors.grayOpacity.100}" } },
      },
    },
    fg: {
      neutral: {
        stronger: { value: { base: "{colors.gray.900}" } },
        strong: { value: { base: "{colors.gray.800}" } },
        default: { value: { base: "{colors.gray.700}" } },
        subtle: { value: { base: "{colors.gray.500}" } },
        subtler: { value: { base: "{colors.gray.400}" } },
        subtlest: { value: { base: "{colors.gray.300}" } },
        faintest: { value: { base: "{colors.gray.0}" } },
      },
      brand: {
        default: { value: { base: "{colors.blue.700}" } },
        subtle: { value: { base: "{colors.blue.400}" } },
        subtlest: { value: { base: "{colors.blue.200}" } },
      },
      positive: {
        default: { value: { base: "{colors.green}" } },
      },
      negative: {
        default: { value: { base: "{colors.red}" } },
      },
    },
  },
} satisfies SemanticTokens;

export const textStyles = {
  // lineHeight: 피그마 px ÷ font-size (unitless)
  head1: {
    value: {
      fontSize: "{fontSizes.2xl}",
      fontWeight: "{fontWeights.semibold}",
      letterSpacing: "{letterSpacings.tighter}",
      lineHeight: "1.36",
    },
  }, // 38÷28
  head2: {
    value: {
      fontSize: "{fontSizes.xl}",
      fontWeight: "{fontWeights.bold}",
      letterSpacing: "{letterSpacings.tighter}",
      lineHeight: "1.17",
    },
  }, // 28÷24
  head3: {
    value: {
      fontSize: "{fontSizes.xl}",
      fontWeight: "{fontWeights.semibold}",
      letterSpacing: "{letterSpacings.tighter}",
      lineHeight: "1.33",
    },
  }, // 32÷24
  head4: {
    value: {
      fontSize: "{fontSizes.lg}",
      fontWeight: "{fontWeights.bold}",
      letterSpacing: "{letterSpacings.tighter}",
      lineHeight: "1.4",
    },
  }, // 28÷20
  title1: {
    value: {
      fontSize: "{fontSizes.lg}",
      fontWeight: "{fontWeights.semibold}",
      letterSpacing: "{letterSpacings.tighter}",
      lineHeight: "1.4",
    },
  }, // 28÷20
  title2: {
    value: {
      fontSize: "{fontSizes.lg}",
      fontWeight: "{fontWeights.regular}",
      letterSpacing: "{letterSpacings.tighter}",
      lineHeight: "1.4",
    },
  }, // 28÷20
  title3: {
    value: {
      fontSize: "{fontSizes.md}",
      fontWeight: "{fontWeights.semibold}",
      letterSpacing: "{letterSpacings.tighter}",
      lineHeight: "1.38",
    },
  }, // 22÷16
  body1: {
    value: {
      fontSize: "{fontSizes.md}",
      fontWeight: "{fontWeights.medium}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.5",
    },
  }, // 24÷16
  body2: {
    value: {
      fontSize: "{fontSizes.md}",
      fontWeight: "{fontWeights.regular}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.5",
    },
  }, // 24÷16
  body3: {
    value: {
      fontSize: "{fontSizes.sm}",
      fontWeight: "{fontWeights.semibold}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.57",
    },
  }, // 22÷14
  body4: {
    value: {
      fontSize: "{fontSizes.sm}",
      fontWeight: "{fontWeights.medium}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.57",
    },
  }, // 22÷14
  body5: {
    value: {
      fontSize: "{fontSizes.sm}",
      fontWeight: "{fontWeights.regular}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.57",
    },
  }, // 22÷14
  caption1: {
    value: {
      fontSize: "{fontSizes.xs}",
      fontWeight: "{fontWeights.semibold}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.67",
    },
  }, // 20÷12
  caption2: {
    value: {
      fontSize: "{fontSizes.xs}",
      fontWeight: "{fontWeights.medium}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.5",
    },
  }, // 18÷12
  caption3: {
    value: {
      fontSize: "{fontSizes.xs}",
      fontWeight: "{fontWeights.regular}",
      letterSpacing: "{letterSpacings.tight}",
      lineHeight: "1.5",
    },
  }, // 18÷12
} satisfies TextStyles;
