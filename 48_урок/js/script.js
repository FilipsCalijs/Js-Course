/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = document.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');


poster.style.backgroundImage = 'url("img/bg.jpg")';

//comedy.textContent = 'Драма';

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;
    
    if (newFilm){
        if (newFilm.length > 22){
        newFilm = `${newFilm.substring(0,22)}...`;
        
        }
        movieDB.movies.push(newFilm);
    sortArr(movieDB.movies)

    creatrMovieList(movieDB.movies, movieList);

    addForm.reset();

    if (favorite){
        console.log("Добовляем любимый фильм")
    }

    }

});




movieList.innerHTML = "";

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
}





const makeChanges = () => {
    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
}




const sortArr = (arr) =>{
    arr.sort();
}






function creatrMovieList(films, parent) {
    
    parent.innerHTML = "";  
    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            creatrMovieList(movieDB.movies, movieList);
        });
    });
}
makeChanges();

deleteAdv(adv);
creatrMovieList(movieDB.movies, movieList);


});