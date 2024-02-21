export const resetFocus = () => {
    const focusedElement = document.activeElement;
    if (focusedElement && typeof focusedElement.blur === 'function') {
        focusedElement.blur();
    }
};