let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let search = document.querySelector('#search');

search.addEventListener('click', function() {
    // window.location = '../html/resultspeople.html';
    window.location = '/resultspeople';
})

let profile = document.querySelector('#profile');
profile.addEventListener('click', function() {
    // window.location = '../html/profile.html';
    window.location = '/profile';
})