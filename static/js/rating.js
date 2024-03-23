let full = document.querySelector('#full');

full.addEventListener('click', function() {
    // window.location = '../html/full.html';
    window.location = '/full';
})

let back2 = document.querySelector('#back');

back2.addEventListener('click', function() {
    history.back();
})