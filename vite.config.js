import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
        artist_page: "./athletes/index.html",
        contact_page: "./contact/index.html",
        register_summary: "./register/register-summary.html",
      },
    },
  },
});
