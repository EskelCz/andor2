import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import auth from 'auth-astro'
import vercel from '@astrojs/vercel/serverless'
import Google from '@auth/core/providers/google'

const env = loadEnv('', process.cwd(), '')

// https://astro.build/config

export default defineConfig({
  vite: {
    base: '/'
  },
  integrations: [
    auth({
      secret: env.AUTH_SECRET,
      providers: [
        Google({
          clientId: env.GOOGLE_ID,
          clientSecret: env.GOOGLE_SECRET
        })
      ]
    })
  ],
  output: 'server',
  adapter: vercel()
})