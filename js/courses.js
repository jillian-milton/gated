let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let search = document.querySelector('#search');
let results = document.querySelector('.results');
let hide = document.querySelector('.hide');

search.addEventListener('click', function() {
   results.classList.toggle('hide');
})



