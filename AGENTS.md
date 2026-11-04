# AGENTS.md

`@moyeorak/design-system`에서 AI 도구로 작업할 때 따르는 규칙이다. 사람도 같은 규칙을 따른다.

컴포넌트는 모여락 서비스 전환 절차의 3단계에서 만든다. 전체 순서는 서비스 저장소의 `docs/design-system-migration.md` "전환 절차"에 있다.

## 명령

- 패키지 매니저는 bun이다.
- 작업을 마쳤다고 하기 전에 아래 명령을 모두 통과시킨다.

```sh
bun run typecheck
bun run test
bun run build
bunx prettier --check <바꾼 파일>
```

- prettier는 바꾼 파일만 확인한다. 저장소 전체에는 예전 형식 경고가 남아 있다.
- `panda.config.ts`나 `src/tokens/theme.ts`를 바꾸면 `bun run prepare`로 codegen을 다시 실행한다.

## 컴포넌트를 만들기 전에

- 서비스 저장소 이슈에 설계 결정(Decision)이 있어야 한다. 결정이 없으면 만들지 않고 선택지를 정리해 사람에게 묻는다.
- 결정에 없는 prop이나 variant를 더하지 않는다.
- 서비스에서 바로 쓰지 않을 컴포넌트는 만들지 않는다. 쓰는 곳 없이 만든 컴포넌트는 지우게 된다(#7).

## 컴포넌트 규칙

- 파일 구조는 `README.md`의 파일 구조 컨벤션을 따르고, `ComponentName.test.tsx`를 함께 둔다.
- 스타일은 `styled-system/css`의 `cva`로 쓴다. 토큰 이름만 쓸 수 있다(strictTokens). 토큰 밖의 값은 `"[36px]"`처럼 명시적 예외로 쓰고 PR에 이유를 적는다.
- prop 이름은 anatomy의 부분 이름을 그대로 쓴다(`leadingIcon`, `supportingItem`).
- variant 이름은 색의 의도와 강조 정도로 짓는다(`brand`, `neutral-weak`). 화면 이름을 쓰지 않는다.
- 키보드 포커스 표시는 `src/lib/focus-ring.ts`의 `focusRing`을 쓴다.
- 접근성은 쓰는 사람의 주의가 아니라 타입과 컴포넌트가 보장한다. 이름이 필요한 요소는 prop 타입에서 필수로 만든다(`IconButton`의 `aria-label`). 선택 상태는 Radix `Toggle`처럼 ARIA 상태가 자동으로 붙는 방식을 쓴다.
- Radix는 동작이나 합성이 복잡할 때만 쓴다. 단순 표시용은 Panda CSS만으로 만든다.
- 안정된 컴포넌트만 `src/index.ts`에서 export한다.

## 테스트

새 컴포넌트에는 테스트를 함께 둔다. 설정은 `src/test/setup.ts`에 있다(jest-dom, vitest-axe).

- 역할과 접근 가능한 이름
- 상태(disabled, pressed, error 등)가 ARIA 속성으로 드러나는지
- `axe`로 접근성 위반이 없는지

## 문서

- 스토리는 모든 variant, size, 상태를 보여 준다.
- 새 컴포넌트의 스토리와 MDX는 `.storybook/main.ts`의 `stories` 목록에 등록한다. 목록에 없으면 Storybook에 나오지 않는다.
- MDX는 `IconButton.mdx` 형식을 따른다: 소개, Anatomy(이미지), 사용 예제(크기, 스타일, 상태), 접근성.
- MDX에 마크다운 표를 쓰지 않는다. 표로 렌더링되지 않는다.
- 문서와 예시 문구는 해요체로 쓰고, 가운데 점(·)을 쓰지 않는다. 끝에 마침표를 찍지 않는 것은 화면에 보이는 예시 문구에만 적용한다.

## 배포

- 버전을 올리는 커밋은 `chore(release): vX.Y.Z`로 쓴다. 새 컴포넌트와 기존 API를 깨는 변경은 minor, 버그 수정은 patch를 올린다.
- `v*` 태그를 push하면 `publish.yml`이 staged publish를 하고, npmjs.com에서 2FA로 승인해야 공개된다.
- staged publish가 성공하면 `publish.yml`이 GitHub 자동 노트(병합된 PR 제목 목록과 변경 비교 링크)로 릴리스를 만든다. 깨지는 변경이 있으면 릴리스 노트에 옮기는 방법을 직접 덧붙인다.
- npm 승인을 거부하면 `gh release delete vX.Y.Z --cleanup-tag`로 릴리스와 태그를 지운다.
- 릴리스 태그 생성과 push는 AI가 하고, npm 승인은 사람이 한다.

## Git

- 커밋: `type(scope): 한국어 요약 (#이슈)`. type은 feat, fix, refactor, docs, chore, test, ci를 쓴다.
- 버전을 올리는 릴리스 커밋은 예외로 `chore(release): vX.Y.Z`만 쓴다.
- PR 리뷰는 CodeRabbit이 맡는다(`.coderabbit.yaml`). 지적마다 반영하거나 반려한 이유를 답글로 남긴다.
- push, PR 생성, 머지는 사람이 요청할 때만 한다.
