document.addEventListener('DOMContentLoaded', function () {
    // URL of the JSON data
    const proposalData = '../data/json/proposal.json';

    // Select the HTML element where you want to display the JSON data
    const jsonContainer = document.getElementById('proposal-container');

    // Use the fetch API to load the JSON data
    fetch(proposalData)
        .then(response => response.json())
        .then(data => {
            // Process the JSON data and display it in the HTML
            jsonContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
});