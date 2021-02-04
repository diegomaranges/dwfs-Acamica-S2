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
