import { setInner } from "https://jscroot.github.io/element/croot.js";
import jsonPustaka from "../data/json/pustaka.json" assert { type: "json" };


// Kajian Pustaka

setInner("judulHeader", jsonPustaka.title1)

setInner("pustakaArticle",
        `<h5 class="text-2xl pt-10 pl-11 font-bold">${jsonPustaka.pustaka1}</h5>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5"${jsonPustaka.p1_whatis}></p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_whatis2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_whatis3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_func1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_func2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_func3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_whatis4}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_pro1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_pro2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p1_pro3}</p>
        </div>`),
setInner("pustakaArticle2",
        `<h5 class="text-2xl pl-11 font-bold">${jsonPustaka.pustaka2}</h5>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_whatis}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_whatis2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_pro1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_pro2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_pro3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_pro4}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_pro5}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_whatis3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_cons1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p2_cons2}</p>
        </div>`),
setInner("pustakaArticle3",
        `<h5 class="text-2xl pl-11 font-bold">${jsonPustaka.pustaka3}</h5>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_whatis}></p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_whatis2}></p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_pro1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_pro2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_pro3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_pro4}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_pro5}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_whatis3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_cons1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p3_cons2}</p>
        </div>`),
setInner("pustakaArticle4",
        `<h5 class="text-2xl pl-11 font-bold">${jsonPustaka.pustaka4}</h5>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_whatis}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_whatis2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_pro1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_pro2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_pro3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_pro4}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_whatis3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_cons1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_cons2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p4_cons3}</p>
        </div>`),
setInner("pustakaArticle5",
        `<h5 class="text-2xl pl-11 font-bold">${jsonPustaka.pustaka5}</h5>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_whatis}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_whatis2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro4}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro5}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro6}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro7}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_pro8}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_whatis3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_cons1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_cons2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_cons3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_cons4}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p5_cons5}</p>
        </div>`),
setInner("pustakaArticle6",
        `<h5 class="text-2xl pl-11 font-bold">${jsonPustaka.pustaka6}</h5>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_whatis}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_known1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_known2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_known3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_whatis2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_pro1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_pro2}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_pro3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_whatis3}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_cons1}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p6_cons2}</p>
        </div>`),
setInner("pustakaArticle7",
        `<h5 class="text-2xl pl-11 font-bold">${jsonPustaka.pustaka7}</h5>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5">${jsonPustaka.p7_whatis}</p>
        <p class="text-justify px-6 pb-5">${jsonPustaka.p7_whatis}</p>
        </div>`)

// Daftar Pustaka

setInner("dafpusList", `<h3 class="text-center text-2xl font-bold text-center px-11">${jsonPustaka.title2}</h3>
        <div class="space-y-2.5">
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus1}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus2}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus3}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus4}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus5}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus6}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus7}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus8}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus9}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus10}
        </p>
        <p class="text-justify px-6 pb-5">
        ${jsonPustaka.dafpus11}
        </p>
        </div>`
        )