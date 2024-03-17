let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})


let search = document.querySelector('#search');
let results = document.querySelector('#results');

search.addEventListener('click', function() {
   results.innerHTML = ` <section class="results">
   <div class="center">
   <div class="box">
       <div class="row">
           <img src="../img/profile.svg" class="rounded border">
           <a href="../html/rating.html" class="professor">Professor McLaughlin</a>
       </div>
       <div class="row2">
           <p class="small">STAT 1100Q</p>
           <button id="add"> Add Course </button>
       </div>
    
   </div>
</div>

<div class="center">
   <div class="box">
       <div class="row">
           <img src="../img/profile.svg" class="rounded border">
           <a href="../html/rating.html" class="professor">Professor Cady</a>
       </div>
       <div class="row2">
           <p class="small">BIOL 1107</p>
           <button id="add"> Add Course </button>
       </div>
    
   </div>
</div>
</section>`
})

let profile = document.querySelector('#profile');
profile.addEventListener('click', function() {
    window.location = '../html/profile.html';
})




