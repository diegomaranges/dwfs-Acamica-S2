//7fb789f2
let apiKey = '7fb789f2';

async function getMovieByTitle(title) {
    let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

getMovieByTitle('Donnie Darko');
