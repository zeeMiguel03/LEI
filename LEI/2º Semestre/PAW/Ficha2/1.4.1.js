/* //Figura 4
const myObject = {a: 1, b:2, c: 3};

for (const property in myObject) {
    console.log(property);
}

const myArray = [1, 2, 3];

for (const property in myArray) {
    console.log(property)
} */

//for each com objetos
const object = {a: 1, b: 2, c: 3};

for (const property in object) {
    console.log("Propriedade: "+property+" Objeto:"+object[property]);
}

const array = [1,2,3];

for (const property in array) {
    console.log(""+property+" "+array[property+""]);
}

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}
