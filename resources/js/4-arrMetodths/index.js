import { fruitsArr } from './fruits.js';
import { createFruit, createFruits } from './fruitRenderers.js';
const fruitContainer = document.querySelector('.fruit-container');


//сейчас такие задачи:
//1) сделать массив фруктов +
//2) создать функцию createFruit, которая вернет html для переданного фрукта +
//3) написать функцию createFruits, которая вернет html для переданного массива фруктов
//4) отобразить наш массив фруктов

//- отобразите все фрукты, начиная с третьего включительно;
function Task1()
{
    let resultFruitsArr= fruitsArr.slice(3) 
    fruitContainer.insertAdjacentHTML('beforeend', createFruits(resultFruitsArr));
}

function Task2()
{

    let searchJPG = fruitsArr.find(
        x => x.image.includes('.jpg')
    );
    
    fruitContainer.insertAdjacentHTML('beforeend', createFruit(searchJPG));
}

//Task2();
//fruitContainer.insertAdjacentHTML('beforeend', result);

//трансформируйте массив фруктов в массив названий (в результате мы получим такой массив: [“Apple”, “Banana”, “Cherry”, ...]
function Task3()
{
    var myNameArray = fruitsArr.map( 
        function ( currentItem ) {
          return currentItem.name;
        }
      );
      console.log(myNameArray);

      //let myNameArray = array.map( currentItem => currentItem.name );
}


//по длине названий
function Task4()
{
    let arrayLengthsNamesOfFruits;
    let myNameSort;
    let myNameArray;

    myNameSort = fruitsArr.sort(( argument1, argument2 ) =>  argument1.name.length - argument2.name.length); 
    console.log(myNameSort); // сортировка по длине названия

    myNameArray = myNameSort.map( currentItem => currentItem.name );
    console.log(myNameSort); // вырезали из отсортированного fruitsArr ток названия

    for(let i=0; i < myNameArray.length; i++)//переберем массив получим сдлины, сформируем новый массив
    {
        arrayLengthsNamesOfFruits = myNameArray[i].length;
        console.log(arrayLengthsNamesOfFruits); 
    }
}

//без сортировки 
function Task5()
{
    let arrayLengthsNamesOfFruits = [];
    let myNameArray;

    myNameArray = fruitsArr.map( currentItem => currentItem.name );
    console.log(myNameArray); 

    for(let i=0; i < myNameArray.length; i++)//переберем массив получим сдлины, сформируем новый массив
    {
        arrayLengthsNamesOfFruits.push(myNameArray[i].length) //новый массив в котором ток длины
    }
    console.log(arrayLengthsNamesOfFruits); // вывожу его
}


//без сортировки лучшенный.
function Task6()
{
    let arrayLengthsNamesOfFruits = [];

    arrayLengthsNamesOfFruits.push(fruitsArr.map( currentItem => currentItem.name.length ));
    console.log(arrayLengthsNamesOfFruits); 
}


//удалить везде а
function Task7()
{

    for(let i=0; i < fruitsArr.length; i++)
    {
        fruitsArr[i].name = fruitsArr[i].name.replace(/[^b-z]/gi, '');
    }
    console.log(fruitsArr); 
    fruitContainer.insertAdjacentHTML('beforeend', createFruits(fruitsArr));
}


// напишите все названия фруктов с маленькой буквы;

function Task8()
{
    for(let i=0; i < fruitsArr.length; i++)
    {
        fruitsArr[i].name = fruitsArr[i].name.toLowerCase();
    }
    console.log(fruitsArr); 
    fruitContainer.insertAdjacentHTML('beforeend', createFruits(fruitsArr));
}

//выберите фрукты, чей индекс кратен двум;
function Task9()
{

    const filteredFruits = fruitsArr.filter((fruit, index) => index % 2 == 0);

    console.log(filteredFruits); 
}




//выберите фрукты, у которых в названии есть буква 'r';
function Task10()
{
    const filteredFruits = fruitsArr.filter((fruit)=> fruit.name.includes('r'));

    fruitContainer.insertAdjacentHTML('beforeend', createFruits(filteredFruits));
}


//- выберите фрукты, у которых картинка имеет расширение png;
function Task11()
{
    const filteredFruits = fruitsArr.filter((fruit)=> fruit.image.includes('.jpg'));

    fruitContainer.insertAdjacentHTML('beforeend', createFruits(filteredFruits));
}



//- отсортируйте фрукты по имени в алфавитном порядке;
function Task12()
{
    fruitsArr.sort(( a, b ) => a.name > b.name)
    console.log( fruitsArr );
    
}



//- вычислите общую сумму букв всех фруктов
function Task13()
{
    let count = 0;

    // изменить через reduc
    for(let i=0; i < fruitsArr.length; i++)
    {
        count += fruitsArr[i].name.length;
    }
    console.log(count);
}


// изменить через reduc
function Task14()
{
    let sum = 0;
    sum = fruitsArr.reduce(
        (result, currentItem) => {
          return result + currentItem.name.length;
      }, 0
    )
    
    console.log(sum);
}


//из массива в строку + abc начало
function Task15()
{
    const array = ['apple', 'banana', 'pear'];

    const sum = array.reduce(
        (result, currentItem) => {
          return result + currentItem + " ";
      },
      "abc "
    )
    
    console.log(sum);
}



//- вычислите, сколько раз встречается буква 'а' во всех наших фруктах;,
function Task16()
{
    let countSum = 0;
    countSum = fruitsArr.reduce(
        (result, currentItem) => {
          return result + findLetterCountInWord(currentItem.name, 'a');
      }, 0
    )

    console.log(countSum);
}


function findLetterCountInWord(word, letter)
{
   return (word.split(letter).length - 1);
}


//- количество букв 
function getReportAboutLettersString(str)
{
  const counters = {}

  for(let i=0; i < str.length; i++)
  {
    const letter = str[i];
    if(counters[letter] == undefined)
    {
        counters[letter] = 1; 
    }
    else
    counters[letter]++;
    }

  return counters;
}

getMaxLetterOfString(convertingArrayToString());
function getMaxLetterOfString(str)
{
    const report = getReportAboutLettersString(str);

    const countersArr = Object.entries(report);
  
    const maxItem = countersArr.reduce(function (max,  currentPair) {
        if ( currentPair[1] > max) {
          return  currentPair;
        } else {
          return max;
        }
      }, countersArr[0][1]);

      console.log(maxItem);

      return maxItem;
}
    

function convertingArrayToString()
{
    let str = '';

    str += fruitsArr.map(currentItem => currentItem.name.toLocaleLowerCase());
    
    console.log(str);

    return str;
}