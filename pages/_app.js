/*!

=========================================================
* NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "assets/css/nextjs-material-dashboard.css?v=1.1.0";
import ThemeContextProvider from "../context/ThemeContextProvider";
import THEMES from "../constants/THEMES";
import UserContextProvider from "../context/UserContextProvider";

import nookies from 'nookies'
import { hideLoad, showLoad } from "../utils/loading";
import { getPatient } from "../services/userAuth";
import GLOBAL_GET_TOKEN from "../utils/token";
import MessageDialog from "../components/Dialogs/MessageDialog";
import MessageDialogContextProvider from "../context/MessageDialogContextProvider";

import '../styles/globals.css';

Router.events.on("routeChangeStart", (url) => {
  showLoad(url);
});
Router.events.on("routeChangeComplete", () => {
  hideLoad();
});
Router.events.on("routeChangeError", () => {
  hideLoad(); 
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }
  // GetInitialProps corre tanto en server al principio, como en cliente al cambiar de pagina. 
  // La logica requerida solo es requerida al correr del server al principio, por tanto no valido que corra desde el cliente.
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    let { consultorioId } = router.query;

    const cookies = nookies.get(ctx)

    // Setear o pedir id de consultorio
    if (consultorioId) {
      // Set
      nookies.set(ctx, 'consultorioId', consultorioId, {
        maxAge: 50 * 365 * 24 * 60 * 60,
        path: '/',
      })
    }
    else {
      consultorioId = cookies.consultorioId;
    }

    // Redirigir de admin si el usuario no esta logueado
    if (cookies.id === undefined && router.asPath.includes("admin") && typeof window === 'undefined') {
      ctx.res.writeHead(302, {
        Location: '/login/' + consultorioId,
        'Content-Type': 'text/html; charset=utf-8',
      });
      ctx.res.end();
    }

    // Setear si existe, el usuario que ya esta logueado
    let initUser;
    if (cookies.id !== undefined && Number(cookies.loginTries ?? 0) <= 2 && typeof window === 'undefined' && !router.asPath.includes("server-error")) {
      try {
        const { id, token } = { id: cookies.id, token: await GLOBAL_GET_TOKEN(ctx) };

        console.log({ id, consultorioId, token });

        let patientResponse = await getPatient(id, consultorioId, token);

        console.log({ patientResponse });

        if (!patientResponse.success) {
          throw Error("");
        }

        initUser = patientResponse.data;

        if (!router.asPath.includes("admin") && !router.asPath.includes("testing")) {
          ctx.res.writeHead(302, {
            Location: '/admin/' + consultorioId + "/dashboard",
            'Content-Type': 'text/html; charset=utf-8',
          });
          ctx.res.end();
          // ctx.res.finished = true;
        }
      } catch (error) {
        nookies.set(ctx, 'loginTries', (Number(cookies.loginTries ?? 0)) + 1, {
          maxAge: 60,
          path: '/',
        })
        if (Number(cookies.loginTries) === 2) {
          nookies.destroy(ctx, "id", {
            path: "/"
          });
          nookies.destroy(ctx, "dni", {
            path: "/"
          });
          nookies.destroy(ctx, "loginTries", {
            path: "/"
          });
        }

        ctx.res.writeHead(302, {
          Location: '/login/' + consultorioId + "/server-error",
          'Content-Type': 'text/html; charset=utf-8',
        });
        ctx.res.end();
        // ctx.res.finished = true;



      }
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, consultorioId, initUser };
  }
  render() {
    const { Component, pageProps, consultorioId, initUser } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <ThemeContextProvider theme={THEMES[consultorioId - 1]}>
        <UserContextProvider initUser={{ ...initUser, consultorioId }}>
          <React.Fragment>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>NextJS Material Dashboard by Creative Tim</title>
              <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
            </Head>
            <Layout>
              <MessageDialogContextProvider>
                <Component {...pageProps} />
              </MessageDialogContextProvider>
            </Layout>
          </React.Fragment>
        </UserContextProvider>
      </ThemeContextProvider>
    );
  }
}
