/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import crossOriginIsolation from "vite-plugin-cross-origin-isolation"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [crossOriginIsolation(), react()],
	esbuild: {
		jsxInject: "import React from 'react'",
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTest.ts",
		css: true,
	},
})
