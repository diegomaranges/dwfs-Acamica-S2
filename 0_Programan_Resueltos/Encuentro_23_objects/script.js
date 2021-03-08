/******** OOP/POO ***********/
const enAdopcion = "En adopcion";
const procesoDeAdopcion = "Proceso de adopcion";
const adoptado = "Adoptado"

class PerroEnAdopcion {
    constructor (nombre, estado) {
        this.estado = estado;
        this.nombre = nombre;
    }
    getEstado() {
        return this.estado;
    }
    getNombre() {
        return this.nombre;
    }
    setEstado(newEstado) {
        if (newEstado.toLowerCase() === enAdopcion.toLowerCase()
            || newEstado.toLowerCase() === procesoDeAdopcion.toLowerCase()
            || newEstado.toLowerCase() === adoptado.toLowerCase()) {
                this.estado = newEstado;            
        }
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
}

/*
 * Almacenamiento
 */
let condicional = true;
let nombreDelPerro = '';
let estadoDeAdopcion = '';
let arrayDePerros = [];

do {
    nombreDelPerro = prompt("ingrese el nombre del perro:");
    estadoDeAdopcion = prompt("ingrese el estado del mismo:");
    arrayDePerros.push(new PerroEnAdopcion(nombreDelPerro, estadoDeAdopcion));
    condicional = confirm("quiere agregar otro perro a la lista?")
} while (condicional);

console.log(arrayDePerros);

console.log(arrayDePerros.filter(perro => perro.estado.toLowerCase() === enAdopcion.toLowerCase()));
console.log(arrayDePerros.filter(perro => perro.estado.toLowerCase() === procesoDeAdopcion.toLowerCase()));
console.log(arrayDePerros.filter(perro => perro.estado.toLowerCase() === adoptado.toLowerCase()));
