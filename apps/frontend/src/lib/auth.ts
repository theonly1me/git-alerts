export function authenticate() {
    const state = Math.random().toString(36).substring(7);

    chrome.storage.local.set({auth_state: state}, () => {
        const redirectUri = chrome.identity.getRedirectURL("callback");
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${import.meta.env["VITE_GITHUB_CLIENT_ID"]}&redirect_uri${encodeURIComponent(redirectUri)}&state=${state}`;
        chrome.identity.launchWebAuthFlow(
            {
                url: authUrl,
                interactive: true
            },
            redirectUri => {
                if (chrome.runtime.lastError != null || redirectUri == null) 
                    throw Error(chrome.runtime.lastError?.message);
                const params = new URL(redirectUri).searchParams;
                const code = params.get("code");
                const returnedState = params.get("state");
                chrome.storage.local.get("auth_state", async (result) => {
                    if (result["auth_state"] === returnedState) {
                        const response = await fetch(import.meta.env["VITE_SERVERLESS_URL"], {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({code}),
                        });
                        const data: { access_token: string } = await response.json();
                        chrome.storage.local.set({access_token: data.access_token});
                    }
                    else
                        throw Error("State mismatch during OAuth");
                });
            }
        )
    })
}