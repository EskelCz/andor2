import { loadEnv } from 'vite'
import Google from '@auth/core/providers/google'

const env = loadEnv('all', process.cwd(), '')
 
export default {
  secret: env.AUTH_SECRET,
  providers: [
    Google({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET
    })
  ]
}