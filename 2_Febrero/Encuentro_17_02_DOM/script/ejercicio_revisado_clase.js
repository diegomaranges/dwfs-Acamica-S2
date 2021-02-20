/*
Pide al usuario estos 4 datos:

Nombre y apellido
Background color
Font color
Font size

Dibuja un cuadrado con el nombre y apellido en el centro y aplica las propiedades que solicitaste modificando el DOM.
*/

/*
Challenge de la clase del 8 de febrero, clases y arreglos
*/

// 1. clase perro
// 2. funciones necesarias
/*
class Perro {
    constructor(nombre, raza, estado_adopcion /* undefined ) {
      this.nombre = nombre;
      this.raza = raza;
      this.estado_adopcion = estado_adopcion;
    }
  
    get_nombre() {
      return this.nombre;
    }
    get_raza() {
      return this.raza;
    }
    get_edad() {
      return this.estado_adopcion;
    }
    set_nombre(nuevoNombre) {
      this.nombre = nuevoNombre;
    }
    set_raza(nuevaRaza) {
      this.raza = nuevaRaza;
    }
    set_estado_adopcion(nuevoEstado_adopcion) {
      this.estado_adopcion = nuevoEstado_adopcion;
    }
    is_correct(adopcion) {
        return adopcion.tolowercase() === "adoptado" || adopcion.tolowercase()  === "en adopcion";
    }
  }




  function nuevoArray() {
    let arrayperros = [];
    let count = 0;
    let adopcion;
    let perros;
    let perrito;
    let raza;

    do {
      perros = new Perro();
      perrito = prompt("Ingrese el nombre del perro:");
      perros.set_nombre(perrito);
      raza = prompt("Ingrese la raza del perro:");
      perros.set_raza(raza);
      do {
        adopcion = prompt(
            "Ingrese el estado de adopcion solo entre las opciones: En adopcion / En proceso de adopcion /Adoptado "
        );
      } while (!perros.is_correct(adopcion) /* si es correcto paso a set estado adopcion sino vuelvo a pedir otro valor );
      perros.set_estado_adopcion(adopcion);
      arrayperros[count] = perros;
      count++;
    } while (window.confirm("¿Desea ingresar nuevo perro en adopcion?"));
    return arrayperros;
  }
  




  
  var arreglo = nuevoArray();
  console.log("Reporte de todos los perros:");
  console.log(arreglo);
  var adoptado = arreglo.filter(function (element) {
    return element.estado_adopcion == "Adoptado";
  });
  console.log("Reporte de todos los perros adoptados:");
  console.log(adoptado);
  var enProceso = arreglo.filter(function (element) {
    return element.estado_adopcion == "En proceso de adopcion";
  });
  console.log("Reporte de todos los perros en proceso de adopcion:");
  console.log(enProceso);
  var enAdopcion = arreglo.filter(function (element) {
    return element.estado_adopcion == "En adopcion";
  });
  console.log("Reporte de todos los perros en adopcion:");
  console.log(enAdopcion);
*/

/*
crea un array donde cada posición sea un objeto que contenga la siguiente información:
Nombre
Apellido
Email
Usuario
Contraseña
Activo (booleano)

Crea una nueva función que permita agregar nuevos usuarios en  tu array.

Solicita toda la información a través de prompt.

Crea una nueva función que permita modificar un usuario.
Recibe su nombre de usuario y busca si existe.
Si no existe, informa este error a través de un alert.
Si existe, solicita todos los datos a través del prompt y reemplaza el objeto con la nueva información.
 */

// el primer paso es crear los objetos luego agregarlos a un array

class Persona {
    constructor(nombre, apellido, email, usuario, pass, activo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.usuario = usuario;
        this.pass = pass;
        this.activo = activo;
    }
    get_nombre() {
        return this.nombre;
    }
    set_nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

let personas = [new Persona("juan", "perez", "jp@hotmail.com", "jp", "xz", true), new Persona("diego", "maranges", "dm@hotmail.com", "dm", "ac", false)]
console.log(personas[1]); //imprime por consola la persona juan perez

function agregar_persona() {
    let nombre = prompt("igrese su nombre");
    let apellido = prompt("igrese su apellido");
    let email = prompt("igrese su email");
    let usuario = prompt("igrese su usuario");
    let pass = prompt("igrese su password");
    let activo = prompt("igrese true, si esta activo") === "true"; // pasamos a tipo boolean
    let persona = new Persona(nombre, apellido, email, usuario, pass, activo);
    personas.push(persona);
    console.log(personas);
}
//para agregar un objeto usamos new y push
//para modificarlo, usamos los setters

for (let index = 0; index < personas.length; index++) {
    const element = personas[index];
    let nombre = prompt("igrese su nombre");
    if (nombre === element.get_nombre()) {
        nombre = prompt("igrese su nuevo nombre");
        element.set_nombre(nombre);
    }
    
}
