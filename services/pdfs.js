import { DELETE, GET, POST_FORMDATA } from "./FETCH.JS";

const url = "https://www.pdf995.com/samples/pdf.pdf"

export async function openPdfFromApi(consultorioId, token, idArchivo) {
    try {
      // Fetch the PDF from the API

      const response = await GET(consultorioId, token, "archivos/" + idArchivo);

      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }
  
      // Convert the response to a Blob
      const originalBlob = await response.blob();

      const pdfBlob = new Blob([originalBlob], { type: 'application/pdf' });  
      // Create a Blob URL for the PDF
      const pdfUrl = URL.createObjectURL(pdfBlob);
  
      // Use an anchor tag to trigger download/open, which avoids popup blockers on iOS
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = '_blank';
      link.download = `informe_${idArchivo || 'estudio'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      // Optional: Revoke the Blob URL after some time to free up memory
      setTimeout(() => {
        URL.revokeObjectURL(pdfUrl);
      }, 10000); // Adjust timeout as needed
    } catch (error) {
      console.error('Error fetching or opening PDF:', error);
    }
  }

export async function uploadArchivosFromPaciente(consultorioId, token, pacienteId, archivos) {
  try {
    if (pacienteId === undefined || pacienteId === null || pacienteId === "") {
      throw new Error("No se encontró el id del paciente.");
    }

    const relativeRoute =
      process.env.NEXT_PUBLIC_ARCHIVOS_UPLOAD_ROUTE || `patients/${pacienteId}/archivos`;
    const uploadField = process.env.NEXT_PUBLIC_ARCHIVOS_UPLOAD_FIELD || "file";

    const uploadOne = async (archivo) => {
      if (!archivo || typeof archivo.size === "number" && archivo.size === 0) {
        throw new Error("El archivo está vacío.");
      }

      const formData = new FormData();

      if (consultorioId !== undefined && consultorioId !== null && consultorioId !== "") {
        formData.append("consultorioId", String(consultorioId));
      }

      formData.append(uploadField, archivo, archivo.name);

      const response = await POST_FORMDATA(consultorioId, token, relativeRoute, formData);
      const contentType = response.headers.get("content-type") || "";

      if (!response.ok) {
        if (contentType.includes("application/json")) {
          const json = await response.json();
          throw new Error(json.detail || json.message || "Error al subir el archivo.");
        }
        throw new Error("Error al subir el archivo.");
      }

      return contentType.includes("application/json") ? await response.json() : null;
    };

    const results = [];
    for (const archivo of archivos) {
      results.push(await uploadOne(archivo));
    }

    return { success: true, data: results };
  } catch (err) {
    return { success: false, message: err.message || "Error al subir el archivo." };
  }
}

export async function getArchivosFromPaciente(consultorioId, token, pacienteId) {
  try {
    if (pacienteId === undefined || pacienteId === null || pacienteId === "") {
      throw new Error("No se encontró el id del paciente.");
    }

    const relativeRoute =
      process.env.NEXT_PUBLIC_ARCHIVOS_LIST_ROUTE || `patients/${pacienteId}/archivos`;

    const response = await GET(consultorioId, token, relativeRoute);
    const contentType = response.headers.get("content-type") || "";

    if (response.status === 404 || response.status === 204) {
      return { success: true, data: [] };
    }

    if (!response.ok) {
      if (contentType.includes("application/json")) {
        const json = await response.json();
        throw new Error(json.detail || json.message || "Error al obtener los archivos.");
      }
      throw new Error("Error al obtener los archivos.");
    }

    const data = contentType.includes("application/json") ? (await response.json()) : [];
    return { success: true, data: Array.isArray(data) ? data : [] };
  } catch (err) {
    return { success: false, message: err.message || "Error al obtener los archivos." };
  }
}

export async function deleteArchivoFromPaciente(consultorioId, token, pacienteId, archivoId) {
  try {
    if (pacienteId === undefined || pacienteId === null || pacienteId === "") {
      throw new Error("No se encontró el id del paciente.");
    }
    if (archivoId === undefined || archivoId === null || archivoId === "") {
      throw new Error("No se encontró el id del archivo.");
    }

    const relativeRoute =
      process.env.NEXT_PUBLIC_ARCHIVOS_DELETE_ROUTE ||
      `patients/${pacienteId}/archivos/${archivoId}`;

    const response = await DELETE(consultorioId, token, relativeRoute);
    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      if (contentType.includes("application/json")) {
        const json = await response.json();
        throw new Error(json.detail || json.message || "Error al eliminar el archivo.");
      }
      throw new Error("Error al eliminar el archivo.");
    }

    return { success: true };
  } catch (err) {
    return { success: false, message: err.message || "Error al eliminar el archivo." };
  }
}
  
