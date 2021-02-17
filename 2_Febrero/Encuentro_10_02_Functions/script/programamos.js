/*
Solicitar al visitante que ingrese su nombre de usuario.

Almacenar el nombre de usuario ingresado en una función.

Escenario 1: El nombre no está en la lista.
Darle la bienvenida al nuevo usuario

Escenario 2: El nombre de usuario existe.
Dar un aviso al usuario que el nombre de usuario se encuentra en uso

Utilizar una función con try / catch para realizar la validación.

*/
const usersList = new Array("diego", "martin", "juan", "david", "franco");

const programamos = () => {
    let imput = prompt("ingresa tu nombre aqui:"); // diego
    let validator = false;

    try {
        for (const iterator of usersList) {
            if (iterator === imput) { //true - false
                validator = true //validator = true
            }
            //(iterator === imput)? validator = true : validator; // retornar validator
        }
        if (!validator) { //no esta en la lista
            alert("Bienvenido! " + imput);
            validator = false;
        } else if (validator) { //existe
            throw new Error("Tu nombre de usuario ya existe");
        }
    } catch (error) {
        alert(error);
    }

}

