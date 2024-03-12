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

let self = document.querySelector('#self');
self.addEventListener('click', function(){
    window.location = '../html/text.html';
})

let group = document.querySelector('#group');
group.addEventListener('click', function(){
    window.location = '../html/groupchat.html';
})