const apiUrl = '';
const titleInput = document.getElementById('title');
const loadnewsdiv = document.getElementById('loadnews');

articleForm.addEventListener('loadnews', async (event) => {
    event.preventDefault();
    const title = getElementById('title').value;
    // const content = contentInput.value;

    // Kirim data artikel ke API
    // fetch('https://asia-southeast2-gis-moni.cloudfunctions.net/berkatauto-postArticle', {
    //     method: 'POST',
    //     body: JSON.stringify({ title, content }),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.status === true) {
    //             // Redirect user to user.html upon successful login
    //             window.location.href = '../pages/blog-single.html';
    //         } else {
    //             errorMessage.textContent = 'Error: '; // pesan kesalahan
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
});