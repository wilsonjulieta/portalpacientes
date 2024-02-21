import { useEffect } from "react";
import getURL from "../../constants/URL";
import { useState } from "react";
import { getToken } from "../../services/FETCH.JS";
import { getPatient } from "../../services/userAuth";
import { validate } from "../../services/register";
import { cancelTurn, getAvailableTurns, getNextTurns, getProfessionals, getTurnsHistory } from "../../services/turns";

export default function Test() {
    const [state, setState] = useState();

    useEffect(() => {
        async function func() {
            const token = await getToken(2);
    
            // const patientResponse = await getPatient(1, 7, token);
            // const patientResponse = await validate(1, 41458675, "", "", token, 7);
            // const patientResponse = await getNextTurns(200, 7, token);
            // const patientResponse = await getProfessionals(7, token);
            const patientResponse = await getTurnsHistory(7, token, 117700);

            console.log(patientResponse);
    
            setState(patientResponse.data);
        }

        func();
    }, [])

    console.log(state);

    return JSON.stringify(state) ?? null;
}