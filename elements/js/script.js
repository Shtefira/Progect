'use strict';

const box = document.getElementById ('box');
console.log (box);

const dtns = document.getElementsByTagName ('button');
console.log (dtns[2]); // если нам нужно взаимодействовать с конкретной кнопкой

const circle = document.getElementsByClassName ('circle');
console.log (circle);

const hearts = document.querySelectorAll ('.heart');

hearts.forEach (item => {
    console.log (item);
});

const oneHeart = document.querySelector ('#box');
console.log (oneHeart);