"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalMovieDB ={
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

    for (let i=0; i<2; i++){
        const answer1 = prompt ('Один из последних просмотренных фильмов?',''),
              answer2 = +prompt ('На сколько вы его оцените?', '');
              
                if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50 ) {
                    personalMovieDB.movies[answer1] = answer2;
                    console.log ('done');
                }   else {
                    console.log ('error');
                    i--;
                }
                  
     }  

     if (personalMovieDB.count < 10){
         alert ('Просмотрено довольно мало фильмов!');
     } else if (personalMovieDB.count <= 30){
         alert ('Вы классический зритель!');
        } else if (personalMovieDB.count > 30){
             alert ('Вы киноман!!!');
        } else {
            alert ('Произошла ошибка!');
        }
       
console.log (personalMovieDB);


