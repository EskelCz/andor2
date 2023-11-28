import sveltePreprocess from 'svelte-preprocess'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { ViteAliases } from 'vite-aliases'
import routify from '@roxi/routify/vite-plugin'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const file = fileURLToPath(new URL('package.json', import.meta.url))
const json = readFileSync(file, 'utf8')
const pkg = JSON.parse(json)

// https://vitejs.dev/config/
export default defineConfig({
  define: { '__APP_VERSION__': JSON.stringify(pkg.version) },
  plugins: [
    ViteAliases(),
    routify({
      ssr: {
        enable: true,
        prerender: true
      }
    }),
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: { hydratable: true }
    })
  ]
})
