// Isian form untuk posting artikel
document.getElementById('postArticleForm')
document.getElementById('title')
document.getElementById('content')
document.getElementById('submit')
// Mengambil nilai dari elemen input pada HTML
const postArticleForm = document.getElementById('postArticleForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');
// Fungsi untuk mengecek apakah form telah diisi dengan benar
const validation = () => {
    const title = titleInput.value;
    const content = contentInput.value;
    if (title !== '' && content !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};
// Panggil fungsi validation saat input berubah
titleInput.addEventListener('input', validation);
contentInput.addEventListener('input', validation);
// Kirim data artikel ke API