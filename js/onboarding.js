let back = document.querySelector('#back');

back.addEventListener('click', function() {
    window.location = '../html/signup.html';
})

let done = document.querySelector('#done');

done.addEventListener('click', function() {
    window.location = '../html/onboarding2.html';
})

let add = document.querySelector('#add');
let remove = document.querySelector('#minus')
let major = document.querySelector('.major')

add.addEventListener('click', function(){
    major.innerHTML += `   <div class="space">
    <p class="enter"> Major 2 </p>
    <select name="major" id="major"> 
        <option value="blank"> </option>
        <option value="accounting">Accounting</option>
        <option value="animal science">Animal Science</option>
        <option value="biology">Biology</option>
    </select>
</div>`
})

remove.addEventListener('click', function(){
    major.innerHTML = `<div></div>`
})

let add2 = document.querySelector('#add2');
let remove2 = document.querySelector('#minus2')
let minor = document.querySelector('.minor')

add2.addEventListener('click', function(){
    minor.innerHTML += `   <div class="space">
    <p class="enter"> Minor 2 </p>
    <select name="major" id="major"> 
        <option value="blank"> </option>
        <option value="accounting">Accounting</option>
        <option value="animal science">Animal Science</option>
        <option value="biology">Biology</option>
    </select>
</div>`
})

remove2.addEventListener('click', function(){
    minor.innerHTML = '';
})



