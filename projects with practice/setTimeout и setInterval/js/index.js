//const myTime = setTimeout(function(text){ console.log(text)}, 2000, 'hi black man');
/*********************/

const btn = document.querySelector('.btn');
btn.addEventListener('click', myAnimation);
function myAnimation(){
    const animationElement = document.querySelector('.box');
    let position = 0;
    let id;

    id = setInterval(frame, 300);
    function frame(){
        if(position === 5){
            clearInterval(id);
        } else{
            position += 1;
            animationElement.style.top = position + "px";
            animationElement.style.left = position + "px";
        }
    }
}

/*
let myTime,
    count = 1;


btn.addEventListener('click', () => {
    //const myTime = setTimeout(logger, 2000); 
    myTime = setInterval(logger, 2000); 
});
//setInterval все равно сколько выполняется функция logger, он считает время 2000 и запускает ее заново.

function logger(){

    if(count == 3){  clearInterval(myTime); } //остановить
    console.log('hi');
    count+=1;
   
}


//рекурсивый setTimeout. строго каждые 0.3 секунды. 

let idTime = setTimeout(function log(){
    console.log('hi');

    idTime = setTimeout(log, 300);
}, 300);
*/