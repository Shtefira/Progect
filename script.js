'use strict';

//filter - для фильтрации данных из одного массива в другой

// const names = ['Ivan', 'Iren', 'Ekaterina', 'Evgenia'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
//  });
// console.log (shortNames);


//map - для трансформации данных из массива в др. массив

// const answers = ['IvAn', 'IreN', 'EkatErina'];

// const res = answers.map( item => item.toLowerCase());

// console.log(res);


// every -перебирает массив и возвращает нам правда/ложь если ВСЕ из эл. подошли под критерий перебора
// some - перебирает массив и возвращает нам правда/ложь если хоть ОДИН из эл. подошел под критерий перебора

// const arr = [4, 'Ivan', 'ndfvsf'];

// console.log(arr.some(item => typeof(item) === 'number'));

// console.log(arr.every(item => typeof(item) === 'string'));


//reduce - собирает массив в одно единое целое, как бы склеевает и помещает в единое значение

// const arr = [4, 5, 1, 2, 3, 6];

// const res = arr.reduce((sum, number) => sum  + number);
// console.log(res);
// console.log(typeof(res));

// const arr = ['Ivan', 'Iren', 'Ekaterina'];

// const res = arr.reduce((sum, number) => `${sum}, ${number}`, 'Shtefanesa');
// console.log(res);


// const obj = {
//     ivan: 'person',
//     anna: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'person')
// .map(item => item[0]);

// console.log(newArr);