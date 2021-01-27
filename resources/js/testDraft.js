let warrior = {
    armor: 100
}

let tony = {
    attack: 500
}
tony.__proto__ = warrior; 
Object.setPrototypeOf(tony, warrior);
const john = Object.create(warrior); 