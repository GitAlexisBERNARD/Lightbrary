<template>
  <main class="bg-Primary1(Black) text-Primary2(White)">
    <div>
      <Recherche/>
    </div>

    <div class="grille_mobile lg:grille_desktop pt-5">
      <h1 class="col-span-4 font-text text-Primary2(White) text-[24px]">Notre selection</h1>

      <div class="col-span-4 lg:col-span-12 flex gap-7 overflow-hidden overflow-x-scroll lg:justify-center" v-if="otherResults.length > 0">
        <RouterLink class="flex-none" :to="{ name: 'pageitem-movie-id', params: { id: otherResults[0].movieID[0] } }">
          <img :src="otherResults[0].movie[0]" alt="Image de film">
          <p>Score d'affinité : 100</p>
        </RouterLink>
        <RouterLink class="flex-none" :to="{ name: 'pageitem-movie-id', params: { id: otherResults[0].movieID[1] } }">
          <img :src="otherResults[0].movie[1]" alt="Image de film">
          <p>Score d'affinité : 100</p>
        </RouterLink>
        <RouterLink class="flex-none" :to="{ name: 'pageitem-book-id', params: { id: otherResults[0].bookID[0] } }">
          <img :src="otherResults[0].book[0]" alt="Image de livre">
          <p>Score d'affinité : 100</p>
        </RouterLink>
        <RouterLink class="flex-none" :to="{ name: 'pageitem-music-id', params: { id: otherResults[0].musicID[0] } }">
          <img :src="otherResults[0].music[0]" alt="Image de musique">
          <p>Score d'affinité : 100</p>
        </RouterLink>
      </div>
    </div>

    <div>
      <div class="px-5 font-text text-Primary2(White) text-[16px] flex justify-between gap-6 lg:w-[451px] lg:text-[24px] py-5">
        <p class="text-Secondary1(Gold) border-b-[3px]">Film - Série</p>
        <RouterLink to="/livre">
          Livre
        </RouterLink>
        <RouterLink to="/musique">
          Musique
        </RouterLink>
      </div>

      <div v-for="result in otherResults" :key="result.genre">
        <h2>{{ result.genre }}</h2>
        <div class="grille_mobile lg:grille_desktop" v-for="index in result.minCount" :key="index">
          <div class="relative min-w-[160px] max-w-[201px] col-span-2 border border-Primary2(White)" v-if="index < result.movie.length">
            <RouterLink :to="{ name: 'pageitem-movie-id', params: { id: result.movieID[index] } }">
              <img class="w-full h-full z-10 object-cover" :src="result.movie[index]" :alt="'Image de film ' + index">
            </RouterLink>

            <div class="w-[69px] h-[27px] absolute top-5 right-0 z-20 flex justify-center space-x-2 rounded-tl-[20px] rounded-bl-[20px] bg-Primary1(Black) border-r border-Primary2(White)">
              <IconeAffinite class="w-[14.24px] h-[21px]"/>
              <p class="text-Primary2(White) text-left text-18px font-text">{{ result.affinityScore -index }}</p>
            </div>
          </div>

          <div class="relative min-w-[160px] max-w-[201px] col-span-2 border border-Primary2(White)" v-if="index < result.book.length">
            <RouterLink :to="{ name: 'pageitem-book-id', params: { id: result.bookID[index] } }">
              <img class="w-full h-full z-10 object-cover" :src="result.book[index]" :alt="'Image de livre ' + index">
            </RouterLink>

            <div class="w-[69px] h-[27px] absolute top-5 right-0 z-20 flex justify-center space-x-2 rounded-tl-[20px] rounded-bl-[20px] bg-Primary1(Black) border-r border-Primary2(White)">
              <IconeAffinite class="w-[14.24px] h-[21px]"/>
              <p class="text-Primary2(White) text-left text-18px font-text">{{ result.affinityScore -index }}</p>
            </div>
          </div>

          <div class="relative min-w-[160px] max-w-[201px] col-span-2 border border-Primary2(White)" v-if="index < result.music.length">
            <RouterLink :to="{ name: 'pageitem-music-id', params: { id: result.musicID[index] } }">
              <img class="w-full h-full z-10 object-cover" :src="result.music[index]" :alt="'Image de musique ' + index">
            </RouterLink>

            <div class="w-[69px] h-[27px] absolute top-5 right-0 z-20 flex justify-center space-x-2 rounded-tl-[20px] rounded-bl-[20px] bg-Primary1(Black) border-r border-Primary2(White)">
              <IconeAffinite class="w-[14.24px] h-[21px]"/>
              <p class="text-Primary2(White) text-left text-18px font-text">{{ result.affinityScore -index }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Recherche from '@/components/Recherche.vue';
import IconeAffinite from '@/components/icons/Affinite.vue'
</script>

<script lang="ts">
import { RouterLink } from 'vue-router';
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