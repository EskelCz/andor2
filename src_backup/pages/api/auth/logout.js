
import { supabase } from '@lib/database'

export const GET = async ({ cookies, redirect }) => {
  const { error } = await supabase.auth.signOut()
  cookies.delete('sb-access-token', { path: '/' })
  cookies.delete('sb-refresh-token', { path: '/' })
  return redirect('/')
}
