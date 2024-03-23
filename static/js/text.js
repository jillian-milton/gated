let back = document.querySelector('#back');

back.addEventListener('click', function() {
    // window.location = '../html/chats.html';
    // window.location = '/chats';
    history.back();
})