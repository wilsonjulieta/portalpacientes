import THEMES from "./THEMES";

const consultoriosNameToId = {
    "ICC": 0,
    "1": 0,
    "URO":2,
    "TEST": 4
}

const consultoriosFullName = {
    "ICC": "Instituto Clínico Cardiológico",
    "URO": "Unidad Urológica MDP",
    "TEST": "Instituto test"
}


const pageTitles = {
    "ICC": "Portal Pacientes ICC",
    "URO": "Portal Pacientes Unidad Urologica",
    "TEST": "Portal De Testing"
} 

const favIconRoutes = {
    "ICC": "ICC.ico",
    "URO": "URO.ico",
    "TEST": "test.png"
}

export function getTheme(consultorioId) {
    return THEMES[consultoriosNameToId[consultorioId.toUpperCase()] ?? 0];
}

export function getMetaInfo(consultorioId) {
    consultorioId = consultorioId.toUpperCase();

    return {
        consultorioFullName: consultoriosFullName[consultorioId],
        pageTitle: pageTitles[consultorioId],
        favIconRoute: favIconRoutes[consultorioId] ?? "test.png"
    }
}