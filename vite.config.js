import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // relative asset paths so the built site works in any folder or subpath
  server: { host: "127.0.0.1", port: 5180, strictPort: true },
});
