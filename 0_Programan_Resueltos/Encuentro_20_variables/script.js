//15km por litro
//tanke 45lt


/*** Actividad 1 ***/
let kmPorLitro = 15; //kmxl
let capacidadDelTanke = 45; //l

let kmARecorrer = prompt("ingrese la distancia a recorrer:");
let kmARecorrerInt = parseInt(kmARecorrer);

try {
    if (kmARecorrerInt <= kmPorLitro * capacidadDelTanke) {
        alert("llegarias a tu destino");
    } else {
        alert("no llegarias a tu destino");    
    }
} catch (error) {
    alert("error en el dato ingresado")
}

/***  Actividad 2 ***/
const motor1_6 = 15;
const motor1_8 = 12;
const motor2_0 = 10;
capacidadDelTanke = 50;
let motor= prompt("si esta usando el motor 1.6 ingrese 1, si usa 1.8 ingrese 2 y si usa 2.0 ingrese 3");
kmARecorrer = prompt("ingrese la distancia a recorrer:");
kmARecorrerInt = parseInt(kmARecorrer);
switch (motor) {
    case "1":
        kmPorLitro = motor1_6;
        break;
    case "2":
        kmPorLitro = motor1_8;
        break;
    case "3":
        kmPorLitro = motor2_0;
        break;
    default:
        alert("motor no valido, asumiremos que tiene un motor 1.6");
        break;
}
let index;
for (index = 1; kmARecorrerInt > kmPorLitro * capacidadDelTanke * index; index++){
    //
}
alert("necesita " + index + " tankes de nafta");

/***  Actividad 3 ***/
const menorDial = 89.9;
const mayorDial = 107.9;

const dial = prompt("ingrese el dial a evaluar:");
const dialInt = parseInt(dial);
const dialfloat = parseFloat(dial);

if (dialInt % 2 === 1 && dialfloat >= menorDial && dialfloat < mayorDial) { //par o impar primeros numeros previo al .
    alert("dial valido");
} else {
    alert("dial no valido " + dialfloat);
}

/***  Actividad 4 ***/
const arrayUsuarios = ["Juan", "Diego", "Pablo"];
const fondosDelUsuarioActual = 12000;
const fondoATransferir = prompt("ingrese los fondos a transferir");
const fondoATransferirInt = parseInt(fondoATransferir);
const destinatario = prompt("ingrese el usuario destino");
let existe = false; //existe usuario destino

for (const iterator of arrayUsuarios) {
    if (iterator === destinatario) {
        existe = true;
    }
}

if (existe && fondoATransferirInt <= fondosDelUsuarioActual) {
    alert("transferencia exitosa");
} else if (!existe && !(fondoATransferirInt <= fondosDelUsuarioActual)) {
    alert("usuario no valido y fondo insuficiente");
} else if (existe) {
    alert("no se pudo transferir porque no tiene fondo suficiente");
} else {
    alert("no se pudo transferir el usuario no existe");    
}
