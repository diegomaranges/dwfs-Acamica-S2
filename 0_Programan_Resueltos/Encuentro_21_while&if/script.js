/***** programan 1  *****/

let sumaTotal = 0;
let index = 0;

for (index = 0; index < 5; index++) {
    let userInput = parseInt(prompt("ingrese un numero", "5"));
    sumaTotal += userInput;
};
console.log(sumaTotal);
sumaTotal = 0;
index = 0;
while (index < 5) {
    let userInput = parseInt(prompt("ingrese un numero", "5"));
    sumaTotal = sumaTotal + userInput;
    index++;
}
console.log(sumaTotal);

/***** programan 2  *****/

sumaTotal = 0;
let promedio = 0;
for (index = 0; index < 5; index++) {
    let userInput = parseInt(prompt("ingrese un numero", "5"));
    sumaTotal += userInput;
};
alert(sumaTotal / 5)
console.log(sumaTotal);

/***** programan 3  *****/

let mayoresEdad = 0;
let userInput = 0;
do {
    userInput = parseInt(prompt("ingrese un numero", "18"));
    if (userInput >= 18) {
        mayoresEdad++;
    }
} while (userInput !== 0);
console.log(mayoresEdad);

mayoresEdad = 0;
userInput = parseInt(prompt("ingrese un numero", "18"));
while (userInput !== 0) {
    if (userInput >= 18) {
        mayoresEdad++;
    }
    userInput = parseInt(prompt("ingrese un numero", "18"));
}
console.log(mayoresEdad);

/***** programan 4  *****/

promedio = 0;
let userInputS = '';
let count = 0;
do {
    userInputS = prompt("ingrese un numero", "Salir");
    userInput = parseInt(userInputS);
    if (!isNaN(userInput) && userInput < 10 && userInput >= 0) {
        count++;
        promedio += userInput;
    }
} while (userInputS !== "Salir");
promedio /= count;
console.log(promedio);

/***** programan 5  *****/

let paresC = 0;
let imparesC = 0;
do {
    userInput = parseInt(prompt("ingrese un numero", "0"));
    if (userInput === 0) {
        break;
    } else if (userInput % 2 === 1) {
        imparesC++;
    } else {
        paresC++;
    }
} while (true);

console.log("pares: " + paresC);
console.log("impares: " + imparesC);

paresC = 0;
imparesC = 0;
let isCero = false;
do {
    userInput = parseInt(prompt("ingrese un numero", "0"));
    if (userInput === 0) {
        isCero = true;
    } else if (userInput % 2 === 1) {
        imparesC++;
    } else {
        paresC++;
    }
} while (!isCero);

console.log("pares: " + paresC);
console.log("impares: " + imparesC);

/***** programan 6  *****/

userInput = parseInt(prompt("ingrese un numero del 1 al 10", "0"));
switch (userInput) {
    case 1:
        console.log("a");
        break;
    case 2:
        console.log("b");        
        break;
    case 3:
        console.log("c");        
        break;
    case 4:
        console.log("d");        
        break;
    case 5:
        console.log("e");
        break;
    case 6:
        console.log("f");
        break;
    case 7:
        console.log("g");
        break;
    case 8:
        console.log("h");
        break;
    case 9:
        console.log("i");
        break;
    case 10:
        console.log("j");
        break;
    default:
        console.log("error numero no valido")
        break;
}
