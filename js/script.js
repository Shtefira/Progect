"use strict";

// циклы для создания поверхностных копий

// function Copy (mainObj){
//     let objCopy = {};
//     let key;
//     for (key in mainObj){
//         objCopy [key] = mainObj [key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };
// // const newNumbers = Copy (numbers);

// // newNumbers.b = 10;
// // console.log (newNumbers);
// // console.log (numbers);


// //Object.assign
const add = {
    d:17,
    e:20
};
const numbers = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4
    }
};
// console.log (Object.assign(numbers,add));

const clon = Object.assign ({},add);
clon.d = 20;
// console.log (add);
// console.log (clon);

// const oldArray = ['a','b','c'];
// const newAarray = oldArray.slice ();
// newAarray [1] = 'mama';
// console.log (oldArray);
// console.log (newAarray);

// const video = ['a','b','c'],
//       blog = ['d', 'e', 'f'],
//       internet = [...video,...blog,'q', 'j'];
//  console.log (internet);

// function logic (a,b,c){
//     console.log (a);
//     console.log (b);
//     console.log (c);
// }
// const num = [2, 255, 7];
// logic (...num);

// const oldArray = ['a','b','c'];
// const newAarray = [...oldArray];
// newAarray [0] = 'mama';
// console.log (newAarray);

const add2 = {
    d:17,
    e:20
};
const newadd2 = {...add2};
newadd2.d = 3555;
console.log (newadd2);