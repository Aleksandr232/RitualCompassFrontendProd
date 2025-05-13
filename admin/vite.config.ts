import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "admin-app",
      filename: "remoteEntry.js",
      exposes: {
        "./AdminApp": "./src/App.tsx",
        "./AdminRoutes": "./src/routes.tsx",
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
    port: 5002,
  },
});
