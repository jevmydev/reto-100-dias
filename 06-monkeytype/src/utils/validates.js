import { KEY_ROWS } from "../mocks/keyRows";

export function isValidKey(key) {
    const keyLower = key.toLowerCase();
    return KEY_ROWS.some((row) => row.includes(keyLower)) || key === " ";
}
