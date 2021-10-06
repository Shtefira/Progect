"use strict";

let numberOfFilms;

function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
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
 
function rememberMyFilms () {
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
 rememberMyFilms();

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
    }
}
showMyDB();

// function writeYourGenres(){
    
//     for (let i = 1; i<4; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`) ;
        
//     }
// }
// writeYourGenres ();

function writeYourGenres(){
    let numGenres = 1;
    while (numGenres<4){
        personalMovieDB.genres[ numGenres - 1]= prompt(`Ваш любимый жанр под номером ${numGenres}`) ;
       numGenres++;
    }
     
}
writeYourGenres ();

// console.log (personalMovieDB); 


// Второй вариант
// function showMyDB(){
//     (personalMovieDB.privat === false )? console.log (personalMovieDB) : console.log ('error');
// }
// showMyDB();


        
          
  
   

//второй способ цикла
    // let i = 0 ;
    // do { 
    //     const answer1 = prompt ('Один из последних просмотренных фильмов?',''),
    //           answer2 = +prompt ('На сколько вы его оцените?', '');
    //           i++;     
              
    //     if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 10 ){
    //         console.log ('done');
    //         personalMovieDB.movies[answer1] = answer2;
           
    //     } else {
    //         console.log ('error');
    //         i--;
    //     }
    

    // }
    // while (i<2);


              // Второй способ условий  
            //   if (answer1 == null){
            //       console.log ('error');
            //       i--;
            //   } else if (answer1 == ''){
            //     console.log ('error');
            //     i--;
            //   } else if  (answer1.length > 10){
            //     console.log ('error');
            //     i--;
            //   } else {
            //       personalMovieDB.movies[answer1] = answer2;
            //       console.log ("done");
                  
            //   }
            //   if (answer2 == null) {
            //       console.log ("error");
            //       i--;
            //   }  else if (answer2 == "") {
            //       console.log ('error');
            //       i--;
            //   } else {
            //       personalMovieDB.movies[answer1] = answer2;
            //       console.log ("done");
                  
                  
       

    

