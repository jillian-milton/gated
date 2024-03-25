let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let search1 = document.querySelector('#search1');
let search3 = document.querySelector('#search3');

search1.addEventListener('click', function() {
    window.location = '/resultspeople';
})

search3.addEventListener('click', function() {
    window.location = '/lacrosse';
})

let profile = document.querySelector('#profile');
profile.addEventListener('click', function() {
    // window.location = '../html/profile.html';
    window.location = '/profile';
})