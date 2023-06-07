<template>
  <div>
    <h1>Chargement en cours</h1>
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderPage from '@/components/HeaderPage.vue';
import PocketBase from 'pocketbase';
import { Router } from 'vue-router'; 

var pocketbase_ip = '';
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);

export default {
  data() {
    return {
      userInfo: null
    };
  },
  async mounted() {
    const userInfo = pb.authStore.model;
    console.log(userInfo);
    this.userInfo = userInfo;
    const genres = await this.getGenres(pb.authStore.model.data);
    this.updateGenre(genres);
    this.$router.push('/pageitem');
  },
  
  methods: {
    async updateGenre(json) {
      const userInfo = pb.authStore.model.id.toString();
      try {
        await pb.collection('users').update(userInfo, { 'genre': `${json}` });
      } catch (error) {
        console.error(error);
      }
    },
    async getGenres(jsonData) {
      const movieGenreApiUrl = 'https://api.themoviedb.org/3/movie/';
      const bookGenreApiUrl = 'https://www.googleapis.com/books/v1/volumes/';
      const musicGenreApiUrl = 'https://itunes.apple.com/lookup?id=';

      const genres = {};

      if (jsonData.Film) {
        for (const movieId of jsonData.Film) {
          const response = await fetch(`${movieGenreApiUrl}${movieId}?api_key=ab3ffc07e2a06a3122219298b0ba013b`);
          const movieData = await response.json();

          if (movieData.genres) {
            genres[`Film_${movieId}`] = movieData.genres;
          }
        }
      }

      if (jsonData.Livre) {
        for (const bookId of jsonData.Livre) {
          const response = await fetch(`${bookGenreApiUrl}${bookId}`);
          const bookData = await response.json();

          if (bookData.volumeInfo && bookData.volumeInfo.categories) {
            genres[`Livre_${bookId}`] = bookData.volumeInfo.categories;
          }
        }
      }

      if (jsonData.Musique) {
        for (const musicId of jsonData.Musique) {
          const response = await fetch(`${musicGenreApiUrl}${musicId}`);
          const musicData = await response.json();

          if (musicData.results && musicData.results[0] && musicData.results[0].primaryGenreName) {
            genres[`Musique_${musicId}`] = [musicData.results[0].primaryGenreName];
          }
        }
      }

      const transformedGenres = {};

      for (const key in genres) {
        const [type, id] = key.split('_');
        const genreData = genres[key];

        if (!transformedGenres[type]) {
          transformedGenres[type] = { id: [], genre: [] };
        }

        transformedGenres[type].id.push(id);

        genreData.forEach(genreItem => {
          const genre = genreItem.name || genreItem;

          if (genre.includes('&')) {
            const separatedGenres = genre.split(' & ');
            transformedGenres[type].genre.push(...separatedGenres);
          } else {
            transformedGenres[type].genre.push(genre);
          }
        });
      }

      return JSON.stringify(transformedGenres);
    }
  }
};
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

</script>
