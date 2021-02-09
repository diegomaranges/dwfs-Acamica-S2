/*
Programemos juntos una clase personas que tenga las propiedades de nombre, apellido y edad con los siguientes métodos:

fullname: debe retornar el nombre y apellido concatenados con un espacio entre ambos
es_mayor: debe retornar true o false dependiendo si la persona es mayor de 18 años o no

Construye diferentes objetos a partir de esta clase
*/

class Personaa {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get_nombre() { return this. nombre }
    get_apellido() {}
    get_edad() {}
    set_nombre(nuevoNombre) { this.nombre = nuevoNombre }
    set_edad() {}
    set_apellido() {}

    fullname() {
        return this.nombre + ' ' + this.apellido;
    }
    es_mayor() {
        if (this.edad >= 18) {
            return true;            
        }
        return false;
        // return this.edad >= 18;
    }
}

// let persona1 = new Personaa('diego', 'maranges', 25);

let arrayPersonas = [
    new Personaa('diego', 'maranges', 25),
    new Personaa('martin', "segundo", 17),
    new Personaa('juen', 'perez', 19)
]

function mayores_de_edad(arregloP) {
    let contador = 0;
    for (const obj of arregloP) {
        if (obj.es_mayor()) {
            ++contador;
        }
    }
    return contador;
}
/*
function mayores_de_edad(arregloP) {
    let nuevoarreglo = new Array;
    for (const nombre1 of arregloP) {
        if (nombre1.es_mayor()) {
            nuevoarreglo.push(nombre1);
        }
    }
    return nuevoarreglo.length;
}

function mayores_de_edad(arregloP) {
    let nuevoarreglo = new Array;
    let total = arregloP.length;
    for (let index = 0; index < total; index++) {
        if (arregloP[index].es_mayor()) {
            nuevoarreglo.push(arregloP[index]);
        }
    }
    return nuevoarreglo.length;
}
*/
