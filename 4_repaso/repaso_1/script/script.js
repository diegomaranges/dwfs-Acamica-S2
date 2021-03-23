const myApiKey = "2G80nOncXvedZ46sM4MvGZnh5sBGASG7";
let carrucel = [];
firstGif = 1;

/*********** section 1 ***********/
document.getElementById("changeStyle").addEventListener("click", () => {
    let myP = document.getElementById("myP");
    if (myP.className === "whiteB") {
        myP.className = "blackB";
    } else {
        myP.className = "whiteB";
    }
})

/*********** section 2 ***********/
/** async fetch to any url */
async function myFetchLoad(url) {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
}

async function myFetch(url) {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
}

/** get one random gif from giphy */
function getGif() {
    const limit = 1;
    const json = myFetch(`https://api.giphy.com/v1/gifs/random?api_key=${myApiKey}`);
    json.then(res => {
        const gifs = document.getElementById("gifs")
        let newElement = document.createElement("img");
        newElement.src = res.data.images.original.url;
        newElement.className = "gif";
        gifs.appendChild(newElement);
    })
    .catch(err => {
        console.error(err);
    });
}

document.getElementById("getGif").addEventListener('click', getGif);



/************ section 3 ***********/
let webCam = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(mediaStream => {
        const video = document.getElementById('video-cam');
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        };
    })
    .catch(error => {
        alert('You have to enable the mike and the camera', error);
    });
}

webCam();

/** */
//function firstLoad(params) {}

firstLoad = () => {
    let limit = 6;
    let json = myFetchLoad(`https://api.giphy.com/v1/gifs/trending?api_key=${myApiKey}&limit=${limit}`);
    console.log(json);
    json.then(res => {
        for (let i = 1; i < 4; i++) {
            let img = document.getElementById("img" + i)
            img.src = res.data[i].images.original.url;
            img.className = 'gif';
        }
    })
    .catch(err => {
        console.error(err);
    });
}

firstLoad();

/*
class Gif {
    constructor(gifUrl, title, username) {
        this.gifUrl = gifUrl;
        this.title = title;
        this.username = username;
    }
}*/
/*
document.getElementById('left').addEventListener('click', () => {
    for (let i = 1; i < 4; i++) {
        let img = document.getElementById('img'+i);
        if (firstGif - 2 + i < 0) {
            img.src = carrucel[firstGif - 2 + i + carrucel.length];            
        } else {
            img.src = carrucel[firstGif - 2 + i];
        }
    }
});*/
