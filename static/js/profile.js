let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let signout = document.querySelector('#signout');
signout.addEventListener('click', function() {
    // window.location = '../html/index.html'
    window.location = '/';
})