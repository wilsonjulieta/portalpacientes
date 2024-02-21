import { destroyCookie } from "nookies";

export async function serverSidePropsAuth() {
    // Fetch data from external API
    // const res = await fetch(`https://rickandmortyapi.com/api/character`)
    // const data = await res.json()

    const withSession = true;

    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(35);
        }, 0)
    })

    if (withSession)
        return { props: { data } }
    else
        return {
            redirect: {
                permanent: false,
                destination: "/page",
            },
            props: {},
        };
}

export function logout(router) {
    destroyCookie(null, "id", {path: "/"});
    destroyCookie(null, "dni", {path: "/"});
    sessionStorage.clear();
    router.push("/");
}