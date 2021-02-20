/*
Propiedades de los nodos (obtener valor o asignar):
element.attributes, element.className, element.classList, element.firstElementChild,
element.id, element.innerHTML, element.lastElementChild, element.name, element.outerHTML, 
element.tagName 

Animar elementos: element.animate(keyframes, options)  

Modificar nodos: element.remove(), element.replaceWith(nuevoNodo)

Crear nuevos elementos: document.createElement(tagName)

Insertar nodos: element.appendChild(), element.before(), element.after(), element.insertBefore(), 
replaceChild
element.setAttribute(name, value) 
tomar el valor de un atributo (rel, id, class)
tener un ejemplo específico del atributo value

localStorage
setItem, getItem y removeItem

sessionStorage
setItem, getItem y removeItem
*/
/************************************************************************************************/
// Seleccion de nodos:
//document.getElementById
let parWithId = document.getElementById("parWithId"); //devuelve 1 elemento
parWithId.style.textTransform = 'uppercase';

//document.getElementsByTagName
let paragraph = document.getElementsByTagName("p"); //devuelve un array de elementos
for (let index = 0; index < paragraph.length; index++) {
    paragraph[index].style.color = "#ff4f4f";
}

//document.getElementsByClassName
let parWithClass = document.getElementsByClassName("parWithClass"); //duelve un array de elementos
for (let index = 0; index < parWithClass.length; index++) {
    parWithClass[index].style.textDecoration = "underline";
}

//document.querySelector()
let parQuery = document.querySelector("p#parWithId"/*nav lu li*/); //devuelve un array de elementos
parQuery.style.backgroundColor = '#5a5ada';

// element.attributes
let imgWithAtt = document.getElementById("imgWithAtt");
console.log(imgWithAtt.attributes);

// element.className vs element.classList
//console.log ambos tipos inicial
console.log(imgWithAtt.className);
console.log(imgWithAtt.classList);

//Asignado nueva clase con classname, borra el resto de las clases
imgWithAtt.className = "newClass";
console.log("= " + imgWithAtt.className);

//Se puede escribir: "imgWithAtt.className += ' newClass';" para que funcione como ClassList
//Agregando una clase con classList
imgWithAtt.classList.add("img");
imgWithAtt.classList.add("grey");
console.log("add " + imgWithAtt.className);

//Eliminando una clase con classList
imgWithAtt.classList.remove("newClass");
console.log("remove " + imgWithAtt.className);

// element.id
//ver id
let oldId = document.getElementById("oldId");
console.log("oldid = " + oldId.id);

//cambiar id
oldId.id = "newId";
console.log("newid = " + oldId.id);

// element.value
//ver value
let inputValue = document.getElementById("inputValue");
console.log("inputValue = " + inputValue.value);
console.log(inputValue);

//cambiar value
inputValue.value = "nuevo valor del input";
console.log("nuevo inputValue = " + inputValue.value);

// element.name
//ver name
console.log("inputValue = " + inputValue.name);

//cambiar name
inputValue.name = "newName";
console.log("nuevo inputValue = " + inputValue.name);

// element.firstElementChild
let elementList = document.getElementById("elementList");
console.log(elementList.firstElementChild);
elementList.firstElementChild.innerHTML = "primer elemento";

// element.lastElementChild
console.log(elementList.lastElementChild);
elementList.lastElementChild.innerHTML = "ultimo elemento";

// element.innerHTML y element.outerHTML
let titleWithSpan = document.getElementById("titleWithSpan");
console.log("innerhtml - " + titleWithSpan.innerHTML);
console.log("outerHTML - " + titleWithSpan.outerHTML);
titleWithSpan.outerHTML = "<h4 id='titleWithSpan'>Título h3 con un <span>span</span> adentro</h4>";

// element.tagName
console.log(titleWithSpan.tagName);

// element.setAttribute(name, value)
let imgToChangeAtt = document.getElementById("imgToChangeAtt");
imgToChangeAtt.setAttribute("src", "https://dummyimage.com/200x120/5a5ada/aaa");
imgToChangeAtt.setAttribute("alt", "Placeholder image nuevo")

//element.animate(keyframes, options)
document.getElementById("animation").animate([
    { transform: 'translatex(0px)' }, 
    { transform: 'translatex(300px)'},
    { transform: 'translatex(0px)' }, 
  ], { 
    duration: 5000,
    iterations: Infinity
});

//document.createElement(tagName)
let parrafo = document.createElement("p");
parrafo.textContent = "esto es un parrafo";

//element.appendChild()

//element.before()

//element.after()

//element.insertBefore()


//element.remove()

//element.replaceWith(nuevoNodo)

//element.replaceChild


// localStorage
// setItem, getItem y removeItem
localStorage.setItem("Nombre", "Harry");
localStorage.removeItem("Nombre");
localStorage.setItem("NombreEntero", "Harry Potter");
console.log("localStorage - " + localStorage.getItem("NombreEntero"));

// sessionStorage
// setItem, getItem y removeItem
sessionStorage.setItem("Nombre", "Hermione");
sessionStorage.removeItem("Nombre");
sessionStorage.setItem("NombreEntero", "Hermione Jean Granger");
console.log("sessionStorage - " + sessionStorage.getItem("NombreEntero"));
