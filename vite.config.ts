import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { readdirSync, readFileSync, writeFileSync } from "fs";

/**
 * Injects 'use client' directive at the top of all JS output files.
 * Required for Next.js App Router compatibility — marks components as Client Components.
 */
function injectUseClientPlugin() {
  return {
    name: "inject-use-client",
    closeBundle() {
      const distDir = resolve(__dirname, "dist");
      const files = readdirSync(distDir).filter(
        (f) => f.endsWith(".js") || f.endsWith(".mjs"),
      );
      for (const file of files) {
        const filePath = resolve(distDir, file);
        const content = readFileSync(filePath, "utf-8");
        if (!content.startsWith("'use client'")) {
          writeFileSync(filePath, `'use client';\n${content}`);
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    injectUseClientPlugin(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.stories.*", "src/**/*.test.*"],
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "moyeorak-ui",
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
});
