import nookies, { parseCookies } from 'nookies'
import { getToken } from '../services/FETCH.JS';

// Si el token esta seteado, lo devuelve dependiendo el contexto (En session desde el cliente, en cookies desde el servidor.)
export default async function GLOBAL_GET_TOKEN(ctx) {
    if (typeof window !== "undefined") {
        // Client-side-only code
        const cookies = parseCookies();

        return cookies.token;
    }
    else {
        // Server-side-only code
        // throw Error();
        const cookies = nookies.get(ctx);

        try {
            const token = await getToken(cookies.consultorioId);
            nookies.set(ctx, 'token', token, {
                maxAge: 24 * 60 * 60,
                path: '/',
            })

            return token;
        } catch (error) {
            return "";
        }

    }
}