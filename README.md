# moyeorak-ui

moyeorak 프로젝트를 위한 React 컴포넌트 디자인 시스템.

## 기술 스택

| 역할 | 기술 |
|------|------|
| 프레임워크 | React 19 + TypeScript |
| 스타일링 | Panda CSS |
| 헤드리스 UI | Radix UI |
| 문서화 | Storybook 8 |
| 빌드 | Vite 6 |
| 패키지 매니저 | Bun |

## 시작하기

```bash
bun install
```

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `bun run build` | 라이브러리 빌드 (`panda codegen` 포함) |
| `bun run dev` | watch 모드로 빌드 |
| `bun run storybook` | Storybook 개발 서버 실행 (포트 6006) |
| `bun run build-storybook` | Storybook 정적 빌드 |
| `bun run prepare` | Panda CSS 코드 생성 |
| `bun run typecheck` | TypeScript 타입 검사 |
| `bun run test` | 테스트 실행 |
| `bun run test:watch` | watch 모드로 테스트 실행 |

## 프로젝트 구조

```
moyeorakui/
├── src/
│   ├── components/        # 컴포넌트 (앞으로 추가될 위치)
│   ├── lib/
│   │   └── utils.ts       # cx 유틸리티 (styled-system/css에서 re-export)
│   ├── styles.css         # Panda CSS 레이어 선언
│   ├── env.d.ts           # CSS 파일 타입 선언
│   ├── styles.css.d.ts    # styles.css companion 타입
│   └── index.ts           # 라이브러리 진입점
├── styled-system/         # Panda CSS codegen 결과물 (커밋 포함)
├── panda.config.ts        # 디자인 토큰 및 테마 설정
├── vite.config.ts         # 라이브러리 빌드 설정
└── .storybook/            # Storybook 설정
```

## 디자인 토큰

토큰은 `panda.config.ts` 한 곳에서 관리하며 두 레이어로 구성돼요.

### Atomic 토큰 (원시값)

```
colors.neutral.{0-900}   중립 색상 팔레트
colors.blue.{100-700}    브랜드 블루 팔레트
colors.red               #f0405c
colors.green             #00cf95

fontSizes.{xs|sm|md|lg|xl|2xl}
fontWeights.{regular|medium|semibold|bold}
letterSpacings.{tight|tighter}
radii.{sm|md|lg|xl|full}
```

### Semantic 토큰 (의미 기반, 다크 모드 지원)

```
fg.{default|strong|subtle|subtler|subtlest|disabled}
stroke.{default|strong|subtle|brand|negative}
fill.{neutral-default|neutral-strong|neutral-stronger|inverted-default|brand-default|brand-subtle}
bg.{default|strong|dim}
```

### 텍스트 스타일

```
head{1-3}    28px / 24px  bold / semibold
title{1-2}   20px / 16px  semibold
body{1-5}    16px / 14px  regular ~ semibold
caption{1-3} 12px         regular ~ semibold
```

## 컴포넌트 작성 가이드

Radix UI 프리미티브 위에 Panda CSS `cva`로 스타일을 입히는 패턴을 따라요.

```tsx
// src/components/Button/Button.tsx
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "../../../styled-system/css"
import { cx } from "../../lib/utils"

const buttonStyles = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "md",
    fontWeight: "semibold",
    _disabled: { opacity: 0.5, pointerEvents: "none" },
  },
  variants: {
    variant: {
      primary: { bg: "fill.brand-default", color: "white" },
      secondary: { bg: "fill.neutral-default", color: "fg.default" },
    },
    size: {
      sm: { h: "32px", px: "12px", textStyle: "body3" },
      md: { h: "40px", px: "16px", textStyle: "body2" },
      lg: { h: "48px", px: "24px", textStyle: "body1" },
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean
}

export function Button({ variant, size, asChild = false, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cx(buttonStyles({ variant, size }), className)} {...props} />
}
```

### 파일 구조 컨벤션

```
src/components/ComponentName/
├── index.ts                  # named export
├── ComponentName.tsx         # 구현
└── ComponentName.stories.tsx # Storybook 스토리
```

## 다크 모드

Panda CSS의 `_dark` 조건은 `.dark` 클래스 기반으로 작동해요.

```tsx
// 다크 모드 적용 예시
<div className="dark">
  {/* 이 안의 모든 컴포넌트에 dark semanticToken 적용 */}
</div>
```

## 라이브러리 사용 (소비자)

```bash
npm install moyeorak-ui
```

```tsx
// CSS import 필수
import "moyeorak-ui/dist/style.css"

import { Button } from "moyeorak-ui"
```

## Panda CSS 코드 생성

`panda.config.ts`를 수정하면 반드시 codegen을 다시 실행해야 해요.

```bash
bun run prepare
```

`styled-system/` 디렉토리는 gitignore 처리돼 있어요. `bun install` 시 `prepare` 스크립트가 자동으로 생성해요.
