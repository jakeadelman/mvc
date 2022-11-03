var register = document.getElementById('signupform');
register.addEventListener('submit', submitRegister);

function submitRegister(event) {
    event.preventDefault()

    console.log("hello event form")
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var data = {
        user_name: email,
        password: password
    }
    fetch("/api/auth/", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => {
        window.location.href = "/"
    })
}