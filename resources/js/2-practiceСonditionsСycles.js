/* Задание на урок:

4) Потренироваться и переписать цикл еще двумя способами*/

/*
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
*/
questionsAboutFilm();
function questionsAboutFilm(){

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели? ", 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let nameFilm;
let ratingOfFilm;

for(let i=0; i < 2; i++)
{
    nameFilm = prompt("Один из последних просмотренных фильмов?", "");
    ratingOfFilm = prompt("На сколько оцените его?", 0);
}
personalMovieDB.movies[nameFilm] = ratingOfFilm;


console.log(personalMovieDB);

/*
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять
*/
(nameFilm === "") ? questionsAboutFilm() : console.log(`Спасибо за ответ`);
(nameFilm === null) ? questionsAboutFilm() : console.log(`Спасибо за ответ`);
(nameFilm.length === 50) ? questionsAboutFilm() : console.log(`Спасибо за ответ`);

/*
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
*/
if (personalMovieDB.count < 10) 
{
    alert("Просмотрено довольно мало фильмов");
}

}
