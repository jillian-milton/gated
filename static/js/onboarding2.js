let back = document.querySelector('#back');

back.addEventListener('click', function() {
    window.location = '/onboarding';
    //window.location = '../html/onboarding.html';
})

let done = document.querySelector('#done');

done.addEventListener('click', function() {
     window.location = '/home';
    //window.location = '../html/home.html'
})

let rate = document.querySelector('#rate');

rate.addEventListener('click', function() {
    // window.location = '../html/survey.html';
    window.location = '/survey';
})

let add = document.querySelector('#add');
let remove = document.querySelector('#minus')
let extra = document.querySelector('.extra')

add.addEventListener('click', function(){
    extra.innerHTML += `<div class="flex2">

    <div class="space">
            <p class="enter"> Course Number</p>
            <select name="number" class="dropdown" id="number"> 
                <option value="blank"> </option>
                
                 {% for courses in numbers %}

                    <option> <span>{{courses.subject}} </span><span>{{courses.course_number}}</span> </option>
               
             {% endfor %}
            </select>
        </div>
    <div class="space">
        <p class="enter"> Instructor </p>
        <select name="year" class="prof" id="year"> 

             {% for courses in col %}

                    <option>{{courses.instructor}} </option>
               
             {% endfor %}
        </select>
    </div>

</div>

 <div class="uconn">
    <div class="empty"></div> 
     <button id="rate"> Rate </button>
</div>`
})

remove.addEventListener('click', function(){
    extra.innerHTML = `<div></div>`
})