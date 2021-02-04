/*
scope - var, let y const
let mi_array = [];
let mi_array2 = new Array();
acceder a posición mi_array[5]
length
unshift
push
indexOf
shift
pop
splice
join
sort - reverse
*/
const varConst = "un valor";
var varGlobal = [];

function aFunction() {
    let varFunction = ["lunes", "martes", "miercoles", "jueves", "viernes", 1];/*desde el 0 al N-1. Length = N */
    if (true) {
        let varBlock = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');
        alert(varBlock.length);
        for (let index = 0; index < varBlock.length; index++) { // index va delde el 0 al length - 1
            console.log(varBlock[index]);
        }
        for (const elemento of varBlock) { // elemento es cada elemento del arreglo
            console.log(elemento);
        }
        alert("abril esta en la posicion numero: " + varBlock.indexOf('abril'));
        //seguir aca
    }
    varFunction.unshift("nuevo elemento"); //agregar elemento en la posicion 0
    console.log("unshift" + varFunction);
    varFunction.shift(); //remueve el elemento 0 y lo devuelve
    console.log("shift" + varFunction);

    varFunction.push("nuevo elemento");//agrega un elemento al final
    console.log("push" + varFunction);
    varFunction.pop(); //remueve y devuelve el ultimo elemento
    console.log("pop" + varFunction);
    
    varFunction.splice(2, 0, "sabado", "domingo");
    console.log("splice " + varFunction);

    varFunction.sort();
    console.log("sort " + varFunction);
    varFunction.sort().reverse();
    console.log("sort " + varFunction);
    
    let stringFromArray = varFunction.join(" - ");
    console.log(stringFromArray);
    console.log(varFunction);

    console.log(varConst + "  hola");
    alert(typeof(varFunction[5]));
}

function programamos() {
    const testArray = [1, 2, 3, "asdb", "aiz", 4, 5, "hhhh", "xxxx", "zzz", 6, 30, 129, "njcxnjoasc"];
    let sumOfElements = 0; //la suma de todos los elementos numericos
    let otherElements = []; //nuevo arreglo con el resto de los elementos no numericos
    for (const element of testArray) {
        if (typeof(element) === "number") {
            sumOfElements = sumOfElements + element;
        } else {
            otherElements.push(element);
        }
    }
    console.log(sumOfElements);
    console.log(otherElements);
}

function stop() {
    /* Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese “Stop”.
    Almacenar todos los datos en un array y mostrarlos al final. */
    let numeroIngresado;
    let promtUsuario;
    let arrayFinal = [];
    do {
        promtUsuario = prompt("inserte un numero"); // "hola"
        numeroIngresado = parseInt(promtUsuario); // nan
        if (!isNaN(numeroIngresado)) { // is nan? -> si -> true -> not true por la negacion -> false
            arrayFinal.push(numeroIngresado); // no se ejecuta
        }
    } while (promtUsuario !== "Stop"); // "hola" !==  strop -> true
    console.log(arrayFinal);
}

function dividir_array() {
    /* Ingresar mediante prompt números indefinidamente hasta que el usuario ingrese 0 (cero).
    Crear un array para los números pares, otro para los impares y un tercero para almacenar datos no numéricos. Mostrar los resultados al finalizar el ciclo.
    */
    let numeroIngresado;
    let promtUsuario;
    let parArray = [];
    let imparArray = [];
    let otroArray = [];
    do {
        // promtUsuario.length === numeroIngresado/length -> si es true lo que ingreso el usuario fue un numero
        promtUsuario = prompt("inserte un numero"); // -> "321abc" -> "0" -> "0asd"
        numeroIngresado = parseInt(promtUsuario); // 321

        if (promtUsuario === "0") {
            break;
        }

        if (numeroIngresado % 2 === 0) { //es par
            parArray.push(numeroIngresado);
        } else if (numeroIngresado % 2 === 1) { //es impar
            imparArray.push(numeroIngresado);
        } else { // otherwise
            otroArray.push(promtUsuario);
        }

    } while (true);
    console.log(parArray);
    console.log(imparArray);
    console.log(otroArray);
}

/* Ingresar mediante prompt cualquier carácter hasta el ingreso de un 0 (cero).
Almacenar cada ingreso en una posición del array.
Al finalizar dividir la cantidad de elementos en 3 arrays iguales
 */
function dividir_array_3() {
    let numeroIngresado;
    let promtUsuario;
    let myArray = [];
    do {
        // promtUsuario.length === numeroIngresado/length -> si es true lo que ingreso el usuario fue un numero
        promtUsuario = prompt("inserte un numero"); // -> "321abc" -> "0" -> "0asd"
        numeroIngresado = parseInt(promtUsuario); // 321

        if (promtUsuario === "0") {
            break;
        }

        if (!isNaN(numeroIngresado)) { //es par
            myArray.push(numeroIngresado);
        } else { // otherwise
            myArray.push(promtUsuario);
        }

    } while (true);
    //dividir en 3 mi array e imprimirlo
    let numberOfElements = myArray.length / 3;
    if (myArray.length % 3 === 0) {
        console.log(myArray.splice(0, numberOfElements));
        console.log(myArray.splice(0, numberOfElements));
        console.log(myArray.splice(0, numberOfElements));
    } else if (myArray.length % 3 === 1) {
        console.log(myArray.splice(0, numberOfElements + 1));
        console.log(myArray.splice(0, numberOfElements));
        console.log(myArray.splice(0, numberOfElements));
    } else {
        console.log(myArray.splice(0, numberOfElements + 1));
        console.log(myArray.splice(0, numberOfElements + 1));
        console.log(myArray.splice(0, numberOfElements));        
    }


}