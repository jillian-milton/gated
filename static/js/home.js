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

let courses = document.querySelector('#courses');

courses.addEventListener('click', function() {
    // window.location = '/searchcourses';
    window.location = '../html/searchcourses.html';
})

let my = document.querySelector('#my');

my.addEventListener('click', function() {
    window.location = '../html/mycourses.html';
})

let chats = document.querySelector('#chats');

chats.addEventListener('click', function() {
    window.location = '../html/chats.html';
})

let wall = document.querySelector('#wall');

wall.addEventListener('click', function() {
    window.location = '../html/recognize.html';
})