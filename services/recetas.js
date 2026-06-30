import { GET } from "./FETCH.JS";

export async function getRecetas(consultorioId, token, dnipaciente) {
    let recetasResponse;

    try {
        const response = await GET(consultorioId, token, `Patients/${dnipaciente}/recetas?healthCenterId=${consultorioId}&type=prescription`);

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
