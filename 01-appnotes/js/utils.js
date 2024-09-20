import { $createNote, $notes, $hero, $listNotes } from "./constants.js";

export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const toggleHero = () => $hero.classList.toggle("disabled");
export const toggleCreateNote = () => $createNote.classList.toggle("disabled");
export const toggleNotes = () => $notes.classList.toggle("disabled");

export const isExistNotes = () => {
    const listNotesChildrens = $listNotes.children;
    const lengthListNotes = listNotesChildrens.length;
    const isExistNotes = lengthListNotes > 1;

    return isExistNotes;
};
