import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",

  theme: {
    tokens: {
      colors: {
        neutral: {
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
        neutralOpacity: {
          100: { value: "rgba(15, 17, 24, 0.02)" },
          200: { value: "rgba(15, 17, 24, 0.04)" },
          300: { value: "rgba(15, 17, 24, 0.08)" },
          400: { value: "rgba(15, 17, 24, 0.20)" },
          500: { value: "rgba(15, 17, 24, 0.28)" },
          600: { value: "rgba(15, 17, 24, 0.56)" },
          700: { value: "rgba(15, 17, 24, 0.70)" },
          800: { value: "rgba(15, 17, 24, 0.80)" },
          900: { value: "rgba(15, 17, 24, 0.90)" },
        },
        red: { value: "#f0405c" },
        green: { value: "#00cf95" },
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
        full: { value: "9999px" },
      },
      shadows: {
        subtle:   { value: "0 0 8px 4px var(--colors-shadow-subtle)" },
        default:  { value: "0 0 8px 0px var(--colors-shadow-default)" },
        strong:   { value: "0 0 12px 0px var(--colors-shadow-strong)" },
        stronger: { value: "0 0 6px 2px var(--colors-shadow-stronger)" },
      },
    },

    semanticTokens: {
      colors: {
        fill: {
          neutral: {
            default: { value: { base: "{colors.neutral.0}" } },
            strong: { value: { base: "{colors.neutral.50}" } },
            stronger: { value: { base: "{colors.neutral.100}" } },
            strongest: { value: { base: "{colors.neutral.300}" } },
          },
          inverted: {
            default: { value: { base: "{colors.neutral.800}" } },
            "default-pressed": { value: { base: "{colors.neutral.600}" } },
            "default-disabled": { value: { base: "{colors.neutral.200}" } },
          },
          brand: {
            subtlest: { value: { base: "{colors.blue.100}" } },
            subtler: { value: { base: "{colors.blue.200}" } },
            subtle: { value: { base: "{colors.blue.300}" } },
            "subtle-pressed": { value: { base: "{colors.blue.500}" } },
            default: { value: { base: "{colors.blue.700}" } },
            "default-pressed": { value: { base: "{colors.blue.900}" } },
          },
        },
        bg: {
          neutral: {
            default: { value: { base: "{colors.neutral.0}" } },
            strong: { value: { base: "{colors.neutral.100}" } },
          },
          dim: {
            default: { value: { base: "{colors.neutralOpacity.700}" } },
          },
        },
        stroke: {
          neutral: {
            subtler: { value: { base: "{colors.neutral.100}" } },
            subtle: { value: { base: "{colors.neutral.200}" } },
            default: { value: { base: "{colors.neutral.300}" } },
            strong: { value: { base: "{colors.neutral.400}" } },
          },
          brand: {
            subtle: { value: { base: "{colors.blue.600}" } },
            default: { value: { base: "{colors.blue.700}" } },
          },
          negative: {
            default: { value: { base: "{colors.red}" } },
          },
        },
        shadow: {
          subtle:   { value: { base: "{colors.neutralOpacity.100}" } },
          default:  { value: { base: "{colors.neutralOpacity.200}" } },
          strong:   { value: { base: "{colors.neutralOpacity.300}" } },
          stronger: { value: { base: "{colors.neutralOpacity.500}" } },
        },
        fg: {
          neutral: {
            faintest: { value: { base: "{colors.neutral.300}" } },
            subtlest: { value: { base: "{colors.neutral.400}" } },
            subtler: { value: { base: "{colors.neutral.500}" } },
            subtle: { value: { base: "{colors.neutral.700}" } },
            default: { value: { base: "{colors.neutral.800}" } },
            strong: { value: { base: "{colors.neutral.900}" } },
            "default-disabled": { value: { base: "{colors.neutral.200}" } },
          },
          inverted: {
            default: { value: { base: "{colors.neutral.0}" } },
          },
          brand: {
            subtlest: { value: { base: "{colors.blue.200}" } },
            default: { value: { base: "{colors.blue.700}" } },
          },
          positive: {
            default: { value: { base: "{colors.green}" } },
          },
          negative: {
            default: { value: { base: "{colors.red}" } },
          },
        },
      },
    },

    textStyles: {
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
    },
  },
});
