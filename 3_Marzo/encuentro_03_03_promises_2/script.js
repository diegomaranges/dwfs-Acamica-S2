//inicio
/*
if (sessionStorage.getItem("MN") === "MN") {
    //estaba en modo nocturno => activar MN
    //esconder boton MN y mostrar boton MD
} else {
    //estaba en modo diurno => activar MD
    //esconder boton MD y mostrar boton MN
}

let firstIF = 0; // 1
let arrayIF = []; //20 elementos
let promesa = new Promise();
promesa.then(arrayIF = [json]);
const numberOfIF = 3;


function left() {
    //arrayIF -> fetch 20 elementos
    for (let index = numberOfIF; index > 0; index--) { //index 1 2 3
        if (firstIF+index < 0) {
            document.getElementById("IF"+index).setAttribute("src", arrayIF[firstIF-index+arrayIF.length]);            
        } else {
            document.getElementById("IF"+index).setAttribute("src", arrayIF[firstIF-index+1]);          
        }       
    }
    firstIF--;
}

function right() { //primero right
    //arrayIF -> fetch 20 elementos
    for (let index = 1; index >= numberOfIF; index++) { //0 1 2 => 1 2 3
        if (firstIF+index >= arrayIF.length) {
            document.getElementById("IF"+index).setAttribute("src", arrayIF[firstIF+index-arrayIF.length]);       
        } else {
            document.getElementById("IF"+index).setAttribute("src", arrayIF[firstIF+index]);                 
        }
    }
    firstIF++;
}

addEventListener("touchmove")
//agregar un elemento (cosas nuevas a la pagina desde siempre) html
//modificar un estilo css
//modificar un comportamiento js
//por defecto o MD
sessionStorage.setItem("MN", "false")

//boton MN
sessionStorage.setItem("MN", "true")
*/

//all race cadena

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts/42");

fetchPromise.then(response => {
  console.log(response);
});

// promesa en cadena

let promesa = new Promise((res, rej) => {
    setTimeout(() => res(4), 1000);
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2;
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2;
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2;
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2;
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2;
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2;
})
.then(resultado => {
    console.log(resultado);
    return resultado * 2;
});

// promesa race
let promiseRace1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 1'), 1200);//4
});
let promiseRace2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 2'), 800);//2
});
let promiseRace3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 3'), 650); //1
});
let promiseRace4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 4'), 1000);//3
});

Promise.race([promiseRace1, promiseRace2, promiseRace3, promiseRace4])
.then(res => console.log("la promesa que termino primero es la " + res))
.catch(err => console.error("error en la " + err));

//promesa all
let promiseAll1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 800);
});
let promiseAll2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 750);
});
let promiseAll3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
});

Promise.all([promiseAll1, promiseAll2, promiseAll3]) //[resolve-promiseAll1, resolve-promiseAll2, resolve-promiseAll3]
.then(res => { // res === arreglo de resoluciones de todas las promesas
    console.log("promise all:");
    console.log(res);
    let suma = 0;
    for (let index = 0; index < res.length; index++) {
        console.log(res[index]);
        suma += res[index];
    }
    console.log(suma);
})
.catch(err => console.error("fallo la promesa " + err));
