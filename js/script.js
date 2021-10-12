"use strict";

const personalMovieDB ={
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms : function  (){
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
    },
    detectPersonalLevel : function (){
        if (personalMovieDB.count < 10){
            alert ('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count <= 30){
            alert ('Вы классический зритель!');
           } else if (personalMovieDB.count > 30){
                alert ('Вы киноман!!!');
           } else {
               alert ('Произошла ошибка!');
           }
    },
    showMyDB : function (hidden){
        if (!hidden){
            console.log (personalMovieDB);
        } 
    },
    writeYourGenres : function (){
        for (let i=1; i<2; i++){
            //  let genre = prompt (`Ваш любимый жанр под номером ${i}`);
            
            // if (genre != null && genre!=''){
            //     personalMovieDB.genres[i - 1] = genre;

            // } else {
            //     i--;
            //     console.log ('Rong information!');
            // }

            // or


            let genres = prompt (`Введите ваши любимые жанры через запятую`) ; 
            if (genres != null && genres!=''){
                    personalMovieDB.genres = genres.split (', ');
                    personalMovieDB.genres.sort ();
    
                } else {
                    i--;
                    console.log ('Rong information!');
                }
        }
        personalMovieDB.genres.forEach (function ( item, i){
             console.log (`Любимый жанр ${i+1} это ${item}`);
        });
    },
    toggleVisibleMyDB : function (){
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }

};
//  console.log (personalMovieDB);
//  personalMovieDB.start();
//  personalMovieDB.toggleVisibleMyDB ();
//  personalMovieDB.showMyDB ();
