import { PUT } from "./FETCH.JS";

export async function patientsPut(consultorioId, token, putData) {

    let patientsPutResponse;

    putData = {...putData};
    
    try {
        putData.birthDate = new Date(putData.birthDate).toISOString().split(".")[0];
        const response = await PUT(consultorioId, token, `patients`, putData);
        console.log(response.headers.get("content-type"));
        
        if (response.status !== 201) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else 
                throw Error("");

        const data = await response.json();  //Si falla al pedir los datos va al catch

        patientsPutResponse = { success: true, data };

    } catch (err) {
        console.dir({err});
        patientsPutResponse = { success: false, message: err.message || "Error al cargar datos del usuario." }
    }

    return patientsPutResponse;
}