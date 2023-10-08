import {pdfviewer} from "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf_viewer.min.css"

document.addEventListener("DOMContentLoaded", () => {
    pdfviewer(pdfjsLib.getDocument('../data/document/proposal-active-3752821123.pdf'))
    pdfviewer()
})
const pdfViewer = document.getElementById("pdfViewer");

