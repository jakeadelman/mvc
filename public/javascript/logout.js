
var logout = document.getElementById('logout-button');
logout.addEventListener('click', submitLogout);

function submitLogout(event) {
    event.preventDefault()

    fetch("/api/auth/logout", {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
    }).then(() => {
        // console.log("hello")
        window.location.href = "/"
    })
}