document.getElementById('postarticleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil data formulir
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const tags = document.getElementById('tags').value;
    const imageInput = document.getElementById('image_input');
    const content = document.getElementById('content').value;

    // Buat objek FormData untuk mengirim data formulir
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('tags', tags);
    formData.append('image', imageInput.files[0]);
    formData.append('content', content);

    // Lakukan permintaan POST ke Google Cloud Function
    fetch('https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/articlepost', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        // Periksa status respons
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Coba menguraikan respons JSON
        return response.json();
    })
    .then(data => {
        // Tangani respons dari server
        console.log(data);
        alert('Artikel berhasil dikirim!');
    })
    .catch(error => {
        // Tangani kesalahan
        console.error('Kesalahan:', error);
        alert('Error saat mengirim artikel. Silakan coba lagi.');
    });
});
