"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalMovieDB ={
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const answer1 = prompt ('Один из последних просмотренных фильмов?',''),
      answer2 = +prompt ('На сколько ві его оцените?', ''),
      answer3 = prompt ('Один из последних просмотренных фильмов?',''),
      answer4 = +prompt ('На сколько ві его оцените?', '');

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;

console.log (personalMovieDB);


//alert ('are you slept well?');
//console.log (alert);

//const result = confirm ("are you shue?");
//console.log (result);

//const answer = prompt ("are you married?", "");
//console.log (typeof(answer));
//const answer2 = prompt ('Do you know me?','');
//console.log (typeof(answer2));

// const anwers = [];
// anwers [0] = prompt (' name?','');
// anwers [1] = prompt ('surname','');
// anwers [2] = prompt ('age','');
// console.log (typeof(anwers));

// const answername = prompt ('What is your nme?');

// const place = prompt ('where are you from?');
// alert(`Hello, ${answername}, nice to meet you!${place} its a great place!`);

//console.log (2+2*2!=='6');


// const a = false,
//       c = false,
//       b = false;  
// console.log (a||b||!c);
