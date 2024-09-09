import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ваші аліаси, якщо вони є
    },
  },
  build: {
    // Додаткові налаштування, якщо потрібно
  },
});
