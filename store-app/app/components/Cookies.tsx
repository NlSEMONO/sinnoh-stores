const HOST = 'https://fmadarang.com'

function setSessionCookie(cookie: string) {
    const NUM_DAYS = 7;

    let date = new Date();
    date.setTime(date.getTime() + (NUM_DAYS * 24 * 60 * 60 * 1000));
    document.cookie = `session=${cookie};expires=${date.toUTCString()};path=/`;
}

export function getSession() {
    let cookies = decodeURIComponent(document.cookie).split(';');
    let session = '';
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].includes('session')) {
            if (session === '') session = cookies[i].split('=')[1];
        }
    }
    return session;
}

export async function setSession() {
    let session = getSession();
    if (session === '') {
        let data = await fetch(`${HOST}/sinnoh-stores/new-session`).then(res => res.json());
        let cookie = await data.session;
        setSessionCookie(await cookie);
        return await data.session;
    }
    return session;
}

export async function getSessionData() {
    let session = getSession();
    let data = await fetch(`${HOST}/sinnoh-stores/get-session-data`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({session: session})
    }).then(res => res.json());
    data = await data.inventory;
    return await data;
}