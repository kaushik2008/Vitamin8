import { supabase } from '../../../../lib/supabase';

export async function GET(request) {
  // Use the token from the request if the client sent one
  const token = request.headers.get('authorization')?.replace('Bearer ', '');

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return Response.json({ error: 'Not authenticated' }, { status: 401 });
  }

  return Response.json({ data }, { status: 200 });
}