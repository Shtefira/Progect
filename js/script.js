"use strict";

const soldier = {
    health : 400,
    armor : 100,
    sayHello : function (){
        console.log ('Hello!');
    }
};

// const jonh = Object.create (soldier);
// jonh.armor = 200;
// console.log (jonh.health);

const jonh = {
    health : 150
};

Object.setPrototypeOf (jonh,soldier);
jonh.sayHello();
console.log (jonh.armor);