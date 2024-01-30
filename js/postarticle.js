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
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error saat mengirim artikel. Silakan coba lagi.');
        });
    });
});


// document.getElementById('postarticleForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Ambil data formulir
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const category = document.getElementById('category').value;
//     const tags = document.getElementById('tags').value;
//     // const imageInput = document.getElementById('image_input');
//     const content = document.getElementById('content').value;

//     // Buat objek FormData untuk mengirim data formulir
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('author', author);
//     formData.append('category', category);
//     formData.append('tags', tags);
//     // formData.append('image', imageInput.files[0]);
//     formData.append('content', content);

//     // Lakukan permintaan POST ke Google Cloud Function
//     fetch('https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/articlepost', {
//         method: 'POST',
//         body: formData,
//     })
//     .then(response => {
//         // Periksa status respons
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         // Coba menguraikan respons JSON
//         return response.json();
//     })
//     .then(data => {
//         // Tangani respons dari server
//         console.log(data);
//         alert('Artikel berhasil dikirim!');
//     })
//     .catch(error => {
//         // Tangani kesalahan
//         console.error('Kesalahan:', error);
//         alert('Error saat mengirim artikel. Silakan coba lagi.');
//     });
// });
// document.getElementById("submitButton").addEventListener("click", postarticleForm)