let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let rating = document.querySelector('#rating');

rating.addEventListener('click', function() {
    window.location = '../html/survey.html';
})

let profile = document.querySelector('#profile');
profile.addEventListener('click', function() {
    window.location = '../html/profile.html';
})