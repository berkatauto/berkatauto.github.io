import { setInner } from "https://jscroot.github.io/element/croot.js";
import jsonData from "../data/json/proposal.json" assert { type: "json" };

// page_1.html
setInner("judulHeader", jsonData.titleProposal);
 
// Abstrak
setInner("s1", jsonData.section1)
setInner("paragraf_abstrak1", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_abstrak1}</p>`);
setInner("paragraf_abstrak2", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_abstrak2}</p>`);
setInner("kata_kunci", `<p class="justify-center text-center px-6 pb-5">${jsonData.kata_kunci}</p>`);

// Abstrak Inggris

setInner("s2", jsonData.section2)
setInner("paragraf_abstrak_english1", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_abstrak_english1}</p>`);
setInner("paragraf_abstrak_english2", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_abstrak_english2}</p>`);
setInner("keywords", `<p class="justify-center text-center px-6 pb-5">${jsonData.keywords}</p>`);


// Description

setInner("s3", jsonData.section3)
setInner("paragraf_description1", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_description1}</p>`);
setInner("paragraf_description2", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_description2}</p>`);
setInner("paragraf_description3", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_description3}</p>`);


// latar

setInner("s4", jsonData.section4)
setInner("paragraf_latar1", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_latar1}</p>`);
setInner("paragraf_latar2", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_latar2}</p>`);

// tujuan

setInner("s5", jsonData.section5)
setInner("paragraf_tujuan", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_tujuan}</p>`);
setInner("tujuan_point1", `<p class="text-justify px-6 pb-5">1. ${jsonData.tujuan_point1}</p>`);
setInner("tujuan_point2", `<p class="text-justify px-6 pb-5">2. ${jsonData.tujuan_point2}</p>`);
setInner("tujuan_point3", `<p class="text-justify px-6 pb-5">3. ${jsonData.tujuan_point3}</p>`);

// lingkup

setInner("s6", jsonData.section6)
setInner("paragraf_doc", `<p class="text-justify px-6 pb-5">${jsonData.paragraf_doc}</p>`);
setInner("doc_point1", `<p class="text-justify px-6 pb-5">1. ${jsonData.doc_point1}</p>`);
setInner("doc_point2", `<p class="text-justify px-6 pb-5">2. ${jsonData.doc_point2}</p>`);
