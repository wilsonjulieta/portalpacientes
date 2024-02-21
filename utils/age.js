export function calculateAge(birthDateString) {
    try {
        const birthDate = new Date(birthDateString);
        const today = new Date();

        let diff = today.getFullYear() - birthDate.getFullYear();

        if (today.getMonth() < birthDate.getMonth()) {
            diff--;
        }
        else if (today.getMonth() == birthDate.getMonth()) {
            if (today.getDate() < birthDate.getDate())
                diff--;
        }

        if (Number.isInteger(diff))
            return diff;
        else 
            return "";
    } catch (err) {
        return 0;
    }
}