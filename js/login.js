// SignIn

function signin () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password
    }
    fetch("https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/signin", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.json()
    })
    // return the token to the header and store it into cookie
    .then((data) => {
        document.cookie = "token=" + data.token
        window.location.href = "index.html"
    })
    .catch((error) => {
        console.log(error)
    })
}