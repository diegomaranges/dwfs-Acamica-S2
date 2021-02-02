/*var num1S = prompt("ingrese el primer numero", '123');//123 123 => 4
var num1N = parseInt(num1S);

var num2S = prompt("ingrese el segundo numero", "123");
var num2N = parseInt(num2S);

var mensaje = "";
var sumatoria = 0;

if (!isNaN(num1N) && !isNaN(num2N) && num1N.toString().length === num1S.length && num2N.toString().length === num2S.length) {
    sumatoria = num1N + num2N;
    mensaje = "la sumatoria es: " + (num1N + num2N);
    switch (sumatoria) {
        case 4:
            console.log("sumatoria es 2 + 2 o 1 + 3");
            break;
        case 5:
            console.log("sumatoria es 5");
        case 6:
            console.log("sumatoria es 5 o 6");
            break;    
        default:
            console.log("sumatoria no es 4, ni 5, ni 6");
    }
} else {
    mensaje = "uno de los valores es erroneo";
}

sumatoria = 0;
for (let index = 0; index < 10 && index > -1; index++) {
    console.log(index);
    sumatoria = sumatoria + index;
    console.log("sumatoria = " + sumatoria);
}
// num1N = 124
//num1N = 0
while (num1N < 124) { //primero chequea el condicion, si verdadero ejecuta el contino, sino termina el while => puede darse que no ejecute el contenido del while
    var num1S = prompt("ingrese el primer numero", '123');
    var num1N = parseInt(num1S);
    console.log(num1N + " es menor que 124?");
}

do { //primero ejecuta lo que hay dentro y luego chequea la condicion, si no la cumple se termina, sino se repiten => por lo menos se ejecutan las instrucciones 1 vez
    var num1S = prompt("ingrese el primer numero", '123');
    var num1N = parseInt(num1S);
    console.log(num1N + " es mayor que 124?");    
} while (num1N < 124);

var opcion = "q";

do {
    var opcion = prompt("ingrese una opcion, q para salir");    
} while (opcion != "q");

function nombreDeLaFuncion() {
    do {
        var num1S = prompt("ingrese el primer numero", '123');
        var num1N = parseInt(num1S);
        console.log(num1N + " es mayor que 124?");    
    } while (num1N < 124);
}

//comentario diciendo que es lo que hace
function funcionPrincipal(num) {
    switch (num) {
        case 1:
            nombreDeLaFuncion();
            break;
    
        default:
            break;
    }
}

alert(mensaje);
*/

//ejercicio ejemplo
var usuario = "usuario1";
var pass = "pass1";
/* Crea un ciclo del tipo do … while
Solicita al visitante un usuario y contraseña.
Crea una función para validar que los datos ingresados son correctos.
Si son correctos corta la ejecución del ciclo
Si son incorrectos vuelve a solicitar al visitante usuario y contraseña
*/
var condicion = true;
do {
    var input1 = prompt("ingresar usuario");
    var input2 = prompt("ingresar password");
    console.log(input1 + " " + usuario);
    console.log(input2 + " " + pass);
    //imprimir una alerta en caso de no ser correctas y una en caso de si
    condicion = !(input1 === usuario && input2 === pass);
    if (!condicion) {
        alert("es correcta");
    } else {
        alert("error");
    }
    console.log("condicional es: " + condicion);
} while (condicion);
