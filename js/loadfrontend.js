import { setInner } from "https://jscroot.github.io/element/croot.js";
import jsonData from "../data/json/proposal.json" assert {type: "json"};

/// index.html
setInner("indexHeader", `<h2 class="mb-4 text-center pt-32 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">${jsonData.titleProposal}</h2>`);
setInner("forproyek", `<h2 class="mb-4 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">${jsonData.index_proyek}</h2>`)
setInner("webfor", `<p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">${jsonData.index_webfor}</p>`)
setInner("button", `<a href="/page_1.html" class="rounded-lg place-items-center px-5 py-3 text-base font-medium text-center text-black bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Lihat Proposal<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></a>`)
