'use strict';

// const yam = 'a';
// console.log(yam);

// const footer = document.querySelector('footer');
// footer.style.backgroundColor = 'red';

// toggleBackgroundColor.style.backgroundColor ='red';


console.log();

// function to toggle background color for leadership section
const backGround = document.querySelector('#background_color');
const h2 = document.querySelector('h2');
const closeBackColor = document.querySelector('.overlay');

const change = function (){
    // alert(`i love colors`);
    backGround.style.backgroundColor = 'black';
    h2.style.fontSize;
}

backGround.addEventListener('click', change);

// function closeChange(){
// // closeBackColor.style.backgroundColor = 'white';
// closeBackColor.classList.remove('background-color')

// }

// closeBackColor.addEventListener('click', closeChange)

// function to toggle background color for leadership section



// FUNCTION TO TOGGLE VISIBILITY ON THE LEADERSHIP SECTION
const toogleVis = document.querySelector('#toggle1');
const closeToogle = document.querySelector('#toggle_1');
const hidden = document.querySelector('.hidden');

console.log(toogleVis);
console.log(hidden);

const toggle = function(){
    // hidden.style.display = 'none';
    // hidden.classList.remove('hidden');
     hidden.style.opacity = 0;
 }

toogleVis.addEventListener('click', toggle)

const toggleChange = function(){
    // if(  hidden.style.display = 'none'){
        // toggle() = false;}

        // tried this logic up 👆😂

    // //  hidden.classList.remove('display')
    // }
    // hidden.classList.remove('hidden');
// hidden.style.display = '100';
 
}

// toogleVis.addEventListener('click', toggleChange())


// FUNCTION TO TOGGLE VISIBILITY ON THE LEADERSHIP SECTION