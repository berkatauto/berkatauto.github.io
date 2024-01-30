document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('editarticleForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;

        const data = {
            title: title,
            author: author,
            category: category,
        };

        // Assuming you're using the Fetch API
        fetch('https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/updatearticle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            console.log('Success:', data);
            // You can add additional logic here if needed
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
            // You can add additional error handling logic here
        });
    });
});
