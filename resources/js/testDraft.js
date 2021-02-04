/*
console.log('загрузка данных');

//resolve успешно
//reject ошибка
const prm = new Promise((resolve, reject) => {

   setTimeout(() => {
      console.log('подготовка данных...');

      const product = {
         name: 'TV',
         price: 2000
      };

   resolve(product);
   }, 2000);

});

prm.then((product) =>{
   new Promise((resolve, reject) => {

      setTimeout(() => {
         product.status = 'order';
         resolve(product);
      }, 2000);
   
}).then(product => {
   product.modify = true;
   return product;
}).then(() => {
   console.log(product);
}).catch(() =>{
   console.log('ошибка');
});


});
*/

const test = time => {
   return new Promise(resolve => {
      setTimeout(() =>{
         resolve();
      }, time);
   });
};

//ждем окончание всех промисов
Promise.all([test(1000), test(2000)]).then(() =>{
      console.log('all');
});

//ждем самый быстры пропис и делаем какие то действия 
Promise.race([test(1000), test(2000)]).then(() =>{
   console.log('race');
});