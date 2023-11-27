
import { supabase } from '@lib/database'

export const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData()
  const provider = formData.get('provider')?.toString()

  if (provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: new URL(request.url).origin + '/api/auth/callback' }
    })

    if (error) {
      return new Response(error.message, { status: 500 })
    }

    return redirect(data.url)
  }
}