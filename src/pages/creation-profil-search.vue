<script>
  import SearchIcon from '@/components/icons/search.vue';
  import PocketBase from 'pocketbase';
  
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
        UserFilm: [],
        UserBook: [],
        UserMusique: [],
        films: [],
        books: [],
        tracks: [],
        search: '',
        tmdbApiKey: 'ab3ffc07e2a06a3122219298b0ba013b',
        combinedResults: [],
      };
    },
  
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        await this.fetchFilms();
        await this.fetchBooks();
        await this.fetchTracks();
        this.combineResults();
      },
      async fetchFilms() {
        const apiKey = this.tmdbApiKey;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.search}`;
  
        try {
          const response = await fetch(url);
          const result = await response.json();
          this.films = result.results.map((item) => ({
            id: item.id,
            title: item.title,
            type: 'film',
            imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }));
        } catch (error) {
          console.error(error);
        }
      },
      async fetchBooks() {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.search}`;
        try {
          const response = await fetch(url);
          const result = await response.json();
          this.books = result.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
            type: 'book',
          }));
        } catch (error) {
          console.error(error);
        }
      },
      async fetchTracks() {
        const url = `https://itunes.apple.com/search?term=${this.search}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          this.tracks = data.results.slice(0, 10).map((item) => ({
            trackId: item.trackId,
            artworkUrl100: item.artworkUrl100,
            trackName: item.trackName,
            type: 'music',
          }));
        } catch (error) {
          console.error('Request failed:', error);
        }
      },
      combineResults() {
        const combined = [];
        let filmIndex = 0;
        let bookIndex = 0;
        let trackIndex = 0;
  
        while (
          filmIndex < this.films.length ||
          bookIndex < this.books.length ||
          trackIndex < this.tracks.length
        ) {
          if (filmIndex < this.films.length) {
            combined.push(this.films[filmIndex]);
            filmIndex++;
          }
  
          if (bookIndex < this.books.length) {
            combined.push(this.books[bookIndex]);
            bookIndex++;
          }
  
          if (trackIndex < this.tracks.length) {
            combined.push(this.tracks[trackIndex]);
            trackIndex++;
          }
          if (
            filmIndex >= this.films.length &&
            bookIndex >= this.books.length &&
            trackIndex >= this.tracks.length
          ) {
            break;
          }
        }
  
        this.combinedResults = combined;
      },
      saveToFilm(id) {
        this.UserFilm.push(id);
        console.log(this.UserFilm);
      },
      saveToBook(id) {
        this.UserBook.push(id);
        console.log(this.UserBook);
      },
      saveToMusic(id) {
        this.UserMusique.push(id);
        console.log(this.UserMusique);
      },
      async saveToPocketBase() {
        const userData = {
          Film: this.UserFilm,
          Livre: this.UserBook,
          Musique: this.UserMusique,
        };
        const jsonData = JSON.stringify(userData);
        const userInfo = pb.authStore.model.id.toString();
        try {
          await pb.collection('users').update(userInfo,{'data': `${jsonData}`});
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
</script>

<template>
    <main>
      <p>Test API</p>
      <label for="search">Barre de recherche:</label>
      <input type="text" id="search" v-model="search" />
      <button @click="fetchData">OK</button>
      <SearchIcon @click="fetchData" />
  
      <div v-for="(item, index) in combinedResults" :key="index">
        <template v-if="item.type === 'film'">
          <p>{{ item.title }}</p>
          <p>{{ item.id }}</p>
          <p>Film/Serie</p>
          <button @click="saveToFilm(item.id)">Validation</button>
        </template>
        <template v-else-if="item.type === 'book'">
          <p>{{ item.title }}</p>
          <p>Livres</p>
          <button @click="saveToBook(item.id)">Validation</button>
        </template>
        <template v-else-if="item.type === 'music'">
          <p>{{ item.trackName }}</p>
          <p>Musique</p>
          <button @click="saveToMusic(item.trackId)">Validation</button>
        </template>
      </div>
      <br>
      <button @click="saveToPocketBase()">Inscription</button>
    </main>
</template>