export async function getServerSideProps(context) {
  const { consultorioId } = context.query;
  const cookies = nookies.get(context);

  if (!cookies.id) {
    return {
      redirect: {
        destination: "/login/" + consultorioId,
        permanent: false,
      },
    };
  }

  if (cookies.archivos_habilitado !== undefined && cookies.archivos_habilitado !== "1") {
    return {
      redirect: {
        destination: "/admin/" + consultorioId + "/dashboard",
        permanent: false,
      },
    };
  }

  return { props: { consultorioId } };
}

import React from "react";
import Admin from "layouts/Admin.js";
import GridContainer from "components/Grid/GridContainer.js";
import nookies from "nookies";
import Archivos from "../../../components/Archivos/Archivos";

function ArchivosPage({ consultorioId }) {
  return (
    <GridContainer style={{ marginBottom: "50px" }}>
      <Archivos xs={12} sm={12} md={12} lg={12} xl={12} consultorioId={consultorioId} />
    </GridContainer>
  );
}

ArchivosPage.layout = Admin;

export default ArchivosPage;
