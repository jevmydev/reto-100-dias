import * as pdfjs from "/node_modules/pdfjs-dist/webpack";
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.js", import.meta.url).toString();

import { $ } from "./utils.js";
import { constructTimeResults } from "./timeResults.js";

const $fileInput = $(".file__input");
const $fileDrop = $(".file__drop");
const $fileStatus = $(".file__status");

const book = {
    name: "",
    text: "",
    pages: 0,
    words: 0,
    characters: 0
};

const readBookPDF = async (e) => {
    const { result } = e.target;
    const typedArray = new Uint8Array(result);
    const pdf = await pdfjs.getDocument(typedArray).promise;

    let textContent = "";

    for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex++) {
        const page = await pdf.getPage(pageIndex);
        const text = await page.getTextContent();

        textContent += text.items.map((item) => item.str).join(" ") + "\n";
    }

    const splitText = textContent.split(" ");

    $fileStatus.textContent = book.name;

    book.text = textContent;
    book.pages = pdf.numPages;
    book.words = splitText.length;
    book.characters = textContent.length;

    constructTimeResults(book);
};

const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") return;

    book.name = file.name;

    const fileReader = new FileReader();
    fileReader.addEventListener("load", readBookPDF);
    fileReader.readAsArrayBuffer(file);
};

const handleFileDrop = async (e) => {
    e.preventDefault();
    $fileDrop.classList.remove("file__drop--over");

    const files = e.dataTransfer.files;
    if (files.length <= 0) return;

    const file = files[0];
    if (file.type !== "application/pdf") return;

    book.name = file.name;

    const fileReader = new FileReader();
    fileReader.addEventListener("load", readBookPDF);
    fileReader.readAsArrayBuffer(file);
};

const handleFileDropOver = (e) => {
    e.preventDefault();
    $fileDrop.classList.add("file__drop--over");
};

const handleFileDropLeave = (e) => {
    e.preventDefault();
    $fileDrop.classList.remove("file__drop--over");
};

$fileInput.addEventListener("change", handleFileInputChange);

$fileDrop.addEventListener("drop", handleFileDrop);
$fileDrop.addEventListener("dragover", handleFileDropOver);
$fileDrop.addEventListener("dragleave", handleFileDropLeave);
