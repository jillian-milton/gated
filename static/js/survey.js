let back = document.querySelector('#back');

back.addEventListener('click', function() {
    history.back();

    //https://developer.mozilla.org/en-US/docs/Web/API/History/back
})

let submit = document.querySelector('#submit');

submit.addEventListener('click', function() {
    history.back();

})