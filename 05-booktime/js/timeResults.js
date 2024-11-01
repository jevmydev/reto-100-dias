import { $ } from "./utils";

const $resultsContainer = $(".results__container");
const $resultsSection = $(".results");

const formatTime = (totalHours) => {
    const totalMinutes = Math.round(totalHours * 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} hora${hours !== 1 ? "s" : ""} y ${minutes} minuto${minutes !== 1 ? "s" : ""}`;
};

const calculateTimeWithWords = (words) => (words / 250) * (1 / 60);
const calculateTimeWithChar = (char) => (char / 1500) * (1 / 60);

export const constructTimeResults = (book) => {
    const timeWords = calculateTimeWithWords(book.words);
    const timeChar = calculateTimeWithChar(book.characters);

    const averageTime = (timeWords + timeChar) / 2;

    $resultsContainer.innerHTML = `
        <div class="results__time time">
            <span class="time__label">Tiempo de lectura (basado en palabras):</span>
            <span class="time__value">${formatTime(timeWords)}</span>
        </div>
        <div class="results__time time">
            <span class="time__label">Tiempo de lectura (basado en caracteres):</span>
            <span class="time__value">${formatTime(timeChar)}</span>
        </div>
        <div class="results__time time">
            <span class="time__label">Tiempo promedio estimado:</span>
            <span class="time__value">${formatTime(averageTime)}</span>
        </div>
        `;

    $resultsSection.classList.remove("disabled");
};
