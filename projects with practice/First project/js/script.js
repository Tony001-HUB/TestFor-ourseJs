/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1) Удалить все рекламные блоки со страницы (правая часть сайта)
const marketing = document.querySelectorAll('.promo__adv img');

marketing.forEach(item => {
    item.remove();
});


//2) Изменить жанр фильма, поменять "комедия" на "драма"
const poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre');

      genre.textContent = 'Драма';
//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. 
//Реализовать только при помощи JS
poster.style.backgroundImage = 'url("../img/bg.jpg")';


//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += 
    `
    <li class="promo__interactive-item">${++i}) ${item}
    <div class="delete"></div>
    </li>
    `;
});