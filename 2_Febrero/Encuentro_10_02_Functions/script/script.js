/*
Función con diferentes scope
try / catch
hoisting
*/
//compilacion
//runtime

//example1(1,2,2,4); //c = 3
//example2(1,2,2,4); //error

function example1 (a, b, c, d) {
    if(typeof(a) === "number") {
        c = a + b; // 2 + "a" -> "2a"
    }
}

const example2 = function (a, b, c, d) {
    if(typeof(a) === "number") {
        c = a + b; // 2 + "a" -> "2a"
    }
}
const example3 = (function (a, b, c, d) {
    if(typeof(a) === "number") {
        c = a + b; // 2 + "a" -> "2a"
    }
}) (1,2,6,7);//example3 = 1 + 2

const example4 = (/*parametros*/) => {
    alert("hola mundo");
    return "arrow function";
}

const example5 = a => {
    alert("hola mundo");
    a += 2; // a = a + 2;
    return a;
}

const example6 = (a, s) => {
    alert("hola mundo");
    a += s;
    return a;
}
// example7 == example6
const example7 = (a, s) => {
    alert("hola mundo");
    a += s;
}

const example8 = (a) => {
    a();
}

example8(example7);

example1(1,2,2,4); //c = 3
example2(1,2,2,4); //c = 3

/* tips: declaro todas las funciones al principio, y al final todas las invocaciones */

// fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
};
  
  // fError = Función Error (callback)
const fError = function () {
console.error("Error");
};
  
  // fA = Función A
const fA = function (callback, callbackError) {
    const n = 1;
    if (n > 2) callback();
    else callbackError();
};

fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no


















// try / catch
const secretNum = 25;
//let guess = 25;
let win = 0;

/*Para jugarlo comentar la linea "let guess = 3;" y la última línea del código y descomentar el siguiente comentario*/
do {
    let guess = prompt("Adivine el número");
    guessTheNum(secretNum, guess);
} while( win === 0);

function guessTheNum(secret, guess){
    try {
        if (isNaN(+guess)){
            throw new Error("No fue un número lo que se ingresó");
        }else if(guess == ''){
            throw new Error("No se ingresó un número");
        } else if(+guess > secret){
            throw new Error("El número ingresado es muy alto");
        } else if(+guess < secret){
            throw new Error("El número ingresado es muy bajo");
        }
        win = 1;
        alert("Correcto, el número era: " + secret);  
    } catch (error)  {
        alert(error);
    }
}
guessTheNum(secretNum, guess);
/*
try {
    //conctate con facebook -> 404 NOT FOUND
    //!= 200 OK
} catch (error) {
    local.log(error);
    //retornar a la home page


    //en este momento no se puede conectar con ....
    //intente mas tarde
}*/

//API try and catch - promess

