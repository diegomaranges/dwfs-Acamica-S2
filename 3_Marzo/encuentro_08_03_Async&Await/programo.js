//Registrarse a la Api de OpenWeather para sacar la ApiKey gratuita en: https://openweathermap.org/ y agregarla a la variable
let api = '49046c084697af1d52689aac44ea1c6e';

let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let results = document.getElementById('results');

//Ejemplos de ciudades para el search query: London, Texas, Tokio, Seoul
//Tambien se puede buscar por país: Argentina, Uruguay, etc

function search() {
    //fetch async/await
    async function newSearch (cityName) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`;
        //let url = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + api;
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }
    let info = newSearch(searchInput.value/*variable a recbir*/)
    info.then(response => {
        console.log(response);
        results.textContent = `Clima: ${response.weather[0].main}, Temperatura: ${response.main.temp}`
    })
    .catch(err => {
        console.log(err)
    });
}

searchBtn.addEventListener('click', ()=>{
    search();
});

//fetch previo con async & await


let imgCtn = document.getElementById("imgCtn");
function getDogImg() {
    async function myFetch() {
        let url = "https://dog.ceo/api/breeds/image/random";
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    myFetch()
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

getDogImg();

