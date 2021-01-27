/* Задание на урок:

P.S. Функции вызывать не обязательно*/

/*
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
*/

const personalMovieDB = {
    //count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB()
{
    if(personalMovieDB.privat == false){

        console.log(`Главный объект программы`);

    }
}

/*
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/
writeYourGenres(3);
function writeYourGenres(numberOfRepetitionsQuestion){

    for(let i=1; i <= numberOfRepetitionsQuestion; i++)
    {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }

    console.log(personalMovieDB);
}