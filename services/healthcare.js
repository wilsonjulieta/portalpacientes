import { GET } from "./FETCH.JS";

export async function getHealthCareList(consultorioId, token) {

    let healthCareResponse;

    try {
        const response = await GET(consultorioId, token, "healthCare");

        if (response.status !== 200) //Si falla el login se va al catch directamente
            throw Error("")

        const data = await response.json();  //Si falla al pedir los datos del paciente va al catch

        healthCareResponse = { success: true, data };

    } catch (err) {
        healthCareResponse = { success: false, message: err.message }
    }

    return healthCareResponse;
}