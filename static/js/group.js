let back = document.querySelector('#back');

back.addEventListener('click', function() {
    // window.location = '../html/chats.html';
    // window.location = '/chats';
    history.back();
})

let group = document.querySelector('#group');
group.addEventListener('click', function() {
    // window.location = '../html/participants.html';
    window.location = '/participants';
})
