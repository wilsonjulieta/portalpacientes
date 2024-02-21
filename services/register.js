import { POST } from "./FETCH.JS";

export async function validate(tipodoc, dni, mail, celular, consultorioId, token) {
    let validateResponse;

    try {
        const response = await POST(consultorioId, token, "patients/validate", { tipodoc, dni, email: mail, celular });

        if (response.status !== 200) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else
                throw Error("");

        validateResponse = { success: true, data: await response.json() }; //Si falla al pedir los datos del paciente va al catch

    } catch (err) {
        validateResponse = { success: false }
    }

    return validateResponse;

}

export async function validateOTP(id, otp, consultorioId, token) {
    let validateResponse;

    try {
        const response = await POST(consultorioId, token, "patients/validateOTP", { id, otp });

        if (response.status !== 200) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else
                throw Error("");

        validateResponse = { success: true, data: await response.json() }; //Si falla al pedir los datos del paciente va al catch

    } catch (err) {
        validateResponse = { success: false }
    }

    return validateResponse;

}