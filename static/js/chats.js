let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let profile = document.querySelector('#profile');
profile.addEventListener('click', function() {
    window.location = '../html/profile.html';
})

let people = document.querySelector('#people');

people.addEventListener('click', function() {
    window.location = '../html/searchpeople.html';
})
