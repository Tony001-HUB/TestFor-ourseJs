
//получить класс под определённым индексом
const allBtns = document.querySelectorAll('button')
      wrapper = document.querySelector('.btn-block');

/*
console.log(allBtns[0].classList.item(0));

//добавить класс кнопке можно через , добавлять
console.log(allBtns[0].classList.add('red'));

//удалить класс
console.log(allBtns[0].classList.remove('red'));


//тоглить классы, то есть если он есть - удалим
//а если его нет - то добавится
console.log(allBtns[0].classList.toggle('red'));


//проверим, на наличие класса
if(allBtns[1].classList.contains('red')){
    console.log('данный класс существует');
}
*/

//пример работы появления бургерного меню с добавлением и удалением класса.

allBtns[0].addEventListener('click', () => {
    /* //подробно:
    if(!allBtns[1].classList.contains('red'))
    {
        allBtns[1].classList.add('red');
    } else{
        allBtns[1].classList.remove('red');
    }
    */
    // так круче:
    allBtns[1].classList.toggle('red');
});


// ДЕЛЕГИРОВАНИЕ. Реагирует только тогда когда у элемента есть класс contains('blue')
wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.classList.contains('blue')){
        console.log('HELLO');
    }

});

//второй вариант через matches('button.red'), его like сотрудники googl'а
wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.matches('button.red')){
        console.log('HELLO');
    }

});



