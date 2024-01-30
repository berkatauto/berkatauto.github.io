document.addEventListener('DOMContentLoaded', function () {
    const postArticleForm = document.getElementById('postarticleForm');

    postArticleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;
        // Generate Last Date
        const date = new Date();

        const articleData = {
            title: title,
            author: author,
            category: category,
            date: date
        };
        
        // Send data to Google Cloud Function
        fetch('https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/articlepost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Data berhasil disubmit!')
            // Add any further actions after successful submission
            // reload page
            location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error saat mengirim artikel. Silakan coba lagi.');
        });
    });
});