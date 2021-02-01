document.addEventListener('DOMContentLoaded', () => {

//ТАБЫ
const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContetnt = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent()
    {
        tabsContetnt.forEach(curentItem => {
     
            curentItem.style.display = 'none';

        });

        tabs.forEach(curentItem => {

            curentItem.classList.remove('tabheader__item_active');

        });
    }

    function showTabContent(itemNumber = 0){

        tabsContetnt[itemNumber].style.display = 'block';
        tabs[itemNumber].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        
        if(target && target.classList.contains('tabheader__item')){ //так как можем вместо таба(переключатель) тыкнуть в родителя
            tabs.forEach((curentItem, itemNumber) => {
                if(curentItem == target)
                {
                    hideTabContent();
                    showTabContent(itemNumber);
                }

            });
            
        }

    });

//ТАЙМЕР
const deadLine = '2021-02-02';


function getTimeRemaining(endTime){

    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24 )), // в сутках миллисекунд();
          hours = Math.floor((t / (1000 * 60 * 60) % 24)), //остаток от деления, чтобы часы были от 0 до 24 часа
          minutes = Math.floor((t / 1000 / 60) % 60), // так как минуты 0 - 60 : % 60 
          seconds = Math.floor((t / 1000) % 60);


    return { 
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

}

function getZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    }else{
        return num;
    }
}

function setClockOnPage(selector, endTime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

        updateClock(); // чтобы значения сразу не выводились из html, а брались из js.

        function updateClock(){
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }

}
    setClockOnPage('.timer', deadLine);



//вызов модального окна data-modal / data-close

    const modalTrigger = document.querySelectorAll("[data-modal]"), 
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    function closeAndShowModalWindow(cssClass){
        modal.classList.toggle(cssClass);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAndShowModalWindow('show');
        });
    });

    modalCloseBtn.addEventListener('click', () =>{
        closeAndShowModalWindow('show');
    });


    //закрытие окна кликом по любой части страницы кроме самого окошка event.target(куда тыкнул ползователь)
    modal.addEventListener('click', (event) => {
        if(event.target == modal){ 
            closeAndShowModalWindow('show');
        }
    });

    //закрытие по нажатию клавиши esc
    document.addEventListener('keydown', (event) => {
        if(event.code == 'Escape' && modal.classList.contains('show')){ //event.code js 
            closeAndShowModalWindow('show');
        }

    });
    


    //появление модального окна через в определённый момент.
    setTimeout(closeAndShowModalWindow('show'), 1000);


    //появление модального окна, когда пользователь долистал страницу до конца(один раз)
    // 1.прокрученная часть + 2.то что видит пользователь >= 3.конец страницы
    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){ 
            modal.classList.toggle('show');
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});