import { DELETE } from "./FETCH.JS";
import { POST } from "./FETCH.JS";
import { GET } from "./FETCH.JS";

export async function getNextTurns(patientId, consultorioId, token) {

    let nextTurnsResponse;

    try {
        const response = await GET(consultorioId, token, "turns/next?patientId=" + patientId);

        if (response.status !== 200) //Si falla se va al catch directamente
            throw Error("")

        const data = await response.json();  //Si falla al pedir los datos va al catch

        nextTurnsResponse = { success: true, data };

    } catch (err) {
        nextTurnsResponse = { success: false, message: err.message }
    }

    return nextTurnsResponse;
}

export async function getProfessionals(consultorioId, token) {

    let professionalsResponse;

    try {

        console.log({ token });
        const response = await GET(consultorioId, token, "professionals");

        console.log(response);

        if (response.status !== 200) //Si falla se va al catch directamente
            throw Error("")

        const data = await response.json();  //Si falla al pedir los datos va al catch

        professionalsResponse = { success: true, data };

    } catch (err) {
        professionalsResponse = { success: false, message: err.message }
    }

    return professionalsResponse;
}

export async function getEspecialidades(consultorioId, token) {

    let especialidadesResponse;

    try {

        console.log({ token });
        const response = await GET(consultorioId, token, "especialidades");

        console.log(response);

        if (response.status !== 200) //Si falla se va al catch directamente
            throw Error("")

        const data = await response.json();  //Si falla al pedir los datos va al catch

        especialidadesResponse = { success: true, data };

    } catch (err) {
        especialidadesResponse = { success: false, message: err.message }
    }

    return especialidadesResponse;
}

export async function getSucursales(consultorioId, token) {

    let sucursalesResponse;

    try {

        console.log({ token });
        const response = await GET(consultorioId, token, "sucursales");

        console.log(response);

        if (response.status !== 200) //Si falla se va al catch directamente
            throw Error("")

        const data = await response.json();  //Si falla al pedir los datos va al catch

        sucursalesResponse = { success: true, data };

    } catch (err) {
        sucursalesResponse = { success: false, message: err.message }
    }

    return sucursalesResponse;
}

export async function getAvailableTurns(consultorioId, token, sucursalId, especialidadId, profesionalId, patientId) {

    let turnsResponse;

    try {
        const response = await GET(consultorioId, token, `turns/available?sucursalId=${sucursalId}&especialidadId=${especialidadId}&profesionalId=${profesionalId}&pacienteId=${patientId}`);

        if (response.status !== 200) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else 
                throw Error("");

        const data = await response.json();  //Si falla al pedir los datos va al catch

        turnsResponse = { success: true, data };

    } catch (err) {
        turnsResponse = { success: false, message: err.message }
    }

    return turnsResponse;
}

export async function requestTurn(consultorioId, token, {fecha, hora, patienteId: pacienteId, horarioId}) {

    let turnsResponse;

    console.log({ fecha, hora, patienteId: pacienteId, horarioId});

    
    try {
        const response = await POST(consultorioId, token, `turns`, { fecha, hora, pacienteId, horarioId});
        console.log(response.headers.get("content-type"));
        
        if (response.status !== 200) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else 
                throw Error("");

        const data = await response.json();  //Si falla al pedir los datos va al catch

        turnsResponse = { success: true, data };

    } catch (err) {
        console.dir({err});
        turnsResponse = { success: false, message: err.message }
    }

    return turnsResponse;
}

export async function cancelTurn(consultorioId, token, turnId) {

    let turnsResponse;
    
    try {
        const response = await DELETE(consultorioId, token, `turns/` + turnId);
        console.log(response.headers.get("content-type"));
        
        if (response.status !== 200) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else 
                throw Error("");

        const data = await response.json();  //Si falla al pedir los datos va al catch

        turnsResponse = { success: true, data };

    } catch (err) {
        console.dir({err});
        turnsResponse = { success: false, message: err.message }
    }

    return turnsResponse;
}

export async function getTurnsHistory(consultorioId, token, patientId) {

    let turnsResponse;
    
    try {
        const response = await GET(consultorioId, token, "turns?patientId=" + patientId);
        console.log(response.headers.get("content-type"));
        
        if (response.status !== 200) //Si falla se va al catch directamente
            if (response.headers.get("content-type").includes("application/json")) {
                const json = await response.json();
                throw Error(json.detail);
            }
            else 
                throw Error("");

        const data = await response.json();  //Si falla al pedir los datos va al catch

        turnsResponse = { success: true, data: data.filter(turn => turn.estado !== "Pendiente") };

    } catch (err) {
        console.dir({err});
        turnsResponse = { success: false, message: err.message }
    }

    return turnsResponse;
}