'use strict';

const faceElement = document.querySelector('.js-face');

const smileFace = faceElement.innerHTML = ':)' 

function handleClick (ev){
    ev.preventDefault();
    if (faceElement.innerHTML === ':)'){
        faceElement.innerHTML = ';)'
    } 
    else {
        faceElement.innerHTML = ':)'
    }
};

faceElement.addEventListener('click', handleClick);