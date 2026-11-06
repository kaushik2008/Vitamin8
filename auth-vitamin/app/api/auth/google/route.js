import { supabase } from '../../../../lib/supabase';

export async function GET(request) {
  const origin = new URL(request.url).origin; // e.g. http://localhost:3000

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/`, // where Google sends the user after login
    },
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.redirect(data.url);
}