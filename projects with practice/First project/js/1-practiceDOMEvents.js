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

//Удалить все рекламные блоки со страницы (правая часть сайта)
const marketing = document.querySelectorAll('.promo__adv img');
deleteMarketing(marketing);
function deleteMarketing(parent){

    parent.forEach(item => {
     item.remove();
    });
}


//Изменить жанр фильма, поменять "комедия" на "драма"
const poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre');

      genre.textContent = 'Драма';
//Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. 
//Реализовать только при помощи JS
poster.style.backgroundImage = 'url("../img/bg.jpg")';


//Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту + Добавить нумерацию выведенных фильмов
const movieList = document.querySelector('.promo__interactive-list');
creatingMovieList(movieDB.movies ,movieList);

    function creatingMovieList(films, parent){  
        parent.innerHTML = '';
        films.sort();

        films.forEach((item, i) => {
         parent.innerHTML += 
            `
            <li class="promo__interactive-item">${++i}) ${item}
             <div class="delete"></div>
             </li>
            `;
        });

        //3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                creatingMovieList(movieDB.movies ,movieList); //нумерация поправлялась при удалении 
            });
            
        });
    }

/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
 Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
*/
const inputData = document.querySelector('.adding__input');
const addMovieBtn = document.querySelector('.addMovie');
const checkBox = document.querySelector('[type="checkbox"]');

addMovieBtn.addEventListener('click', (event) => {
    event.preventDefault(); 

    if(checkBox.checked){alert("любимый фильм")}

    if(inputData.value){
    (inputData.value.length < 21) 
    ? movieDB.movies.push(inputData.value) 
    : movieDB.movies.push(inputData.value.substr(0, 21) + "...");
    inputData.value = '';
    }

    creatingMovieList(movieDB.movies ,movieList);
    console.log(movieDB);
});

//3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
//<div class="delete"></div>

});