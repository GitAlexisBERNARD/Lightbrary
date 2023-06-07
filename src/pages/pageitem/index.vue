<template>
  <div>
    <h1>Bienvenue sur le tableau de bord</h1>
    <div v-if="otherResults.length > 0">
      <RouterLink :to="{ name: 'pageitem-movie-id', params: { id: otherResults[0].movieID[0] } }">
        <img :src="otherResults[0].movie[0]" alt="Image de film">
        <p>Score d'affinité : 100</p>
      </RouterLink>
      <RouterLink :to="{ name: 'pageitem-movie-id', params: { id: otherResults[0].movieID[1] } }">
        <img :src="otherResults[0].movie[1]" alt="Image de film">
        <p>Score d'affinité : 100</p>
      </RouterLink>
      <RouterLink :to="{ name: 'pageitem-book-id', params: { id: otherResults[0].bookID[0] } }">
        <img :src="otherResults[0].book[0]" alt="Image de livre">
        <p>Score d'affinité : 100</p>
      </RouterLink>
      <RouterLink :to="{ name: 'pageitem-music-id', params: { id: otherResults[0].musicID[0] } }">
        <img :src="otherResults[0].music[0]" alt="Image de musique">
        <p>Score d'affinité : 100</p>
      </RouterLink>
    </div>
    <p>separation</p>
    <div v-for="result in otherResults" :key="result.genre">
      <h2>{{ result.genre }}</h2>
      <div v-for="index in result.minCount" :key="index">
        <div v-if="index < result.movie.length">
          <RouterLink :to="{ name: 'pageitem-movie-id', params: { id: result.movieID[index] } }">
            <img :src="result.movie[index]" :alt="'Image de film ' + index">
            <p>Score d'affinité : {{ result.affinityScore -index }}</p>
          </RouterLink>
        </div>
        <div v-if="index < result.book.length">
          <RouterLink :to="{ name: 'pageitem-book-id', params: { id: result.bookID[index] } }">
            <img :src="result.book[index]" :alt="'Image de livre ' + index">
            <p>Score d'affinité : {{ result.affinityScore -index }}</p>
          </RouterLink>
        </div>
        <div v-if="index < result.music.length">
          <RouterLink :to="{ name: 'pageitem-music-id', params: { id: result.musicID[index] } }">
            <img :src="result.music[index]" :alt="'Image de musique ' + index">
            <p>Score d'affinité : {{ result.affinityScore -index }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { RouterLink } from 'vue-router';
import HeaderPage from '@/components/HeaderPage.vue';
import PocketBase from 'pocketbase';
import { verifaction } from '@/auth'; 
verifaction();

function rechargerPageUneSeuleFois() {
  if (!sessionStorage.getItem('pageReloaded')) {
    sessionStorage.setItem('pageReloaded', 'true');
    location.reload();
  }
}

rechargerPageUneSeuleFois();

export default {
  data() {
    return {
      userInfo: null,
      firstResults: null,
      otherResults: []
    };
  },
  async mounted() {

    var pocketbase_ip = '';
    if (process.env.NODE_ENV === 'production') {
      pocketbase_ip = '193.168.146.150:80';
    } else {
      pocketbase_ip = 'http://127.0.0.1:8090';
    }
    const pb = new PocketBase(pocketbase_ip);
    const data = pb.authStore.model.genre;
    let genreCounts = {};
    for (let category in data) {
      data[category].genre.forEach(genre => {
        genreCounts[genre] = genreCounts[genre] ? genreCounts[genre] + 1 : 1;
      });
    }
    let genres = Object.keys(genreCounts).map(genre => [genre, genreCounts[genre]]);
    genres.sort((a, b) => b[1] - a[1]);
    let topFiveGenres = genres.slice(0, 5);
    console.log(topFiveGenres);

    await this.fetchGenreResults(topFiveGenres);
  },
  methods: {
    calculateAffinityScore(genreResults) {
    let i = 1;
    const score = 100 - i;
    i = i + 1;
    return score;
  },
    getMinIndex(arrays) {
    let minIndex = 0;
    for (let i = 1; i < arrays.length; i++) {
      if (arrays[i].length < arrays[minIndex].length) {
        minIndex = i;
      }
    }
    return arrays[minIndex].length;
  },
    async fetchGenreId(genreName) {
      const genreListApiUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ab3ffc07e2a06a3122219298b0ba013b';
      const response = await fetch(genreListApiUrl);
      const data = await response.json();
      const genre = data.genres.find(genre => genre.name.toLowerCase() === genreName.toLowerCase());

      return genre ? genre.id : null;
    },

    async fetchGenreResults(topFiveGenres) {
      const movieGenreApiUrl = 'https://api.themoviedb.org/3/discover/movie';
      const bookGenreApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=subject:';
      const musicGenreApiUrl = 'https://itunes.apple.com/search?term=';

      for (let i = 0; i < topFiveGenres.length; i++) {
        const genreName = topFiveGenres[i][0];
        console.log(`Genre: ${genreName}`);

        // Create an object to store the results for this genre
        const genreResults = {
          genre: genreName,
          movie: [],
          book: [],
          music: [],
          bookID: [],
          musicID: [],
          movieID: [],
          minCount: Infinity
        };

        // Fetching movies
        const genreId = await this.fetchGenreId(genreName);
        if (genreId !== null) {
          const movieApiUrl = `${movieGenreApiUrl}?api_key=ab3ffc07e2a06a3122219298b0ba013b&with_genres=${genreId}`;
          const movieResponse = await fetch(movieApiUrl);
          const movieData = await movieResponse.json();
          console.log('Résultats de films:', movieData);
          if (movieData.results.length > 0) {
            for (let j = 0; j < movieData.results.length; j++) {
              const movieImage = 'https://image.tmdb.org/t/p/w500' + movieData.results[j].poster_path;
              genreResults.movie.push(movieImage);
              genreResults.movieID.push(movieData.results[j].id);
            }
          }

        } else {
          console.log(`Genre inconnu pour les films: ${genreName}`);
        }

        // Fetching books
        const bookApiUrl = `${bookGenreApiUrl}${encodeURIComponent(genreName)}`;
        const bookResponse = await fetch(bookApiUrl);
        const bookData = await bookResponse.json();
        console.log('Résultats de livres:', bookData);
        if (bookData.items && bookData.items.length > 0) {
          for (let k = 0; k < bookData.items.length; k++) {
            const bookImage = bookData.items[k].volumeInfo.imageLinks?.thumbnail;
            const bookID = bookData.items[k].id;
            genreResults.book.push(bookImage);
            genreResults.bookID.push(bookID);
          }
        }

        // Fetching music
        try {
          const musicApiUrl = `${musicGenreApiUrl}${encodeURIComponent(genreName)}&entity=song`;
          const musicResponse = await fetch(musicApiUrl);
          const musicData = await musicResponse.json();
          console.log('Résultats de musique:', musicData);
          if (musicData.results.length > 0) {
            for (let l = 0; l < musicData.results.length; l++) {
              const musicImage = musicData.results[l].artworkUrl100;
              genreResults.music.push(musicImage);
              genreResults.musicID.push(musicData.results[l].trackId);
            }
          }
        } catch (error) {
          console.log(`Erreur lors de la recherche de musique pour le genre ${genreName}:`, error);
        }

        genreResults.minCount = this.getMinIndex([genreResults.movie, genreResults.book, genreResults.music]);

        genreResults.affinityScore = this.calculateAffinityScore(genreResults);
        this.otherResults.push(genreResults);;
      }
    }
  }
};
</script>