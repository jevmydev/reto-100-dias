export function parseDate({ date }) {
    if (typeof date !== "object") return;

    const parsedDate = `${date.toISOString().split("T")[0]}T${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    return parsedDate;
}
