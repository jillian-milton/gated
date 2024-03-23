let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let profile = document.querySelector('#profile');
profile.addEventListener('click', function() {
    // window.location = '../html/profile.html';
    window.location = '/profile';
})

let incomplete = document.querySelectorAll('#rating');
incomplete.forEach(btn => {
    btn.addEventListener('click', function() {
        window.location = '/survey';
    })
});

//Query Selector all loop
let rate = document.querySelectorAll('.rate');
rate.forEach(btn => {
    btn.addEventListener('click', function() {
        // window.location = '../html/survey.html';
        window.location = '/rating';
    })
});
