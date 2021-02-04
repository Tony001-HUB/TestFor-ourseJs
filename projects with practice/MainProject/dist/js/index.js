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
const deadLine = '2021-05-02';


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

const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal');

modalTrigger.forEach(btn => {
btn.addEventListener('click', openModal);
});

function closeModal() {
modal.classList.add('hide');
modal.classList.remove('show');
document.body.style.overflow = '';
}

function openModal() {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
clearInterval(modalTimerId);
}

modal.addEventListener('click', (event) => {
if (event.target === modal || event.target.getAttribute('data-close') == "") {
    closeModal();
}
});

document.addEventListener('keydown', (event) => {
if (event.code === "Escape" && modal.classList.contains('show')) { 
    closeModal();
}
});

const modalTimerId = setTimeout(openModal, 300000);


function showModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
}
}
window.addEventListener('scroll', showModalByScroll);


    //использование классов на практике
    const form = document.querySelectorAll('.menu__item'),
          subtitleItem = document.querySelector('.menu__item-subtitle'),
          descrItem = document.querySelector('.menu__item-descr'),
          totalPriceItem = document.querySelector('.menu__item-total');


    class Menu {
        //"img/tabs/vegy.jpg"

        constructor(subtitle, descr, totalPrice, src, alt, parentSelector, ...classes) {
          this.subtitle = subtitle;
          this.descr = descr;
          this.totalPrice = totalPrice;
          this.src = src;
          this.alt = alt;
          this.parent = document.querySelector(parentSelector);
          this.classes = classes;
          this.transfer = 3;
          this.changeToBY();
        }
      
        changeToBY(){
            this.totalPrice  = +this.totalPrice * this.transfer;
        }


        render(){
            const element = document.createElement('div');

            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); //добавить класс элементу
            }

            element.innerHTML = `         
                    <img src = ${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.totalPrice}</span> BY/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
      
    }

              //subtitle, descr, totalPrice, src, alt, parentSelector
            new Menu(
                'Меню "Фитнес"',
                'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
                6,
                'img/tabs/vegy.jpg',
                'https://im0-tub-by.yandex.net/i?id=b7503e8cb6590fff097d562bdba966c8&n=13',
                '.menu .container',
                'menu__item'
            ).render();

            new Menu(
                'Меню “Премиум”',
                'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
                10,
                'img/tabs/elite.jpg',
                'https://im0-tub-by.yandex.net/i?id=b7503e8cb6590fff097d562bdba966c8&n=13',
                '.menu .container',
                'menu__item'
            ).render();


            new Menu(
                'Меню "Постное"',
                'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
                2,
                'img/tabs/post.jpg',
                'https://im0-tub-by.yandex.net/i?id=b7503e8cb6590fff097d562bdba966c8&n=13',
                '.menu .container',
                'menu__item'
            ).render();


    //FORMS работа с локальным сервером
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'спасибо, мы с вами обязательно свяжемся!',
        failure: 'error попробуйте позже'
    };

    forms.forEach(from => {
        postData(from);
    });

    
    function postData(form){
//submit сработает каждый раз когда мы патаемся отправить какую-то форму
        form.addEventListener('submit', (event) =>{
            event.preventDefault();

            const statusMess = document.createElement('img');
            statusMess.src = message.loading;
            statusMess.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMess);


            const formData = new FormData(form); //откуда надо собрать данные FormData работает с тегом name в html

           
            //при использовании JSON нам надо FormData перебрать и конвертнуть в обычный {}
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            
            fetch('server.php', {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);        
                statusMess.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() =>{
                form.reset(); // сбросим форму   
            });

        });
    }


    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }


    

});