const apiUrl = '';
const titleInput = document.getElementById('title');
const loadnews = document.getElementById('loadnews');

articleForm.addEventListener('loadnews', async (event) => {
    fetch(apiUrl, {
        method: 'GET',
        body:   formDataObject,
    })
    event.preventDefault();
    const title = getElementById('title').value;
});