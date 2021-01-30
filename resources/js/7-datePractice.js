//const newDate = new Date();

//console.log(newDate);

// отсчет идет от 70-го года. const newDate = new Date(0);
// чтобы обратиться к году меньше 70, надо передать new Date(-999999999999); ВСЕ В МИЛИСЕКУНДАХ

//console.log(newDate.getFullYear()); //получим2 2021, исто год
//console.log(newDate.getDay()); // нумерация с 0 - воскресенье 6-суббота 
// если UTC - ТО +0 ЧАСОВ
//console.log(newDate.getTime()); //Сколько прошло милисекунд с 1970-го года, поместить сюда new Date(сюда); узнаем скок прошло

//через set установить.

//засечь время выполнения:

let start = new Date();


for(let i = 0; i < 1000000; i++){
    i+=30;
}

let end = new Date();

alert(`выполнено за ${end - start} миллисекунд`);