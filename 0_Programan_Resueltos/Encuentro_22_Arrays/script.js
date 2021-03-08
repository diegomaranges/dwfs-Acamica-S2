/********** Actividad 1 Stop ***************/

let userInput = "";
let elementsArray = [];
let conditional = true;

do {
    userInput = prompt("ingrese un valor para el array o ingrese la palabra Stop para terminarlo.", 'Stop');
    conditional = (userInput !== "Stop");
    console.log(userInput);
    if (conditional) {
        elementsArray.push(userInput);
    }
} while (conditional);

console.log(elementsArray);

/*************** Actividad 2 Dividir Arrays ***************/

let arrayPares = [];
let arrayImpares = [];
let arrayNaN = [];
let numberInput = 0;

do {
    userInput = prompt("ingrese un valor numeroico para el array o ingrese el numero 0 para terminarlo.", '0');
    conditional = (userInput !== "0");
    if (!conditional) {
        break;
    }
    numberInput = parseInt(userInput);
    if (isNaN(numberInput) || numberInput.toString().length !== userInput.length) { //2222a -> 2222 / aaaz2
        arrayNaN.push(userInput);
    } else if (numberInput % 2 === 1) {
        arrayImpares.push(numberInput);
    } else {
        arrayPares.push(numberInput);
    }
} while (conditional);

console.log(arrayPares);
console.log(arrayImpares);
console.log(arrayNaN);

/*********** Actividad 3 Eliminar Extremos **********/
let arrayOfNumbers = [];

do {
    userInput = prompt("ingrese un valor numeroico para el array o ingrese el numero 0 para terminarlo.", '0');
    conditional = (userInput !== "0");
    if (!conditional) {
        break;
    }
    numberInput = parseInt(userInput);
    if (!isNaN(numberInput) && numberInput.toString().length === userInput.length) { //2222a -> 2222 / aaaz2
        arrayOfNumbers.push(numberInput);
    }
} while (conditional);

arrayOfNumbers.sort((a, b) => a - b); // < 0 menor, > 0 mayor, = 0 igual
arrayOfNumbers.splice(0, 1);
arrayOfNumbers.splice(arrayOfNumbers.length - 1, 1);
console.log(arrayOfNumbers);

/******** Actividad 4 Dividir Arrays ***********/

let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];
let inputArray = [];

do {
    userInput = prompt("ingrese un valor numeroico para el array o ingrese el numero 0 para terminarlo.", '0');
    conditional = (userInput !== "0");
    if (!conditional) {
        break;
    }
    inputArray.push(userInput);
} while (conditional);

console.log(inputArray);

if (inputArray.length % 3 === 1) {
    inputArray.splice(0, 1);
} else if (inputArray.length % 3 === 2) {
    inputArray.splice(0, 1);
    inputArray.splice(inputArray.length - 1, 1);
}

let newLength = inputArray.length / 3;

console.log(inputArray);
arrayOne = inputArray.splice(0, newLength);
console.log(arrayOne);
console.log(inputArray);
arrayTwo = inputArray.splice(0, newLength);
console.log(arrayTwo);
console.log(inputArray);
arrayThree = inputArray.splice(0, newLength);
console.log(arrayThree);
console.log(inputArray);
