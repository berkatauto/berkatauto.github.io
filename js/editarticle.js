document.addEventListener('DOMContentLoaded', function () {
    const editarticleForm = document.getElementById('editarticleForm');

    editarticleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Mengambil data dari formulir
        const title = `<td id="title" class="w-1/3 text-left py-3 px-4">${data.title}</td>`;
        const author = `<td class="w-1/3 text-left py-3 px-4">${data.author}</td>`;
        const category = `<td class="w-1/3 text-left py-3 px-4">${data.category}</td>`;

        // Membuat objek data untuk dikirim ke Google Cloud Function
        const articleData = {
            title,
            author,
            category,
        };

        // Mengirim permintaan ke Google Cloud Function
        fetch('https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/updatearticle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle tindakan setelah berhasil, misalnya, tampilkan pesan sukses
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle tindakan jika terjadi kesalahan, misalnya, tampilkan pesan kesalahan
        });
    });
});
