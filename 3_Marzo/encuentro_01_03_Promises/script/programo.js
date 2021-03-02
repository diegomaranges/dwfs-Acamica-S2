//crear una promesa

let promesa1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("promesa resuelta!");
    }, 450);
    setTimeout(function() {
        reject("promesa rechazada!");
    }, 350);
});

promesa1
.then((successMenssaje) => {
    console.log("respuesta de promesa1: " + successMenssaje);
})
.catch((errorMessaje) => {
    console.log("error en la promesa1: " + errorMessaje);
});

let promesa2 = new Promise((res, rej) => {
    console.log("pending...");
    setTimeout(() => {
        if (false) {
            res("promesa resuelta!");
        } else {
            rej("promesa rechazada!")
        }
    }, 3500)
})

promesa2
.then((successMenssage) => {
    console.log("respuesta de promesa1: " + successMenssage);
})
.catch((errorMessage) => {
    console.log("error en la promesa1: " + errorMessage);
});

//fetch
let imgCtn = document.getElementById("imgCtn");
function getDogImg(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) { //response.status === 200
                throw new Error(response.status);
            }
            return response.json();
        })
        //.then(response => response.json())
        .then(json => {
            console.log(json);
            let dogImg = document.createElement("img");
            dogImg.setAttribute('src', json.message);
            imgCtn.appendChild(dogImg);
        })
        .catch(err => {
            console.error("status error: " + err);
            let dogImg = document.createElement("img");
            dogImg.setAttribute('src', "https://pbs.twimg.com/media/DVxrJ40W0AEA8Lj.jpg");
            imgCtn.appendChild(dogImg);
        });
};

getDogImg("https://dog.ceo/api/breeds/image/randomasd");
