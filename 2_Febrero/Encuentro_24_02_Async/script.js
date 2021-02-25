//imprimir el valor pasado por parametro con un alert
function returnAlert(valorAImprimir) {
    alert(valorAImprimir);
}

//imprimir el valor pasado por parametro con un console log
function returnConsoleLog(valorAImprimir) {
    console.log(valorAImprimir);
}

//obtener el nombre
function getName(imprimirNombre) {
    let nombre = prompt("ingresa tu nombre:");
    imprimirNombre(nombre); //imprimir o retornar el nombre - usarlo
}

//ejecutar
setTimeout(getName, 3000, returnAlert);// setimeout - nombre del callback - argumentos
//getName(returnConsoleLog);

let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;

function calculadora(numero1, numero2, operacion) {
    return operacion(numero1, numero2);
}

//sumas
console.log(calculadora(7, 8, suma)); //1
console.log(calculadora(3, 6, suma)); //2
console.log(calculadora(10, 8, suma)); //3
//restas
console.log(calculadora(7, 8, resta));
console.log(calculadora(3, 6, resta));
console.log(calculadora(10, 8, resta));


//ejemplo 3
let products = [];
products.push({nombre: "lapiz", precio: 250});
products.push({nombre: "cuaderno", precio: 30});
products.push({nombre: "cartuchera", precio: 444});
products.sort();

//console.log(products);

products.sort(function (elemento1, elemento2) {
    if (elemento1.nombre < elemento2.nombre) {
        return -1;
    } else {
        return 1;
    }
});

console.log(products);

/****************************************************************************************/

let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let dividir = (n1, n2) => n1 / n2;
let multiplicar = (n1, n2) => n1 * n2;
let promedio = (n1, n2) => (n1 + n2) / 2; 

function operacion(numero1, numero2, operation) {
    return operation(numero1, numero2);
}

let botones = document.getElementsByClassName("operation"); //array de operaciones

for (let index = 0; index < botones.length; index++) {
    botones[index].addEventListener('click', () => {
        let n1 = document.getElementById("numero1").value;
        let n2 = document.getElementById("numero2").value;
        let newElement = document.createElement('p');
        document.getElementById("results").appendChild(newElement);
        if (isNaN(+n1) || isNaN(+n2)) {
            return;
        }
        switch (botones[index].id) {
            case "sumar":
                newElement.innerHTML = "la suma dio:  " + operacion(+n1, +n2, sumar);
                break;
            case "restar":
                newElement.innerHTML = "la resta dio:  " +  operacion(+n1, +n2, restar);
                break;
            case "mul":
                newElement.innerHTML = "la multiplicacion dio:  " + operacion(+n1, +n2, multiplicar);
                break;
            case "div":
                if (+n2 === 0) {
                    break;
                }
                newElement.innerHTML = "la divicion dio:  " + operacion(+n1, +n2, dividir);
                break;
            case "prom":
                newElement.innerHTML = "el promedio es:  " + operacion(+n1, +n2, promedio);
                break;
            default:
                break;
        }
    });
}
