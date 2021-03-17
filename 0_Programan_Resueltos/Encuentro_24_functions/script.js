class User {
    constructor (fName, lName, email, userName, password, active) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.active = active;
    }

    //setters
    setFName(name) {
        this.fName = name;
    }
    setLName(name) {
        this.lName = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setUserName(uName) {
        this.userName = uName;
    }
    setPass(pass) {
        this.password = pass;
    }
    setActive(isActive) {
        this.active = isActive;
    }

    //getters
    getFName() {
        return this.fName;
    }
    getLName() {
        return this.lName;
    }
    getEmail() {
        return this.email;
    }
    getUserName() {
        return this.userName;
    }
    getPass() {
        return this.password;
    }
    getActive() {
        return this.active;
    }

    //retorna true si el usuario y contraseña coinciden con el del objeto actual
    checkData(userN, pass) {
        return userN === this.userName && pass === this.password;
    }
}

var users = [new User("juan", "cruz", "jcruz@hotmail.com", "jcruz", "123456", true),
            new User("diego", "maranges","diegomaranges@hotmail.com", "dmaranges", "abcde", false)];


// valida el user name y password, con los objetos del array
function validator() {
    let userName = prompt("ingrese su usuario:");
    let pass = prompt("ingrese su password:");
    let userHaveAccess = false;
    let userMach = false;
    for (let i = 0; i < users.length && !userMach; i++) {
        const user = users[i];
        userMach = user.checkData(userName, pass);
        if(userMach && user.getActive()) {
            userHaveAccess = true;
        }
    }
    if (userHaveAccess) {
        alert("usted se a logueado correctamente!");
    } else {
        alert("error en la informacion o su usuario no esta activo.");
    }
    return userHaveAccess;
}

//agrega un usuario al array
function addUser() {
    let fName = prompt("ingrese su nombre");
    let lName = prompt("ingrese su apellido");
    let email = prompt("ingrese su email");
    let userName = prompt("ingrese su nombre de usuario");
    let password = prompt("ingrese su pass");
    let active = prompt("ingrese si esta activo (true or false)");
    
    users.push(new User(fName, lName, email, userName, password, active === "true"))
    
    return users;
}

//busca un usuario por su nombre de usuario y modifica su valor en caso de encontrarlo.
function modifyUser() {
    let userName = prompt("ingrese su usuario:");
    let userMach = false;
    for (let i = 0; i < users.length && !userMach; i++) {
        const user = users[i];
        if (user.getUserName() === userName) {
            let fName = prompt("ingrese su nombre");
            let lName = prompt("ingrese su apellido");
            let email = prompt("ingrese su email");
            let userName = prompt("ingrese su nombre de usuario");
            let password = prompt("ingrese su pass");
            let active = prompt("ingrese si esta activo (true or false)");
            users[i] = new User(fName, lName, email, userName, password, active === "true");
            userMach = true;
        }
    }
    return users;
}


//Test 1 variable
function oneVariable() {
    let number = prompt("ingrese un numero");
    if (+number > 10) {
        if (+prompt("ingrese otro numero") > 100) {
            alert("A");
        } else {
            alert("B");
        }
    } else {
        if (+prompt("ingrese otro numero") > 1000) {
            alert("C");
        } else {
            alert("D");
        }
    }
    alert(number);
}
