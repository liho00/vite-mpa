import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

console.log(resolve(__dirname, "src/pages/main/index.html"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/pages/main/index.html"),
        nested: resolve(__dirname, "src/pages/nested/index.html"),
      },
    },
  },
  server: {
    open: true,
  },
});
