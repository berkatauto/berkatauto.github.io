// Replace these values with your actual form data and API endpoint
const apiUrl = 'https://api.example.com/signup';
const fullnameInput = document.getElementById('fullname');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const journalInput = document.getElementById('journal_status');
const submitButton = document.getElementById('submit');


signUpForm.AddEventListener('submit', async (event) => {

// Create a FormData object and append form data
const signupObject = new signUpForm();
for (const key in signUpForm) {
  signupObject.append(key, signUpForm[key]);
}

// Use the fetch function to send the data to the API

fetch(apiUrl, {
  method: 'POST',
  body: formDataObject,
})
  .then(response => response.json())
  .then(data => {
    if(data.status === true) {
        window.location.href = '../pages/signin.html';
    // Handle success response
        console.log('SignUp Sukses! Sekarang kalian dapat login menggunakan akun yang kalian buat.', data);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
}
)