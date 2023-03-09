/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/Media-Suite/",
	esbuild: {
		jsxInject: "import React from 'react'",
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTest.ts",
		css: true,
	},
	server: {
		headers: {
			"Cross-Origin-Embedder-Policy": "require-corp",
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Resource-Policy": "same-origin",
		},
	},
})
