let back = document.querySelector('#back');

back.addEventListener('click', function() {
    window.location = '../html/onboarding.html';
})

let done = document.querySelector('#done');

done.addEventListener('click', function() {
    window.location = '../html/home.html';
})

let rate = document.querySelector('#rate');

rate.addEventListener('click', function() {
    window.location = '../html/survey.html';
})

let add = document.querySelector('#add');
let remove = document.querySelector('#minus')
let extra = document.querySelector('.extra')

add.addEventListener('click', function(){
    extra.innerHTML += `<div class="flex2">
    <div class="space">
        <p class="enter"> Department </p>
        <select name="semester" class="dept" id="semester"> 
            <option value="blank"> </option>
            <option value="dept">BIOL</option>
            <option value="dept">CHEM</option>
        </select>
    </div>

    <div class="space">
        <p class="enter"> Course # </p>
        <select name="year" class="dropdown2" id="year"> 
            <option value="blank"> </option>
            <option value="course">1102</option>
            <option value="course">1127Q</option>
        </select>
    </div>

    <div class="space">
        <p class="enter"> Instructor </p>
        <select name="year" class="prof" id="year"> 
            <option value="blank"> </option>
            <option value="professor">Thomas Abbott</option>
            <option value="professor">Clyde Cady</option>
        </select>
    </div>

</div>

<button id="rate"> Rate </button>`
})

remove.addEventListener('click', function(){
    extra.innerHTML = `<div></div>`
})