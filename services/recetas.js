import { GET } from "./FETCH.JS";

export async function getRecetas(consultorioId, token, patientId, healthCenterId) {
    let recetasResponse;

    try {
        const response = await GET(consultorioId, token, `Patients/${patientId}/recetas?healthCenterId=${healthCenterId}&type=prescription`);

        if (response.status !== 200) {
            if (response.headers.get("content-type")?.includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail || "Error al obtener recetas");
            } else {
                throw Error("Error al obtener recetas");
            }
        }

        const data = await response.json();
        recetasResponse = { success: true, data };

    } catch (err) {
        recetasResponse = { success: false, message: err.message };
    }

    return recetasResponse;
}
