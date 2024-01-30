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
    .then((data) => {
        if (data.message == "Login Success") {
            window.location.href = "./dsb/dashboard.html"
        } else {
            alert("Username atau Password salah")
        }
    })
}
document.getElementById("loginButton").addEventListener("click", signin)