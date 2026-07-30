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
    const filteredData = recetasResponse.data.filter(item => {
      // Aseguramos que la receta pertenezca al consultorioId actual
      if (item.healthCenterId) return String(item.healthCenterId) === String(consultorioId);
      if (item.center_id) return String(item.center_id) === String(consultorioId);
      if (item.consultorioId) return String(item.consultorioId) === String(consultorioId);
      return true; // Si no tiene propiedad, confiamos en el filtro del backend
    });

    recetasData = filteredData.map((item, index) => {
      // Safely handle medicamentos array
      let medArray = item.medicines || item.medicamentos || item["coleccion_de_medicamentos"] || item.coleccionDeMedicamentos;
      let medicamentosTexto = "Prescripción médica";
      if (Array.isArray(medArray)) {
        medicamentosTexto = medArray.map(m => m.text || m).join(", ");
      } else if (typeof medArray === "string") {
        medicamentosTexto = medArray;
      }

      // Format date
      let fechaFormat = "01/01/2026";
      const fechaBase = item.date || item.fecha;
      try {
        if (fechaBase) {
          if (typeof fechaBase === 'string' && fechaBase.includes('-')) {
            const parts = fechaBase.split('T')[0].split('-');
            if (parts.length === 3) {
              fechaFormat = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
          } else {
            const date = new Date(fechaBase);
            const dd = String(date.getDate()).padStart(2, '0');
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const yyyy = date.getFullYear();
            fechaFormat = `${dd}/${mm}/${yyyy}`;
          }
        }
      } catch (e) { }

      let medicoText = "Médico";
      let especialidadText = "-";
      if (item.doctor) {
        if (typeof item.doctor === 'string') {
          medicoText = item.doctor;
        } else {
          const docName = item.doctor.name || item.doctor.nombre || "";
          const docSurname = item.doctor.surname || item.doctor.apellido || "";
          medicoText = `${docName} ${docSurname}`.trim() || item.profesional || "Médico";
          especialidadText = item.doctor.specialty || item.doctor.especialidad || item.especialidad || "-";
        }
      } else {
        medicoText = item.profesional || "Médico";
        especialidadText = item.especialidad || "-";
      }

      let indicacionesText = item.diagnosis || "Ver PDF para más detalles";
      
      let estadoFormat = "Activa";
      if (item.status === "canceled") estadoFormat = "Vencida";
      if (item.status === "created") estadoFormat = "Activa";

      return {
        id: index,
        medicamento: medicamentosTexto,
        dosis: "-",
        indicaciones: indicacionesText,
        medico: medicoText,
        especialidad: especialidadText,
        fechaEmision: fechaFormat,
        fechaVencimiento: "-",
        estado: estadoFormat
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
