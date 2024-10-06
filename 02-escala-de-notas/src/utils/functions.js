export function trunc(number, digits) {
    let pattern = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)");
    let match = number.toString().match(pattern);

    return match ? parseFloat(match[1]) : number.valueOf();
}

export function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}
