// Storybook 토큰 문서가 보여 줄 값을 theme.ts에서 계산한다.
// 문서에 값을 따로 적지 않아, 토큰을 바꾸면 문서도 함께 바뀐다.
import { semanticTokens, textStyles, tokens } from "./theme";

type TokenValue = { value: string };
type SemanticValue = { value: { base: string } };

const kebab = (name: string) => name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

// ─── Colors ──────────────────────────────────────────────────────────────────

export type ColorEntry = {
  label: string;
  value: string;
  cssVar: string;
};

export type PaletteScaleName = "gray" | "blue" | "grayOpacity";
export type PaletteColorName = "red" | "green";

export function paletteScale(name: PaletteScaleName): ColorEntry[] {
  const scale = tokens.colors[name] as Record<string, TokenValue>;
  return Object.entries(scale).map(([step, { value }]) => ({
    label: step,
    value,
    cssVar: `--colors-${kebab(name)}-${step}`,
  }));
}

export function paletteColor(name: PaletteColorName): Omit<ColorEntry, "label"> {
  return { value: tokens.colors[name].value, cssVar: `--colors-${name}` };
}

export type SemanticEntry = {
  token: string;
  alias: string;
  value: string;
};

export type SemanticGroupName = keyof typeof semanticTokens.colors;

// "{colors.gray.800}"처럼 원시 색을 가리키는 참조를 별칭(gray-800)과 실제 값으로 푼다.
function resolveColorReference(reference: string): { alias: string; value: string } {
  const path = reference.replace(/^\{colors\.|\}$/g, "").split(".");
  let node: unknown = tokens.colors;
  for (const key of path) node = (node as Record<string, unknown>)[key];
  return { alias: path.map(kebab).join("-"), value: (node as TokenValue).value };
}

export function semanticGroup(group: SemanticGroupName): SemanticEntry[] {
  const intents = semanticTokens.colors[group] as Record<string, Record<string, SemanticValue>>;
  return Object.entries(intents).flatMap(([intent, levels]) =>
    Object.entries(levels).map(([level, { value }]) => ({
      token: `--colors-${group}-${intent}-${level}`,
      ...resolveColorReference(value.base),
    })),
  );
}

// ─── Typography ──────────────────────────────────────────────────────────────

export type TextStyleEntry = {
  name: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  sizeToken: string;
  weightToken: string;
  spacingToken: string;
  // 피그마에서 쓰는 px 줄 간격. lineHeight는 피그마 px ÷ font-size로 옮긴 값이다.
  lineHeightPx: string;
};

export type TextStyleGroupName = "head" | "title" | "body" | "caption";

// "{fontSizes.2xl}"에서 토큰 이름(2xl)을 꺼낸다.
const tokenName = (reference: string) => reference.replace(/^\{[^.]+\.|\}$/g, "");

export function textStyleGroup(group: TextStyleGroupName): TextStyleEntry[] {
  return Object.entries(textStyles)
    .filter(([name]) => name.startsWith(group))
    .map(([name, { value }]) => {
      const sizeToken = tokenName(value.fontSize) as keyof typeof tokens.fontSizes;
      const weightToken = tokenName(value.fontWeight) as keyof typeof tokens.fontWeights;
      const spacingToken = tokenName(value.letterSpacing) as keyof typeof tokens.letterSpacings;
      const fontSize = tokens.fontSizes[sizeToken].value;
      return {
        name,
        fontSize,
        fontWeight: tokens.fontWeights[weightToken].value,
        lineHeight: value.lineHeight,
        letterSpacing: tokens.letterSpacings[spacingToken].value,
        sizeToken,
        weightToken,
        spacingToken,
        lineHeightPx: `${Math.round(parseFloat(value.lineHeight) * parseFloat(fontSize))}px`,
      };
    });
}
