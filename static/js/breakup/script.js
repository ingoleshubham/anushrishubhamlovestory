alert("This website is deprecated as it is no longer being maintained");

// Disable right-click on the page
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.querySelector('.overlay-text').addEventListener('click', function(event) {
    event.stopPropagation();
    document.getElementById('message').style.display = 'block';
});