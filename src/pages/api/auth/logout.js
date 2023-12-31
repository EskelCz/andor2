
export const GET = async ({ request, cookies, redirect, locals }) => {
  const { error } = await locals.supabase.auth.signOut()
  if (error) { return new Response(error.message, { status: 500 }) }
  cookies.delete('sb-access-token')
  cookies.delete('sb-refresh-token')
  return redirect('/')
}
