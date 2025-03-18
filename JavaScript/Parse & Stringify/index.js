// Parse

let object1 = '{"name": "Kharade", "age": "20","marrage":"false"}';
// let object2 = {name: kharade, age: 20};

const newObject = JSON.parse(object1);
const coversion = JSON.parse(newObject.marrage);

console.log(typeof coversion, coversion);


