let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let people = document.querySelector('#people');

people.addEventListener('click', function() {
    window.location = '../html/searchpeople.html';
})