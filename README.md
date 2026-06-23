# @moyeorak/design-system

## 프로젝트 소개

실 서비스인 모여락을 먼저 개발한 뒤 시작된 프로젝트로, 함께 작업한 디자이너와 함께 디자인 토큰과 컴포넌트를 체계적으로 문서화해 디자이너-개발자 간 커뮤니케이션 비용을 줄이고 서비스 전반의 디자인 일관성을 보장하고자 별도 프로젝트로 시작했습니다.

### 기술적 의사결정

- **Panda CSS** — 빌드타임에 정적 CSS를 추출하는 zero-runtime CSS-in-JS로, 토큰을 타입 안전하게 참조할 수 있어요.
- **Radix UI** — 복잡한 동작이나 합성이 필요한 곳에 선택적으로 헤드리스 프리미티브를 적용해요. 합성에는 `Slot`(Button), 선택 상태에는 `Toggle`(Chip), 일시적 알림에는 `Toast`를 써요. 단순 표시용 컴포넌트는 Panda CSS만으로 구현해요.
- **Tailwind 동시 지원** — 소비 프로젝트가 반드시 Panda CSS를 쓰지 않아도 동일한 디자인 토큰을 쓸 수 있도록 별도의 `tailwind-plugin` 진입점을 제공해요.

### 컴포넌트 / 토큰 문서

전체 컴포넌트 목록, 디자인 토큰, 사용 예제는 Storybook에서 확인할 수 있어요.

→ [Storybook 바로가기](https://main--69cf7bceba8267c1b5d86ba6.chromatic.com/?path=/docs/foundations-colors--docs)

## 기술 스택

| 역할 | 기술 |
|------|------|
| 프레임워크 | React 19 + TypeScript |
| 스타일링 | Panda CSS (+ Tailwind CSS 플러그인 지원) |
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
| `bun run test` | 테스트 실행 |

그 외 스크립트(`lint`, `format`, `chromatic` 등)는 `package.json`을 참고하세요.

## 프로젝트 구조

```
moyeorakui/
├── src/
│   ├── components/        # 컴포넌트 (안정화된 것만 src/index.ts에서 export)
│   ├── lib/
│   │   └── utils.ts       # cx 유틸리티 (styled-system/css에서 re-export)
│   ├── tailwind-plugin.ts # Tailwind CSS용 토큰 플러그인
│   ├── styles.css         # Panda CSS 레이어 선언
│   ├── env.d.ts           # CSS 파일 타입 선언
│   ├── styles.css.d.ts    # styles.css companion 타입
│   └── index.ts           # 라이브러리 진입점
├── styled-system/         # Panda CSS codegen 결과물 (gitignore, bun install 시 자동 생성)
├── panda.config.ts        # 디자인 토큰 및 테마 설정
├── vite.config.ts         # 라이브러리 빌드 설정
└── .storybook/            # Storybook 설정
```

## 디자인 토큰

토큰은 `panda.config.ts` 한 곳에서 관리하며, 색상과 텍스트 스타일 모두 원시값 → 의미 기반 값 2단계 구조를 따라요.

- **색상** — semantic 토큰은 `요소.의도.강조단계.상태` 구조예요. → [색상 토큰 보기](https://main--69cf7bceba8267c1b5d86ba6.chromatic.com/?path=/docs/foundations-colors--docs)
- **텍스트 스타일** — Heading / Title / Body / Caption 4개 그룹으로 구성돼요. → [텍스트 스타일 보기](https://main--69cf7bceba8267c1b5d86ba6.chromatic.com/?path=/docs/foundations-typography--docs)

## 파일 구조 컨벤션

```
src/components/ComponentName/
├── index.ts                  # named export
├── ComponentName.tsx         # 구현
├── ComponentName.stories.tsx # Storybook 스토리
└── ComponentName.mdx         # Storybook 문서 (anatomy/usage 이미지 포함, 선택)
```

## Tailwind 지원 (v4)

Panda CSS를 쓰지 않는 소비 프로젝트를 위해 동일한 디자인 토큰을 Tailwind CSS 유틸리티로 노출하는 플러그인을 별도로 제공해요. Tailwind v4는 CSS 안에서 직접 설정하는 방식이라 `tailwind.config.ts` 없이 진입 CSS에서 바로 로드해요.

```css
/* 앱의 전역 CSS 진입점 */
@import "@moyeorak/design-system/layers.css";
@import "tailwindcss";
@plugin "@moyeorak/design-system/tailwind-plugin";
@import "@moyeorak/design-system/styles.css";
```

플러그인은 semantic 색상 토큰을 `bg-fill-brand-default`, `text-fg-neutral-default`처럼 CSS 변수 기반 Tailwind 컬러로, 텍스트 스타일을 `.textStyle_body1` 같은 유틸리티 클래스로 노출해요. CSS 변수 자체는 `@moyeorak/design-system/styles.css`에서 가져오므로, 이 CSS는 Tailwind 사용 여부와 관계없이 항상 import해야 해요.

### Cascade layer 우선순위 고정

Tailwind v4는 네이티브 CSS cascade layer(`@layer theme, base, components, utilities`)를 쓰는데, 레이어 우선순위는 import 순서가 아니라 "레이어 이름이 처음 선언된 순서"로 전역 고정돼요. 이 패키지의 컴포넌트 CSS도 자체 `moyeorak-*` 레이어를 쓰기 때문에, 위 예제처럼 `layers.css`를 다른 `@import`보다 먼저 로드해 순서를 미리 고정해야 해요. 그러지 않으면 디자인 시스템 컴포넌트 기본 스타일이 Tailwind preflight에 눌리거나, 반대로 컴포넌트에 붙인 Tailwind 유틸 클래스 오버라이드가 안 먹히는 문제가 import 순서에 따라 무작위로 발생해요.

## 다크 모드

현재 semantic 토큰에 `_dark` 값이 정의되지 않아 다크 모드를 지원하지 않아요.

## 라이브러리 사용 (소비자)

```bash
npm install @moyeorak/design-system
```

CSS는 앱의 전역 CSS 진입점에서 한 번만 가져오면 돼요. Tailwind 없이 쓴다면:

```css
/* 앱의 전역 CSS 진입점 */
@import "@moyeorak/design-system/styles.css";
```

Tailwind v4를 함께 쓴다면 위 [Tailwind 지원 (v4)](#tailwind-지원-v4) 섹션의 예제를 참고해주세요.

토큰은 `styles.css`의 `:root`에 CSS 변수로 노출돼요. 어디서든 `var(--colors-fill-brand-default)`처럼 직접 참조하면 돼요.

```css
.myButton {
  background: var(--colors-fill-brand-default);
}
```

텍스트 스타일(Heading/Title/Body/Caption)은 CSS 변수 조합이 아니라 완성된 클래스로 제공돼요. `textStyle_{이름}` 클래스를 그대로 붙이면 돼요.

```html
<p class="textStyle_body1">본문 텍스트</p>
```

### 폰트 (Pretendard)

라이브러리는 폰트 파일을 번들링하지 않고 `font-family: 'Pretendard Variable', Pretendard, sans-serif`로 이름만 참조해요. Pretendard를 적용하려면 소비 앱에서 직접 로드해야 하고(예: Next.js는 `next/font/local`), 로드하지 않으면 시스템 sans-serif로 자동 폴백돼요.

## Panda CSS 코드 생성

`panda.config.ts`를 수정하면 반드시 codegen을 다시 실행해야 해요.

```bash
bun run prepare
```

`styled-system/` 디렉토리는 gitignore 처리돼 있어요. `bun install` 시 `prepare` 스크립트로 자동 생성돼요.
