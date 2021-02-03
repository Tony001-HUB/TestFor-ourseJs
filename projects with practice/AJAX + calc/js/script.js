const usdInput = document.querySelector('#usd'),
      rubInput = document.querySelector('#rub');


rubInput.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json; charset=UTF-8')

    //остановился на 12.42

});