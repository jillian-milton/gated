let back2 = document.querySelector('#back');

back2.addEventListener('click', function() {
    // window.location = '../html/searchpeople.html';
    window.location = '/searchpeople';
})

let friend = document.querySelectorAll('.col');

friend.forEach(btn => {
    btn.addEventListener('click', function() {
        window.location = '/friendprofile';
    })
});

let button = document.querySelector('button');
button.addEventListener('click', function(){
    window.location = '/groupchat';
})