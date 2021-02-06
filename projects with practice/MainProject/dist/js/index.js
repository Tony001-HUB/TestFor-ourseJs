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
    
            constructor(img, altimg, title, descr, price, parentSelector, ...classes) {
              this.title = title;
              this.descr = descr;
              this.price = price;
              this.img = img;
              this.altimg = altimg;
              this.parent = document.querySelector(parentSelector);
              this.classes = classes;
              this.transfer = 3;
              this.changeToBY();
            }
          
            changeToBY(){
                this.price  = +this.price * this.transfer;
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
                        <img src = ${this.img} alt=${this.altimg}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> BY/день</div>
                        </div>
                `;
                this.parent.append(element);
            }
          
        }
    
        const getResource = async (url, data) => {
            const result = await fetch(url);
    
            if(!result.ok){
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);
            }
    
            return await result.json();
        };
    
        /*getResource('http://localhost:3000/menu')
        .then(data => {   
            data.forEach(({img, altimg, title, descr, price}) => {
                new Menu(img, altimg, title, descr, price, '.menu .container').render();
            });
        });*/
    
        axios.get('http://localhost:3000/menu')
        .then(data => {   
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new Menu(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
    
        /* когда нам надо создать только 1 (мало) карточек, к примеру
        // getResource('http://localhost:3000/menu')
        //     .then(data => createCard(data));
    
        // function createCard(data) {
        //     data.forEach(({img, altimg, title, descr, price}) => {
        //         const element = document.createElement('div');
    
        //         element.classList.add("menu__item");
    
        //         element.innerHTML = `
        //             <img src=${img} alt=${altimg}>
        //             <h3 class="menu__item-subtitle">${title}</h3>
        //             <div class="menu__item-descr">${descr}</div>
        //             <div class="menu__item-divider"></div>
        //             <div class="menu__item-price">
        //                 <div class="menu__item-cost">Цена:</div>
        //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
        //             </div>
        //         `;
        //         document.querySelector(".menu .container").append(element);
        //     });
        // }
        */
    
        //FORMS работа с локальным сервером
        const forms = document.querySelectorAll('form');
    
        const message = {
            loading: 'img/form/spinner.svg',
            success: 'спасибо, мы с вами обязательно свяжемся!',
            failure: 'error попробуйте позже'
        };
    
        forms.forEach(from => {
            bindPostData(from);
        });
    
        const postData = async (url, data) => {
            const result = await fetch(url, {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: data
            });
    
            return await result.json();
        };
    
        
        function bindPostData(form){
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
    
                //formData.entries() to arr / Object.fromEntries to obj 
                const json =JSON.stringify(Object.fromEntries(formData.entries()));
    
    
                postData('http://localhost:3000/requests', json)
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
    
    
    //слайдер
    const btnPrevSlider = document.querySelector('.offer__slider-prev'),
          btnNextSlider = document.querySelector('.offer__slider-next'),
          currentVal = document.querySelector('#current'),
          totalVal = document.querySelector('#total'),
          allSlider = document.querySelectorAll('.offer__slide')
    
    let slideIndex = 3;
    showSlider();
    
    function plusSlide() {
        slideIndex += 1;
        if(slideIndex >= 5){
            slideIndex -= 1;
        }
        return `0${slideIndex}`
    }
          
    function minusSlide() {
        slideIndex -= 1;  
        if(slideIndex == 0){
            slideIndex = 1;
        }
        return `0${slideIndex}`
    }
    
    function showSlider(){
        allSlider.forEach(item => item.style.display = 'none');
        allSlider[slideIndex - 1].style.display = 'block';
    }
    
    btnPrevSlider.addEventListener('click',(event) => {
        currentVal.innerHTML = minusSlide();
        showSlider();
    });
    
    btnNextSlider.addEventListener('click',(event) => {
        currentVal.innerHTML = plusSlide();
        showSlider();
    });