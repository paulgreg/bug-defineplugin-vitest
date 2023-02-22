import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: {
      __BROWSER__: true,
    },
  },
});
