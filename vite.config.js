import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
        artist_page: "./athletes/index.html",
      },
    },
  },
});
