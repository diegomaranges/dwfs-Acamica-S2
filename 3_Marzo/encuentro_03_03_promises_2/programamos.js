let pokeCtn = document.getElementById("pokeCtn");

//fetch de los pokemones
let pokemon1 = fetch("https://pokeapi.co/api/v2/pokemon/46").then(res => res.json());
let pokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/73").then(res => res.json());
let pokemon3 = fetch("https://pokeapi.co/api/v2/pokemon/12").then(res => res.json());

function addToDom(info) {
    let ctn = document.createElement("div");
    let name = document.createElement("h2");
    let img = document.createElement("img");
    name.textContent = `${info.name} #${info.id}`;
    img.setAttribute("src", info.sprites.front_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
};

Promise.all([pokemon1, pokemon2, pokemon3])
.then(data => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
        addToDom(data[index]);
    }
})
.catch(err => console.error(err));
