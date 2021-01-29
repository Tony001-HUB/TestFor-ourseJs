document.addEventListener('DOMContentLoaded', () => {

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



});