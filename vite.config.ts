/*eslint-disable import/no-extraneous-dependencies*/
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { UserConfig } from 'vite';
import react from "@vitejs/plugin-react";

interface Config extends UserConfig {
  test: {
    globals: boolean;
    environment: string;
    setupFiles: string[];
  }
}

export default {
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
} as Config;


