import { defineConfig } from "@pandacss/dev";
import { semanticTokens, textStyles, tokens } from "./src/tokens/theme";

export default defineConfig({
  // 호스트 앱의 button/input 등 네이티브 엘리먼트까지 건드리는 전역 리셋을 막기 위해 끔.
  // 대신 각 컴포넌트가 자기 base 스타일에서 border/box-sizing/font를 직접 명시함.
  preflight: false,
  include: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  globalCss: {
    body: { fontFamily: "{fonts.sans}" },
  },
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",
  // 컴포넌트 prop(Button의 display 등)이 CSS 속성 이름과 겹쳐 스타일로 잘못 추출되지 않게 한다.
  // 이 패키지는 JSX 스타일 prop(<Box p="4"> 등)을 쓰지 않는다.
  jsxStyleProps: "none",
  // 토큰이 정의된 속성에는 토큰만 쓰게 해서, 토큰 이름 오타를 타입 검사에서 잡는다.
  strictTokens: true,
  // textStyle은 소스에서 실제로 쓰인 것만 추출되는데, Tailwind 플러그인은 15개 전부를
  // 하드코딩해서 노출하고 있어 raw CSS 변수 경로(Tailwind 미사용 소비자)와 커버리지가
  // 어긋남. 사용 여부와 무관하게 전부 생성해 두 경로의 textStyle_* 클래스를 동일하게 맞춤.
  staticCss: {
    css: [{ properties: { textStyle: ["*"] } }],
  },
  // Tailwind 등 다른 cascade layer 시스템과 이름이 겹치면(base, utilities 등)
  // 레이어 등록 순서가 충돌해서 컴포넌트 스타일이 깨질 수 있어 고유한 이름으로 분리
  layers: {
    reset: "moyeorak-reset",
    base: "moyeorak-base",
    tokens: "moyeorak-tokens",
    recipes: "moyeorak-recipes",
    utilities: "moyeorak-utilities",
  },

  theme: {
    tokens,
    semanticTokens,
    textStyles,
  },
});
