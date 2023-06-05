const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=ready';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f039a0d17amsh8acc9535f5b5493p14861ejsn58ca1ebc290f',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  const list = result.d;
  list.map((movie) => {
    console.log(movie);
    const name = movie.l;
    const image = movie.i.imageUrl;
    const card = `<li><img src="${image}" alt="${name}" /><p>${name}</p></li>`;
    document.querySelector('.movies').innerHTML += card;
  })
} catch (error) {
  console.error(error);
}
