"use strict";

const arr = [101,12,203,16,10];
arr.sort (comparNum);
console.log (arr);
function comparNum (a,b){
    return a-b;
}

// arr.pop ();
// arr.push (11);

// for (let i=0; i<arr.length; i++){
//     console.log (arr [i]);
// }

// for (let namber of arr){
//     console.log (namber);
// }

// arr.forEach (function (item, i, arr){
//     console.log (`${i} : ${item} incide of array ${arr}`);
// });

// const str = prompt ("Какой товар вас интересует?","");
// const products = str.split (', ');
// console.log (products);
// console.log (products.join (';'));
