import { GET } from "./FETCH.JS";

export async function getEstudios(consultorioId, token, patientId) {

    let estudiosResponse;



    try {
        const response = await GET(consultorioId, token, `estudios?patientId=${patientId}`);

        if (response.status !== 200) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else 
                throw Error("");

        const data = await response.json();  //Si falla al pedir los datos va al catch

        estudiosResponse = { success: true, data };

        console.log(data);
        

    } catch (err) {
        estudiosResponse = { success: false, message: err.message }
    }

    return estudiosResponse;
}
