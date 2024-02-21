//Formato estandar de dd/mm/yy
export function dayMonthYear(apiDate) {
    const date = new Date(apiDate);

    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

/* Recibe MM-DD-YYYY, retorna DD/MM */
export function fullDateToDayMonth(dateString) {
    const dateObject = new Date(dateString);

    const date = dateObject.getDate() > 9 ? dateObject.getDate() : "0" + dateObject.getDate();
    const month = (dateObject.getMonth() + 1) > 9 ? (dateObject.getMonth() + 1) : "0" + (dateObject.getMonth() + 1);

    return date + "/" + month;
}

// Recibe numero de 1 a 12, retorna nombre
export function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1: return "Enero"
        case 2: return "Febrero"
        case 3: return "Marzo"
        case 4: return "Abril"
        case 5: return "Mayo"
        case 6: return "Junio"
        case 7: return "Julio"
        case 8: return "Agosto"
        case 9: return "Septiembre"
        case 10: return "Octubre"
        case 11: return "Noviembre"
        case 12: return "Diciembre"
    }
    return "";
}

export function getDayOfWeekName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Domingo"
        case 1: return "Lunes"
        case 2: return "Martes"
        case 3: return "Miércoles"
        case 4: return "Jueves"
        case 5: return "Viernes"
        case 6: return "Sábado"
    }
    return "";
}

// Recibe string date de api, retorna nombre completo del dia
export function getFullNameOfDate(dateString, hour) {
    const dateObject = new Date(dateString);

    const date = dateObject.getDate() > 9 ? dateObject.getDate() : "0" + dateObject.getDate();
    const month = (dateObject.getMonth() + 1);

    return getDayOfWeekName(dateObject.getDay()) + " " + dateObject.getDate() + " de " + getMonthName(month) + " de " + dateObject.getFullYear() + " | " + hour + "hs";
}