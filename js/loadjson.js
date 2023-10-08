
import { setInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";


const responsFungsi = (data) => {
    setInner("judulHeader", data.titleProposal);

    setInner("headerAbstrak", `${data.datafor.sectionAbstrak}`)
    setInner("paragraf_abstrak", `${data.datafor.paragraf_abstrak[HTMLParagraphElement](index)}`);

    setInner("headerDeskripsi", `${data.sectionAbstrak}`)
    setInner("paragraf_description", `${data.paragraf_description[HTMLParagraphElement](index)}`);

    setInner("headerLatar", `${data.sectionLatar}`)
    setInner("paragraf_latar", `${data.paragraf_latar[HTMLParagraphElement](index)}`);

    setInner("headerTujuan", `${data.sectionTujuan}`)
    setInner("paragraf_tujuan", `${data.paragraf_latar[HTMLParagraphElement](index)}`);
};

await get("../data/json/proposal.json", getRespons);
