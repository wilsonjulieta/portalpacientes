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

export function correctDate(dateString) {
    if (dateString) {
        const [month, day, year] = dateString.split((/[\/-]/gm));
        return `${year}-${month}-${day}`;
    }

    return dateString;
}

// Recibe string date de api, retorna nombre completo del dia
export function getFullNameOfDate(dateString, hour) {
    if (!dateString) return "";

    // Remove time part if exists
    const cleanDate = dateString.split('T')[0];
    const parts = cleanDate.split(/[\/-]/);
    
    let year, month, day;

    if (parts.length === 3) {
        if (parts[0].length === 4) {
            // YYYY-MM-DD
            year = parseInt(parts[0]);
            month = parseInt(parts[1]);
            day = parseInt(parts[2]);
        } else if (parts[2].length === 4) {
             // MM-DD-YYYY or DD-MM-YYYY
             const p0 = parseInt(parts[0]);
             const p1 = parseInt(parts[1]);
             
             if (p0 > 12) {
                 // DD-MM-YYYY
                 day = p0;
                 month = p1;
             } else {
                 // MM-DD-YYYY (Default legacy assumption)
                 month = p0;
                 day = p1;
             }
             year = parseInt(parts[2]);
        }
    }

    if (!year || !month || !day) {
         // Fallback to original behavior if parsing fails
         const correctedDate = correctDate(dateString);
         const dateObject = new Date(correctedDate);
         if (isNaN(dateObject.getTime())) return "";
         
         const m = (dateObject.getUTCMonth() + 1);
         return getDayOfWeekName(dateObject.getUTCDay()) + " " + dateObject.getUTCDate() + " de " + getMonthName(m) + " de " + dateObject.getUTCFullYear() + " | " + hour + "hs";
    }

    // Construct date object (Local time to avoid UTC shifts)
    const dateObject = new Date(year, month - 1, day);
    
    if (isNaN(dateObject.getTime())) {
         return "";
    }

    return getDayOfWeekName(dateObject.getDay()) + " " + dateObject.getDate() + " de " + getMonthName(dateObject.getMonth() + 1) + " de " + dateObject.getFullYear() + " | " + hour + "hs";
}