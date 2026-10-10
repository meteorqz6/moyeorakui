import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // 완성된 컴포넌트만 노출. 작업이 끝난 컴포넌트의 경로를 이 목록에 추가하세요.
  // 작업 순서: Floating Button -> Toast -> Modal
  stories: [
    "../src/tokens/colors.mdx",
    "../src/tokens/colors.stories.tsx",
    "../src/tokens/typography.mdx",
    "../src/tokens/typography.stories.tsx",
    "../src/components/Icon/Icon.mdx",
    "../src/components/Icon/Icon.stories.tsx",
    "../src/components/Button/Button.mdx",
    "../src/components/Button/Button.stories.tsx",
    "../src/components/IconButton/IconButton.mdx",
    "../src/components/IconButton/IconButton.stories.tsx",
    "../src/components/Badge/Badge.mdx",
    "../src/components/Badge/Badge.stories.tsx",
    "../src/components/Chip/Chip.mdx",
    "../src/components/Chip/Chip.stories.tsx",
    "../src/components/FloatingButton/FloatingButton.mdx",
    "../src/components/FloatingButton/FloatingButton.stories.tsx",
    "../src/components/Toast/Toast.mdx",
    "../src/components/Toast/Toast.stories.tsx",
    "../src/components/ActionArea/ActionArea.mdx",
    "../src/components/ActionArea/ActionArea.stories.tsx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
