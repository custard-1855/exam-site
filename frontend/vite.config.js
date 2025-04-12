// import { resolve } from "node:path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// // https://vitejs.dev/config/
// export default defineConfig({
// 	base: "./",
// 	root: "src",
// 	plugins: [react()],
// 	publicDir: resolve(__dirname, "public"),
// 	build: {
// 		// distフォルダに出力
// 		outDir: resolve(__dirname, "dist"),
// 		// 存在しないときはフォルダを作成する
// 		emptyOutDir: true,
// 		copyPublicDir: true,
// 		rollupOptions: {
// 			// entry pointがあるindex.htmlのパス
// 			input: {
// 				"": resolve(__dirname, "src/index.html"),
// 			},
// 			// bundle.jsを差し替えする
// 			output: {
// 				entryFileNames: "assets/bundle.js",
// 			},
// 		},
// 	},
// });


/*
(exam-site) takehonshion@Custard frontend % npm audit
# npm audit report

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix --force`
Will install vite@6.2.6, which is a breaking change
node_modules/esbuild
  vite  0.11.0 - 6.1.5
  Depends on vulnerable versions of esbuild
  node_modules/vite

2 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force
*/