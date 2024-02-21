import URL from "../constants/URL";
import { POST } from "./FETCH.JS";
import { getToken } from "./FETCH.JS";
import { GET } from "./FETCH.JS";

export async function logIn(tipodoc, username, password, consultorioId) {
    let loginResponse;

    try {
        const token = await getToken(); //Si no hay token se va al catch directamente

        const response = await POST(consultorioId, token, "patients/login",
            {
                tipodoc: Number(tipodoc),
                dni: Number(username),
                password,
                email: ""
            }
        );

        if (response.status !== 200) //Si falla el login se va al catch directamente
            throw Error("Ocurrió un error en el servidor. Intente nuevamente.");

        const data = await response.json();  //Si falla al pedir los datos del paciente va al catch

        if (data.registrado === false) {
            throw Error("Sus datos están cargados pero no se encuentra registrado. Ingrese a \"registrarse\".");
        }

        if (data.id === 0) {
            throw Error("Nombre de usuario o contraseña incorrectos");
        }

        loginResponse = { loggedIn: true, data, token };


    } catch (err) {
        loginResponse = { loggedIn: false, message: err.message }
    }

    console.dir({loginResponse});

    return loginResponse;

}

export async function getPatient(id, consultorioId, token) {
    let patientResponse;

    try {
        const r3 = await GET(consultorioId, token, "patients/" + id);

        if (r3.status != 200) {
            throw new Error();
        }

        const data = await r3.json() //Si falla al pedir los datos del paciente va al catch

        patientResponse = { success: true, data }; 

    } catch (err) {
        patientResponse = { success: false }
    }

    return patientResponse;

}

