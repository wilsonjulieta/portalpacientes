import { useEffect, useState } from "react";

export default function usePasswordConfirmation(newPassword1, newPassword2) {
    const [min6, setMin6] = useState(false);
    const [min1Upper, setMin1Upper] = useState(false);
    const [min1Lower, setMin1Lower] = useState(false);
    const [min1Number, setMin1Number] = useState(false);
    const [equal, setEqual] = useState(false);

    useEffect(() => {
        setMin6(newPassword1 !== null && newPassword1.length >= 6)
        setMin1Upper(newPassword1 !== null && newPassword1.toLowerCase() !== newPassword1)
        setMin1Lower(newPassword1 !== null && newPassword1.toUpperCase() !== newPassword1)
        setMin1Number(/\d/.test(newPassword1))
    }, [newPassword1])

    useEffect(() => {
        setEqual(newPassword1 === newPassword2 && newPassword1 !== '' && newPassword2 !== '');
    }, [newPassword1, newPassword2])

    return {
        min6,
        min1Upper,
        min1Lower,
        min1Number,
        equal,
        passwordValid: min6 && min1Lower && min1Upper && min1Number && equal
    }
}