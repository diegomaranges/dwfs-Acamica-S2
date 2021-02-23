/*
.addEventListener(), on{Evento}
.removeEventListener
.stopPropagation()
event.target
Objeto de evento

eventos: click, copy, cut, dblclick, focus, keydown, keyup, mousedown, mouseup, mouseover, paste
*/

/**********************************************************************************************************/

//CLICK - con .addEventListener() y on{Evento}
let clickBox = document.getElementById("clickBox");
clickBox.addEventListener('click', () => {
    clickBox.classList.toggle('color');
});
let clickBoxOn = document.getElementById("clickBoxOn");
clickBoxOn.onclick = () => {
    clickBoxOn.classList.toggle('color');
};

//DOUBLE CLICK - con .addEventListener() y on{Evento}
let dbclickBox = document.getElementById("dbclickBox");
dbclickBox.addEventListener('dblclick', () => {
    dbclickBox.classList.toggle('color');
});
let dbclickBoxOn = document.getElementById("dbclickBoxOn");
dbclickBoxOn.ondblclick = () => {
    dbclickBoxOn.classList.toggle('color');
};

//.removeEventListener
let createBoxBtn = document.getElementById("createBoxBtn");
let stopBoxesBtn = document.getElementById("stopBoxesBtn");
let boxCtn= document.getElementById("boxCtn");

function createBox (){
    let box = document.createElement('div');
    box.classList.add('square');
    boxCtn.appendChild(box);
}

createBoxBtn.addEventListener("click", createBox, false)

stopBoxesBtn.addEventListener("click", () => {
    createBoxBtn.removeEventListener("click", createBox, false);
})

//event.target
let subitemList = document.getElementById("subitemList");

subitemList.addEventListener('click', (event) => {
    if(event.target.className === 'item2') {
        if (event.target.children[0].style.display === "block") {
            event.target.children[0].style.display = "none";
        } else {
            event.target.children[0].style.display = "block";
        }
    }
});

//.stopPropagation()
let bigBoxWith = document.getElementById("bigBoxWith");
let squareWith = document.getElementById("squareWith");
let parWith = document.getElementById("parWith");

bigBoxWith.addEventListener('click', () => {
    alert("clickeaste en el rectangulo");
});

squareWith.addEventListener( 'click', (event) => {
    alert("clickeaste en el cuadrado");
    event.stopPropagation();
});

parWith.addEventListener('click', (event) => {
    alert("clickeaste en el parrafo");
    event.stopPropagation();
});

let bigBoxWithout = document.getElementById("bigBoxWithout");
let squareWithout = document.getElementById("squareWithout");
let parWithout = document.getElementById("parWithout");

bigBoxWithout.addEventListener('click', () => {
    alert("clickeaste en el rectangulo");
});

squareWithout.addEventListener( 'click', () => {
    alert("clickeaste en el cuadrado");
});

parWithout.addEventListener('click', () => {
    alert("clickeaste en el parrafo");
});

//MOUSEOVER Y MOUSEOUT
let items = document.getElementsByClassName("item");
for (let index = 0; index < items.length; index++) {
    items[index].addEventListener('mouseover', () => {
        items[index].style.backgroundColor = "#ff4f4f";
    });
    items[index].addEventListener('mouseout', () => {
        items[index].style.backgroundColor = "#ffffff";
    });
};

// MOUSEUP
let mouseBox = document.getElementById("mouseBox");
mouseBox.addEventListener('mouseup', () => {
    mouseBox.textContent = "Mouse Up";
    mouseBox.classList.add("color");
});

//MOUSEDOWN
mouseBox.addEventListener('mousedown', () => {
    mouseBox.textContent = "Mouse Down";
    mouseBox.classList.remove("color");
});

//COPY
let textCutCopy = document.getElementById("textCutCopy");
textCutCopy.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', "copiaste un texto");
    event.preventDefault();
});

//CUT
textCutCopy.addEventListener('cut', (event) => {
    event.clipboardData.setData('text/plain', "cortaste un texto");
    event.preventDefault();
});

//PASTE
let inputPaste = document.getElementById("inputPaste");
inputPaste.addEventListener('paste', (event) => {
    event.preventDefault();
});

//FOCUS y BLUR
let inputFocus = document.getElementById("inputFocus");
let passRecomendation = document.getElementById("passRecomendation");

//FOCUS
inputFocus.addEventListener('focus', () => {
    inputFocus.style.border = "2px solid blue";
    passRecomendation.textContent = "se requiere una contraseña con al menos 8 digitos, con mayusculas, minusculas, numeros y puntos";
});

//BLUR
inputFocus.addEventListener('blur', () => {
    inputFocus.style.border = "1px solid blue";
    passRecomendation.textContent = "";
});

//KEYDOWN y KEYUP
let key = document.getElementById("key");
let keyText = document.getElementById("keyText");
let key2 = document.getElementById("key2");
let keyText2 = document.getElementById("keyText2");

//KEYUP
key.addEventListener('keyup', event => {
    if (event.which === 13 || event.keyCode === 13) { //keycode enter === 13
        keyText.textContent = ":)";
    } else if (event.which === 8 || event.keyCode === 8) { //keycode borrar === 8
        keyText.textContent = ":(";
    } else {
        keyText.textContent = key.value;
    }
});


//KEYDOWN
key2.addEventListener('keydown', event => {
    if (event.which === 13 || event.keyCode === 13) { //keycode enter === 13
        keyText2.textContent = ":)";
    } else if (event.which === 8 || event.keyCode === 8) { //keycode borrar === 8
        keyText2.textContent = ":(";
    } else {
        keyText2.textContent = key2.value;
    }
});
