export const setStorage = ({ key, value }) => {
    const valueToString = JSON.stringify(value);
    return localStorage.setItem(key, valueToString);
};

export const getStorage = ({ key, isJSON = false }) => {
    const value = localStorage.getItem(key);
    if (!value) return null;

    return isJSON ? JSON.parse(value) : value;
};

export const getStorageKeys = () => {
    return Object.keys(localStorage);
};
