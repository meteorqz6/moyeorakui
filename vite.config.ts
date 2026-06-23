import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "path"
import { readdirSync, readFileSync, writeFileSync, existsSync, copyFileSync } from "fs"

function injectUseClientPlugin(): Plugin {
  return {
    name: "inject-use-client",
    closeBundle() {
      const distDir = resolve(__dirname, "dist")
      if (!existsSync(distDir)) return
      const files = readdirSync(distDir).filter(
        (f) =>
          (f.endsWith(".js") || f.endsWith(".mjs")) &&
          !f.startsWith("tailwind-plugin"),
      )
      for (const file of files) {
        const filePath = resolve(distDir, file)
        const content = readFileSync(filePath, "utf-8")
        if (!content.startsWith("'use client'")) {
          writeFileSync(filePath, `'use client';\n${content}`)
        }
      }
    },
  }
}

function copyLayersCssPlugin(): Plugin {
  return {
    name: "copy-layers-css",
    closeBundle() {
      const distDir = resolve(__dirname, "dist")
      if (!existsSync(distDir)) return
      copyFileSync(resolve(__dirname, "src/layers.css"), resolve(distDir, "layers.css"))
    },
  }
}

const isLibBuild = !process.env.npm_lifecycle_event?.includes("storybook")

const plugins: Plugin[] = [
  react() as unknown as Plugin,
  ...(isLibBuild
    ? [
        injectUseClientPlugin(),
        copyLayersCssPlugin(),
        dts({
          include: ["src"],
          exclude: ["src/**/*.stories.*", "src/**/*.test.*"],
          rollupTypes: true,
        }) as unknown as Plugin,
      ]
    : []),
]

export default defineConfig({
  plugins,
  css: {
    postcss: "./postcss.config.cjs",
  },
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "tailwind-plugin": resolve(__dirname, "src/tailwind-plugin.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryAlias) =>
        `${entryAlias}.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss/plugin"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "styles.css",
      },
    },
    cssCodeSplit: false,
  },
})
