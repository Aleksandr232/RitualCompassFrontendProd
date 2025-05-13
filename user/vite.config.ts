import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "user-app",
      filename: "remoteEntry.js",
      exposes: {
        "./UserApp": "./src/App.tsx",
        "./UserRoutes": "./src/routes.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom", "@ritual/shared"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
  server: {
    port: 5001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    port: 5001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
