const myApiKey = "2G80nOncXvedZ46sM4MvGZnh5sBGASG7";
/****** utilities ********/

/************** section 1 ***************/
let buttonchange = document.getElementById('changeStyle');

buttonchange.addEventListener("click", () => {
    let myP = document.getElementById("myP");
    if (myP.className === "whiteB") {
        myP.className = "blackB";
        buttonchange.innerHTML = 'modo nocturno';
    } else {
        myP.className = "whiteB";
        buttonchange.innerHTML = 'modo diurno';
    }
});

/************** section 2 ***************/
async function myFetch(url) {
    let res = await fetch(url);
    let json = await res.json();
    return json;
}

document.getElementById("getGif").addEventListener("click", () => {
    let json = myFetch(`https://api.giphy.com/v1/gifs/random?api_key=${myApiKey}`);
    json.then(res => {
        console.log(res);
        let newElement = document.createElement("img");
        newElement.className = "gif";
        newElement.src = res.data.images.original.url;
        document.getElementById("gifs").appendChild(newElement);
    })
    .catch( err => console.log(err));
});

/*
let inputS = '';
input.addEventListener('keypress', key => {
    if (key  === 'enter') {
        //search - fetch(url tag=${inputS})
    } else if (key === 'delete'){
        //restar el ultimo caracter de inputS
        //actualizar sugerencias
    } else {
        inputS += key;
        //actualizar sugerencias
    }
})*/
