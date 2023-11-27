
import { createClient } from '@supabase/supabase-js'

console.log('import.meta.env.MODE', import.meta.env.MODE)
console.log('import.meta.env.SUPABASE_URL', import.meta.env.SUPABASE_URL)
console.log('import.meta.env.SUPABASE_ANON_KEY', import.meta.env.SUPABASE_ANON_KEY)

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  { auth: { flowType: 'pkce' } }
)
