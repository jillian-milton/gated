let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let search = document.querySelector('#search');
let results = document.querySelector('#results');
// let hide = document.querySelector('.hide');

search.addEventListener('click', function() {
   results.innerHTML = ` <section class="results">
   <div class="center">
   <div class="box">
       <div class="row">
           <img src="../img/profile.svg" class="rounded border">
           <p class="professor">Professor Cady</p>
       </div>
       <div class="row2">
           <p class="small">CHEM 1127Q</p>
           <button id="add"> Add Course </button>
       </div>
    
   </div>
</div>

<div class="center">
   <div class="box">
       <div class="row">
           <img src="../img/profile.svg" class="rounded border">
           <p class="professor">Professor Abbott</p>
       </div>
       <div class="row2">
           <p class="small">BIOL 1107</p>
           <button id="add"> Add Course </button>
       </div>
    
   </div>
</div>
</section>`
})



