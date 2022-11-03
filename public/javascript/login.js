
var login = document.getElementById('loginform');
login.addEventListener('submit', submitLogin);

function submitLogin(event) {
    event.preventDefault()

    console.log("hello event form")
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var data = {
        user_name: email,
        password: password
    }
    fetch("/api/auth/login", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => {
        // console.log("hello")
        window.location.href = "/"
    })
}