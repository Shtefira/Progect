"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');
    }
}
start();

const personalMovieDB ={
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms (){
    for (let i=0; i<2; i++){
        const answer1 = prompt ('Один из последних просмотренных фильмов?',''),
              answer2 = +prompt ('На сколько вы его оцените?', '');
               
              //Первый способ цикла
              if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50 ) {
                    personalMovieDB.movies[answer1] = answer2;
                    console.log ('done');
                }   else {
                    console.log ('error');
                    i--;
               }
            }
}
rememberMyFilms ();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        alert ('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count <= 30){
        alert ('Вы классический зритель!');
       } else if (personalMovieDB.count > 30){
            alert ('Вы киноман!!!');
       } else {
           alert ('Произошла ошибка!');
       }
}
detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log (personalMovieDB);
    } else {
        console.log ('This is privat information');
    }
}
showMyDB();

function writeYourGenres(){
    for (let i=1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
        // const genre = prompt (`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;

    }
}
writeYourGenres();
    

       



