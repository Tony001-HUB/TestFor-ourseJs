const btn = document.querySelector('.eventBtn'),
      box = document.querySelector('.box');


btn.addEventListener('click', () => {
    console.log(box.scrollTop); // сколько пролистали
    console.log(box.getBoundingClientRect()); //получить координаты и все размеры сторон элемента
    //box.scrollTop = 600; // перейти к примеру к какой-то главе
});


//можно изменять только: scrollTop, scrollLeft