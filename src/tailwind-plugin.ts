import plugin from "tailwindcss/plugin"
import { semanticTokens, textStyles } from "./tokens/theme"

type SemanticValue = { value: { base: string } }

// "{fontSizes.2xl}" → "var(--font-sizes-2xl)". Panda가 만드는 CSS 변수 이름 규칙을 따른다.
const toCssVar = (reference: string) =>
  `var(--${reference
    .replace(/^\{|\}$/g, "")
    .replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)
    .replace(/\./g, "-")})`

// 의미 기반 색 토큰 fill.brand.default → "fill-brand-default": "var(--colors-fill-brand-default)"
const colors = Object.fromEntries(
  Object.entries(semanticTokens.colors).flatMap(([group, intents]) =>
    Object.entries(intents as Record<string, Record<string, SemanticValue>>).flatMap(([intent, levels]) =>
      Object.keys(levels).map((level) => {
        const name = `${group}-${intent}-${level}`
        return [name, `var(--colors-${name})`]
      }),
    ),
  ),
)

// textStyles.head1 → ".textStyle_head1". 토큰 참조는 CSS 변수로, 줄 간격은 값 그대로 쓴다.
const textStyleUtilities = Object.fromEntries(
  Object.entries(textStyles).map(([name, { value }]) => [
    `.textStyle_${name}`,
    {
      fontSize: toCssVar(value.fontSize),
      fontWeight: toCssVar(value.fontWeight),
      letterSpacing: toCssVar(value.letterSpacing),
      lineHeight: value.lineHeight,
    },
  ]),
)

export default plugin(({ addUtilities }) => {
  addUtilities(textStyleUtilities)
}, {
  theme: {
    extend: {
      colors,
    },
  },
})
