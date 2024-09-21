import { $$, toggleHero, toggleNotes, toggleCreateNote, isExistNotes } from "./utils.js";
import { $listNotes, $addNoteBtn, $createFirstNoteBtn, $formCreateNote, $inputTitle, $inputContent, $closeCreateBtn, $editSubmit, $createSubmit } from "./constants.js";
import { setStorage, getStorage } from "./storage.js";

function init() {
    refreshNotes();
    refreshPrincipalPage();
}

function refreshNotes() {
    const notes = $$(".note");
    notes.forEach((note) => note.remove());

    Object.keys(localStorage).forEach((key) => {
        const note = getStorage({ key, isJSON: true });
        constructNote(note);
    });
}

function refreshPrincipalPage() {
    const isExistNote = isExistNotes();

    if (isExistNote) toggleNotes();
    else toggleHero();
}

function refreshNoteEventListeners($liNote) {
    const { 0: $options, 1: $actionNote } = $liNote.children;
    const { 0: $favoriteOption, 1: $deleteOption } = $options.children;

    $actionNote.addEventListener("click", () => actionNote($liNote));
    $favoriteOption.addEventListener("click", () => favoriteNote($favoriteOption, $liNote));
    $deleteOption.addEventListener("click", () => deleteNote($liNote));
}

function actionNote($liNote) {
    toggleNotes();
    toggleCreateNote();

    $createSubmit.classList.add("createnote__submit--disabled");
    $editSubmit.classList.remove("createnote__submit--disabled");

    const key = $liNote.key;
    const note = getStorage({ key, isJSON: true });

    $inputTitle.value = note.title;
    $inputContent.value = note.content;
    $formCreateNote.isFavorite = note.isFavorite;
    $formCreateNote.key = key;
}

function editNote() {
    const key = $formCreateNote.key;
    const isFavorite = $formCreateNote.isFavorite;

    const formData = new FormData($formCreateNote);
    const noteValues = Object.fromEntries(formData);

    if (noteValues.title === "" || noteValues.content === "") throw new Error("Un campo del formulario está vacio"); // In case of error...

    createNote({ key, isFavorite, ...noteValues });
    refreshNotes();
    closeCreateNote();
}

function favoriteNote($favoriteOption, $liNote) {
    const key = $liNote.key;
    const note = getStorage({ key, isJSON: true });

    const isNoteFavoriteMarked = $liNote.classList.toggle("note--favorite");
    $favoriteOption.classList.toggle("options__addfavorite--favorite");

    note.isFavorite = isNoteFavoriteMarked;
    setStorage({ key, value: note });
}

function deleteNote($liNote) {
    const key = $liNote.key;

    localStorage.removeItem(key);
    $listNotes.removeChild($liNote);

    const isExistNote = isExistNotes();
    if (!isExistNote) {
        toggleNotes();
        toggleHero();
    }
}

function createNote({ key = null, title, content, isFavorite = false }) {
    const listNotesChildrens = $listNotes.children;
    const lengthListNotes = listNotesChildrens.length;

    const dateNote = new Date();
    const stringDate = dateNote.toLocaleString();
    const formatDate = stringDate.replaceAll("/", "-");

    const note = {
        key: key ?? lengthListNotes,
        date: formatDate,
        title: title,
        content: content,
        isFavorite: isFavorite
    };

    setStorage({ key: note.key, value: note });
    return note;
}

function constructNote(note) {
    const isFavoriteNote = note.isFavorite;

    const $liNote = document.createElement("li");

    $liNote.classList.add("list__note", "note");
    if (isFavoriteNote) $liNote.classList.add("note--favorite");
    $liNote.key = note.key;

    $liNote.innerHTML = `
        <div class="note__options options">
            <button class="options__addfavorite note__button button${isFavoriteNote ? " options__addfavorite--favorite" : ""}" title="Agregar a favoritos">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 28 28" fill="none">
                    <path
                    clip-rule="evenodd"
                    d="M5 2.92445C5 1.8616 5.8616 1 6.92444 1H20.3956C21.4584 1 22.32 1.8616 22.32 2.92444V25.0556C22.32 26.6414 20.5096 27.5466 19.2409 26.5951L13.66 22.4094L8.07911 26.5951C6.81045 27.5466 5 26.6414 5 25.0556V2.92445ZM20.3956 3.50178C20.3956 3.18293 20.1371 2.92444 19.8182 2.92444L7.50178 2.92445C7.18293 2.92445 6.92444 3.18293 6.92444 3.50178V24.4782C6.92444 24.7161 7.19601 24.8519 7.38631 24.7092L12.5053 20.8699C13.1896 20.3567 14.1304 20.3567 14.8147 20.8699L19.9337 24.7092C20.124 24.8519 20.3956 24.7161 20.3956 24.4782V3.50178Z"
                    fill="#000000"
                    fill-rule="evenodd" />
                    <path d="M10 11C10 10.4477 10.4477 10 11 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H11C10.4477 12 10 11.5523 10 11Z" fill="#000000" />
                    <path d="M14 15C13.4477 15 13 14.5523 13 14V8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8V14C15 14.5523 14.5523 15 14 15Z" fill="#000000" />
                </svg>
            </button>
            <button class="options__delete note__button button" title="Eliminar nota">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                    <path
                    d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <button class="note__action note__button button">
            <article class="note__article">
                <header class="note__header">
                    <h3 class="note__title title">${note.title}</h3>
                    <p class="note__date">${note.date}</p>
                </header>
                <section class="note__section">
                    <p class="note__description">${note.content}</p>
                </section>
            </article>
        </button>`;

    $listNotes.insertBefore($liNote, $listNotes.firstElementChild);
    refreshNoteEventListeners($liNote);
}

function submitCreateNote(evt) {
    evt.preventDefault();

    const formData = new FormData($formCreateNote);
    const noteValues = Object.fromEntries(formData);

    if (noteValues.title === "" || noteValues.content === "") throw new Error("Un campo del formulario está vacio"); // In case of error...

    const note = createNote(noteValues);

    constructNote(note);
    closeCreateNote();
}

function closeCreateNote() {
    refreshPrincipalPage();

    toggleCreateNote();
    $formCreateNote.reset();
}

function createFirstNote() {
    toggleHero();
    toggleCreateNote();
}

function addNote() {
    $editSubmit.classList.add("createnote__submit--disabled");
    $createSubmit.classList.remove("createnote__submit--disabled");
    toggleNotes();
    toggleCreateNote();
}

$formCreateNote.addEventListener("submit", submitCreateNote);
$closeCreateBtn.addEventListener("click", closeCreateNote);

$createFirstNoteBtn.addEventListener("click", createFirstNote);

$addNoteBtn.addEventListener("click", addNote);
$editSubmit.addEventListener("click", editNote);

init();
