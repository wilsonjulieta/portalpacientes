export default function getURL(consultorioId) {
    console.log(consultorioId);

    switch (consultorioId?.toLowerCase()) {
        case 'uro':
             return "https://cuumdp.ddns.net:9005/v1/";
        case 'icc':
            return "https://iccmdp.ddns.net:8889/v1/";
        case 'test':
            return "http://localhost:5000/v1/";
        case 'lroldan':
             return "https://saluddigital.ddns.net:9001/v1/"; 
        case 'seta':
                return "https://institutoseta.ddns.net:9003/v1/"; 
        case 'cic':
                return "https://cicbalcarce.dyndns.org:17001/v1/"; 
        case 'fade':
                return "https://fademdp.ddns.net:9001/v1/"; 
        default:
            console.warn(`ConsultorioID desconocido: ${consultorioId}`);
            return "https://default-url.com/v1/"; // Cambia esto por la URL por defecto que necesites
    }
}