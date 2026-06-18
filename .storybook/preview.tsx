import type { Preview } from "@storybook/react"
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
import "../src/styles.css"

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Foundations", "Components"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      options: {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
        },
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals["theme"] ?? "light"
      const isDocs = context.viewMode === "docs"
      return (
        <div className={theme === "dark" ? "dark" : ""}>
          <div
            style={{
              ...(isDocs ? {} : { minHeight: "100vh" }),
              padding: "2rem",
              backgroundColor: "var(--colors-bg-default)",
            }}
          >
            <Story />
          </div>
        </div>
      )
    },
  ],
}

export default preview
