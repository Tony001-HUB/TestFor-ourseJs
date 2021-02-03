const person = {
 name: 'Pop',
 age: 30,
 lastName: {
    nameL: 'KEKLOL'
 }
};

//console.log(JSON.parse(JSON.stringify(person))); // конверт к json(stringify) из (parse)

//глубокое копирование объекта не зависимого от person, при изменении
const clone = JSON.parse(JSON.stringify(person));
clone.lastName.nameL = 'LOLKEK';

console.log(person);
console.log(clone);