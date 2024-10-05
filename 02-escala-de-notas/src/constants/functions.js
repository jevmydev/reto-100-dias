export function trunc(number, digits) {
    let pattern = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)");
    let match = number.toString().match(pattern);

    return match ? parseFloat(match[1]) : number.valueOf();
}
