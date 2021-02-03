const usdInput = document.querySelector('#usd'),
      rubInput = document.querySelector('#rub');


rubInput.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json; charset=UTF-8')
    request.send();

    //следим за ответом сервера
    request.addEventListener('load', () =>{
        if(request.status == 200){
            const data = JSON.parse(request.response);
            usdInput.value = (+rubInput.value / data.current.usd).toFixed(2);
        }else{
            usdInput.value = 'Что-то пошло не так';
        }
    });
   
    //status - статуc
    //statusText 
    //response - ответ
    //readyState - полная загрузка
});