import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "path"
import { readdirSync, readFileSync, writeFileSync } from "fs"

function injectUseClientPlugin(): Plugin {
  return {
    name: "inject-use-client",
    closeBundle() {
      const distDir = resolve(__dirname, "dist")
      const files = readdirSync(distDir).filter(
        (f) => f.endsWith(".js") || f.endsWith(".mjs"),
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

const plugins: Plugin[] = [
  react() as unknown as Plugin,
  injectUseClientPlugin(),
  dts({
    include: ["src"],
    exclude: ["src/**/*.stories.*", "src/**/*.test.*"],
    rollupTypes: true,
  }) as unknown as Plugin,
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
      entry: resolve(__dirname, "src/index.ts"),
      name: "@moyeorak/design-system",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "style.css",
      },
    },
    cssCodeSplit: false,
  },
})
