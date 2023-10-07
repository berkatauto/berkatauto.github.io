document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("LatarBelakang").getElementsByTagName('tbody')[0];
    fetch("../data/")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {

            });
        })
        .catch(error => console.error("Error: ", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("Tujuan").getElementsByTagName('tbody')[0];
    fetch("../data/")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {

            });
        })
        .catch(error => console.error("Error: ", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("LingkupDoc").getElementsByTagName('tbody')[0];
    fetch("../data/")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {

            });
        })
        .catch(error => console.error("Error: ", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("KPustaka").getElementsByTagName('tbody')[0];
    fetch("../data/")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {

            });
        })
        .catch(error => console.error("Error: ", error));
});