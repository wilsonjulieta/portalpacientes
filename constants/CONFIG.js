// Los nombres de los atributos e.j. icc, uro, lroldan, deben ir en minuscula para el correcto funcionamiento de la configuracion.

import THEMES from "./THEMES";

import icclogo from "assets/img/icclogo.png";
import lroldanlogo from "assets/img/lroldanlogo.png";
import setalogo from "assets/img/setalogo.png";

import urologo from "assets/img/urologo.png";

const logos = {
    "icc": icclogo,
    "uro": undefined,
    "comdp": undefined,
    "lroldan": lroldanlogo,
    "test": undefined,
    "seta": setalogo,
    "cic": undefined,
    "fade": undefined
}

const solicitarTurnoMessages = {
    "icc": "Los turnos que se obtienen son sólo para consulta y electrocardiograma, para otros estudios comunicarse telefónicamente.",
    "uro": "Los turnos que se obtienen son sólo para consulta, para otros estudios comunicarse telefónicamente.",
    "comdp": "",
    "lroldan": "",
    "test": "Mensaje de solicitar turno para test",
    "seta": "",
    "cic": "",
    "fade": ""
}


const consultoriosNameToId = {
    "icc": 1,
    "uro": 5,
    "comdp": 0,
    "lroldan":2,
    "test": 0,
    "seta": 3,
    "cic": "4",
    "fade": "6"
}

const consultoriosFullName = {
    "icc": "Instituto Clínico Cardiológico",
    "uro": "Unidad Urológica Mar del Plata",
    "comdp": "Centro Oftalmológico Mar del Plata",
    "lroldan": "Consultorio Psiquiatría",
    "test": "Instituto test",
    "seta": "Instituto SETA",
    "cic": "Centro Integral de Salud",
    "fade": "Centro Psicológico Psiquiátrico"
}

const pageTitles = {
    "icc": "Portal Pacientes ICC",
    "uro": "Portal Pacientes",
    "comdp": "Portal Pacientes",
    "lroldan": "Portal Pacientes",
    "test": "Portal De Testing",
    "seta": "Portal Pacientes",
    "cic": "Portal Pacientes",
    "fade": "Portal Pacientes"
}

const favIconRoutes = {
    "icc": "ICC.ico",
    "uro": "test.png",
    "comdp": "test.png",
    "lroldan": "test.png",
    "test": "test.png",
    "seta": "test.png",
    "cic": "test.png",
    "fade": "test.png"
}

/**
 * Para agregar links a pagina principal, si la hay, ejemplo: https://www.iccardiologico.com
 */
const mainPageLinks = {
    "icc": "https://www.iccardiologico.com",
    "uro": "https://unidadurologicamardelplata.com/",
    "comdp": "",
    "lroldan": "",
    "test": "",
    "seta": "https://institutoseta.com.ar/",
    "cic": "",
    "fade": ""
}


//TODO: AGREGAR TYC
const terms = {
    "icc": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,

    "lroldan": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,
  
    "seta": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,

    "cic": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,


    "test": new Array(5)
        .fill("\ntest tyc")
        .join(""),
}

export function getTheme(consultorioId) {
    return THEMES[consultoriosNameToId[consultorioId] ?? 0];
}

export function getMetaInfo(consultorioId) {
    consultorioId = consultorioId?.toLowerCase();

    return {
        consultorioFullName: consultoriosFullName[consultorioId],
        pageTitle: pageTitles[consultorioId],
        favIconRoute: favIconRoutes[consultorioId] ?? "test.png",
        terms: terms[consultorioId],
        mainPageLink: mainPageLinks[consultorioId],
        logo: logos[consultorioId],
        solicitarTurnoMessage: solicitarTurnoMessages[consultorioId]
    }
}