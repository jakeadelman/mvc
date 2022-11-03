var addpost = document.getElementById('add-post-button');
addpost.addEventListener('click', addPostClick);

function addPostClick(event) {
    event.preventDefault()
    window.location.href = "/addpost"
}