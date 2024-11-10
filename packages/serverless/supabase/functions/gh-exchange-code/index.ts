// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/gh-exchange-code' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/

Deno.serve(async (req) => {
  const { code } = await req.json()
  const clientId = Deno.env.get("GITHUB_CLIENT_ID");
  const clientSecret = Deno.env.get("GITHUB_CLIENT_SECRET");
  if (clientId == null || clientSecret == null)
    return new Response(JSON.stringify({title: "Missing GitHub clientId or clientSecret", status: 400}), {status: 400});
  const tokenUrl = `https://github.com/login/oauth/access_token`;
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      clientId,
      clientSecret,
      code
    })
  });
  if (!response.ok) 
    return new Response(JSON.stringify({status: 500, title: "Something went wrong."}), {status: 500});
  const {access_token} = await response.json();
  return new Response(
    JSON.stringify({access_token}),
    {headers: {"Content-Type": "application/json"}, status: 201}
  )
})
