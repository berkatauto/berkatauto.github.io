// postarticle.js telah diubah menjadi editarticle.js
// Anda perlu menyesuaikan kodingan ini dengan kebutuhan dan backend yang digunakan

document.getElementById('editArticleForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Mengambil nilai dari formulir
    const articleId = document.getElementById('articleId').value;
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const tags = document.getElementById('tags').value;
    const content = document.getElementById('content').value;

    // Menyusun data yang akan dikirimkan ke backend
    const formData = new FormData();
    formData.append('articleId', articleId);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('tags', tags);
    formData.append('content', content);

    // Menggunakan fetch API atau XMLHttpRequest untuk mengirim data ke backend
    // Contoh menggunakan fetch API:
    fetch('https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/updatearticle', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Handle respons dari backend (misalnya, tampilkan pesan sukses/gagal)
        console.log(data);
    })
    .catch(error => {
        // Handle kesalahan koneksi atau kesalahan lainnya
        console.error('Error:', error);
    });
});
