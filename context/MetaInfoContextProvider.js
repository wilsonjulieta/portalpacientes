import Head from "next/head";
import { createContext, } from "react";

export const MetaInfoContext = createContext(null);

/* icon: "message" : "warning" */
export default function MetaInfoContextProvider({ children, metaInfo }) {
    console.log(metaInfo);

    return (
        <MetaInfoContext.Provider value={{ metaInfo }}>
            <Head>
                <title>{metaInfo.pageTitle}</title>
                <link rel="icon" href={require("assets/img/favicons/" + metaInfo.favIconRoute)} />
            </Head>
            {children}
        </MetaInfoContext.Provider>
    );
}