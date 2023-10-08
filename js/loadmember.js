import { setInner } from "https://jscroot.github.io/element/croot.js";
import jsonTeam from "../data/json/team.json" assert { type: "json" };

// Team

    // Anggota 1

    setInner("anggota1", jsonTeam.nama1);
    setInner("npm1", `NPM: ${jsonTeam.npm1}`);
    setInner("studi1", `<i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>${jsonTeam.prodi1}`);
    setInner("univ1", `<i class="fas fa-university mr-2 text-lg text-gray-500"></i>${jsonTeam.universitas1}`);
    setInner("git1", `<i class="fas fa-laptop mr-2 text-lg text-gray-500"></i><a href="${jsonTeam.github1}" class="text-black hover:text-blue-200">Github : adam-ghafara</a>`);


    // Anggota 2

    setInner("anggota2", jsonTeam.nama2);
    setInner("npm2", `NPM: ${jsonTeam.npm2}`);
    setInner("studi2", `<i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>${jsonTeam.prodi2}`);
    setInner("univ2", `<i class="fas fa-university mr-2 text-lg text-gray-500"></i>${jsonTeam.universitas2}`);
    setInner("git2", `<i class="fas fa-laptop mr-2 text-lg text-gray-500"></i><a href="${jsonTeam.github2}" class="text-black hover:text-blue-200">Github : Rachma-Nurhaliza-Parindra</a>`);