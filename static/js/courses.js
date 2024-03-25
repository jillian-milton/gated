let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})


let search = document.querySelector('#search');
let results = document.querySelector('#results');

//Query Selector all loop
let add = document.querySelectorAll('.add');
add.forEach(btn => {
    btn.addEventListener('click', function() {
        window.location = '/mycourses';
    })
});


let profile = document.querySelector('#profile');
profile.addEventListener('click', function() {
    // window.location = '../html/profile.html';
    window.location = '/profile';
})




