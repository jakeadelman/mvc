
var submitpost = document.getElementById('submit-post');
submitpost.addEventListener('click', submitPostEvent);

function submitPostEvent(event) {
    event.preventDefault()


    var title = document.getElementById("small-input").value
    var content = document.getElementById("large-input").value
    var data = {
        title: title,
        content: content
    }
    fetch("/api/createpost", {
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