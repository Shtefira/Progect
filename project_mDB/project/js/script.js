/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener ('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll ('.promo__adv img'),
          content = document.querySelector ('.promo__bg'),
          genre = content.querySelector ('.promo__genre'),
          movieList = document.querySelector ('.promo__interactive-list'),
          addForm = document.querySelector ('form.add'),
          addInput = addForm.querySelector ('.adding__input'),
          checkBox = addForm.querySelector ('[type="checkbox"]');

    addForm.addEventListener ('submit', e => {
        e.preventDefault ();

        let newFilm = addInput.value;
        const favourit = checkBox.checked;

       if (newFilm){

        if (newFilm.length > 21){
            newFilm = `${newFilm.substring (0,22)}...`;
            
        }

        if (favourit){
            console.log ("Добавляем любимый фильм");
        }

        movieDB.movies.push (newFilm);
        sortArr (movieDB.movies);
        creatList (movieDB.movies, movieList);
       
       }
       e.target.reset ();

    });

    const deleteAdv = (arr) => {

        arr.forEach (item => {
            item.remove ();
        });
    };
    deleteAdv (adv);

    const makeChanges = () =>{
              
        genre.textContent = ('драма');

        content.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges ();

    const sortArr = (arr) =>{
        arr.sort ();
    };
    
  

    function creatList (films, parent) {

        parent.innerHTML = '';
        sortArr (films);
    
        films.forEach ( (item, i) =>{
    
        parent .innerHTML +=`<li class="promo__interactive-item">${i + 1} ${item}
       <div class="delete"></div>
        </li>`;
    
        });

        document.querySelectorAll('.delete').forEach ((btn, i) => {

            btn.addEventListener ('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice (i, 1);

                creatList (films , parent);
            });
        });


    }
    creatList (movieDB.movies , movieList);
    
   
   

    
    
});

