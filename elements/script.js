'use strict';

// localStorage.setItem('number1', 5);
// localStorage.setItem('number2', 10);
// localStorage.removeItem ('number1');
// localStorage.clear();

// console.log(localStorage.getItem('number2'));

const checkbox = document.querySelector ('#checkbox'),
      form = document.querySelector ('form'),
      change = document.querySelector('#color');

if (localStorage.getItem("isChecked") === "true"){
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
} 

checkbox.addEventListener ('change',() => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed'){
        form.style.backgroundColor = '#fff';
        localStorage.removeItem('bg');

    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }

});

const person = {
    name: 'Alex',
    age:25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('Alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('Alex')));