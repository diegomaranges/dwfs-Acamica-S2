/*
Vamos a utilizar una API que nos brinda GitHub para traer información a nuestro desarrollo y poder mostrarla en nuestro sitio.
En el siguiente ejercicio vamos a crear juntos una función que reciba como parámetro un usuario de GitHub y nos de su información y cuáles son sus 5 primeros seguidores.
Encuentra la información del usuario haciendo una llamada a:
https://api.github.com/users/ + username
*/
function getFollowers(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            for (let index = 0; index < 5; index++) {
                console.log(json[index].login);
            }
        })
        .catch(err => console.error(err));
};

function githubUser(userName) {
    fetch('https://api.github.com/users/' + userName)
        .then(response => response.json())
        .then( json => {
            console.log(json);// la informacion del usuario
            getFollowers(json.followers_url);
        })
        .catch(err => console.error(err));
};

githubUser('diegomaranges');
