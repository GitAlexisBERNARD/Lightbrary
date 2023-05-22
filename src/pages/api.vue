<template>
  <main>
      <p>
          Test Api
      </p>
      <div class="movies"></div>
  </main>
  </template>
  
  <script>
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
      let cards = '';
      list.forEach((movie) => {
        console.log(movie);
        const name = movie.l;
        const image = movie.i.imageUrl;
        const card = `<li><img src="${image}" alt="${name}" /><p>${name}</p></li>`;
        cards += card;
        console.log(image);
      });
      document.querySelector('.movies').innerHTML = cards;
    } catch (error) {
      console.error(error);s
    };
  </script>
