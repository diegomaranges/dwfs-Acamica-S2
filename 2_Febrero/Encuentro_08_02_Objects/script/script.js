/*
class persona { … }
this
constructor
obj = new persona
obj.propiedad
obj.metodo()
obj2 = {propiedad: value}
*/

function User(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

let usuario1 = new User('diegomaranges', 'diegomaranges@gmail.com', '2356+89');
console.log(usuario1);
console.log(usuario1.userName);
usuario1.edad = 25;
console.log(usuario1);


class Persona {
    constructor (nombre, apellido, edad, altura, ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
        this.ciudad = ciudad;
        this.pais = 'Argentina';
    }
    saludar() {
        return 'hola mi nombre es ' + this.nombre + ' y mi apellido es ' + this.apellido;
    }
    esIgual(otraPersona) {
        //persona1.esigual -> this
        //persona1 !== persona2 / nombre variable / representan la direccion de memoria en donde estan los obj
        return this.nombre === otraPersona.nombre && this.apellido === otraPersona.apellido && this.edad === otraPersona.edad;
    }
    comprarnombre(nombreUsuario) {
        return this.nombre === nombreUsuario;
    }
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    getName() {
        return this.nombre;
    }
    setName(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    //setAsPremium(){}
}

let persona1 = new Persona('diego', 'maranges', 25, 1.60, 'Cordoba');
console.log(persona1);
console.log(persona1.saludar());
let persona2 = new Persona('diego', 'maranges', 25, 1.60, 'Cordoba');
console.log(persona1.esIgual(persona2));
console.log(persona1.esIgual(persona1));
console.log(persona2 === persona1); //false

/* 
persona2 direccion de memoria
*/
/*
function nombrefuncion(nombre, apellido, edad) {
    let temp = nombre + apellido + edad;
    let indice;



    while (indice) {
        
    }
}*/

let nuevoObj = {
    nombre: 'diego',
    apellido: 'maranges',
    edad: 25,
    saludar() {
        return 'hola mi nombre es ' + this.nombre + ' y mi apellido es ' + this.apellido;
    }
}; // no es algo de la clase persona

console.log(nuevoObj);

//usar class, usar la palabra clave new, nuevo obj y utilizar methods

/* el array es un obj
Class Array -> new Array()
array es un conjunto de elementos de algun tipo */
