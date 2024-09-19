import { $createNote, $notes, $hero } from "./constants.js";

export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const toggleHero = () => $hero.classList.toggle("disabled");
export const toggleCreateNote = () => $createNote.classList.toggle("disabled");
export const toggleNotes = () => $notes.classList.toggle("disabled");
