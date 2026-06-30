import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Recetas from "../../../components/Recetas/Recetas";
import nookies from 'nookies';
import GLOBAL_GET_TOKEN from "../../../utils/token";
import { getPatient } from "../../../services/userAuth";
import { getRecetas } from "../../../services/recetas";

export async function getServerSideProps(context) {
  const { consultorioId } = context.query;
  const cookies = nookies.get(context);
  const token = await GLOBAL_GET_TOKEN(context);

  const patientResponse = await getPatient(cookies.id, consultorioId, token);
  if (!patientResponse.success) {
    return {
      redirect: {
        destination: '/login/' + consultorioId + "/server-error",
        permanent: false,
      },
    };
  }

  const dni = patientResponse.data.dni;
  const recetasResponse = await getRecetas(consultorioId, token, dni);

  let recetasData = [];
  if (recetasResponse.success && Array.isArray(recetasResponse.data)) {
    recetasData = recetasResponse.data.map((item, index) => {
      // Safely handle medicamentos array
      let medArray = item.medicines || item.medicamentos || item["coleccion_de_medicamentos"] || item.coleccionDeMedicamentos;
      let medicamentosTexto = "Prescripción médica";
      if (Array.isArray(medArray)) {
        medicamentosTexto = medArray.join(", ");
      } else if (typeof medArray === "string") {
        medicamentosTexto = medArray;
      }

      // Format date
      let fechaFormat = "01/01/2026";
      const fechaBase = item.date || item.fecha;
      try {
        if (fechaBase) {
          const date = new Date(fechaBase);
          const dd = String(date.getDate()).padStart(2, '0');
          const mm = String(date.getMonth() + 1).padStart(2, '0');
          const yyyy = date.getFullYear();
          fechaFormat = `${dd}/${mm}/${yyyy}`;
        }
      } catch (e) { }

      let medicoText = "Médico";
      let especialidadText = "-";
      if (item.doctor) {
        if (typeof item.doctor === 'string') {
          medicoText = item.doctor;
        } else {
          medicoText = item.doctor.name || item.doctor.nombre || item.profesional || "Médico";
          especialidadText = item.doctor.specialty || item.doctor.especialidad || item.especialidad || "-";
        }
      } else {
        medicoText = item.profesional || "Médico";
        especialidadText = item.especialidad || "-";
      }

      let indicacionesText = item.diagnosis || "Ver PDF para más detalles";

      return {
        id: index,
        medicamento: medicamentosTexto,
        dosis: "-",
        indicaciones: indicacionesText,
        medico: medicoText,
        especialidad: especialidadText,
        fechaEmision: fechaFormat,
        fechaVencimiento: "-",
        estado: "Activa"
      };
    });
  }

  return {
    props: {
      consultorioId,
      recetas: recetasData
    }
  };
}

function RecetasPage({ recetas }) {
  return (
    <div>
      <GridContainer style={{ marginBottom: "50px" }}>
        <Recetas
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          recetas={recetas}
        />
      </GridContainer>
    </div>
  );
}

RecetasPage.layout = Admin;

export default RecetasPage;
