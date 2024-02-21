export const USER_STATUS_TYPE = {
    "EXISTE": 1,
    "YA REGISTRADO": 2,
    "NO COINCIDE": 3,
    "NO EXISTE": 4
}

export const USER_STATUS_MESSAGE = {
    [USER_STATUS_TYPE["NO COINCIDE"]]: "Usted esta cargado en el sistema pero el celular que envió no coincide. Si el celular es correcto, comuniquese con el centro para solucionar el error.",
    [USER_STATUS_TYPE["YA REGISTRADO"]]: "Usted ya se encuentra registrado, ingrese con sus credenciales o pida un cambio de contraseña si no puede ingresar.",
    "OTP ERROR": "Usted ha solicitado registro demasiadas veces, comuniquese con el centro para solucionar el error"
}
