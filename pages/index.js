import React from "react";
import Router from "next/router";

import nookies from 'nookies';

export async function getServerSideProps(ctx) {
  // Parse
  const cookies = nookies.get(ctx);

  if (cookies.consultorioId) {
    return {
      redirect: {
        statusCode: 302, // 301 for permanent redirect, 302 for temporary
        destination: '/login/' + cookies.consultorioId, // the URL you want to redirect to
      },
    };
  }
  else {
    return {
      redirect: {
        statusCode: 302, // 301 for permanent redirect, 302 for temporary
        destination: '/consultorioNotFound', // the URL you want to redirect to
      },
    };
  }
}

export default function Index() {

  return <div />;
}
