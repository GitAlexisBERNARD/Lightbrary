<template>
  <main>
    <p>Test API</p>
    <label for="search">Barre de recherche:</label>
    <input type="text" id="search" v-model="search" />
    <button @click="fetchData">OK</button>

    <div v-for="(item, index) in combinedResults" :key="index">
      <template v-if="item.type === 'film'">
        <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.title" />
        <p>{{ item.title }}</p>
        <p v-if="item.authorPromise">{{ item.author }}</p>
      </template>
      <template v-else-if="item.type === 'book'">
        <img v-if="item.thumbnail" :src="item.thumbnail" :alt="item.title" />
        <p>{{ item.title }}</p>
        <p>{{ item.authors }}</p>
        <p>{{ item.genre }}</p>
      </template>
      <template v-else-if="item.type === 'music'">
        <img :src="item.artworkUrl100" :alt="item.trackName" />
        <p>{{ item.trackName }}</p>
        <p>{{ item.authors }}</p>
        <p>{{ item.genre }}</p>
      </template>
    </div>
  </main>
</template>



<script>
export default {
  data() {
    return {
      films: [],
      books: [],
      tracks: [],
      search: '',
      combinedResults: [],
      tmdbApiKey: 'ab3ffc07e2a06a3122219298b0ba013b'
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
        console.log(this.films)
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAuthor(id) {
      const apiKey = this.tmdbApiKey;
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        const crew = result.crew;
        const director = crew.find(member => member.job === 'Director');
        if (director) {
          return director.name;
        } else {
          return 'Auteur inconnu';
        }
      } catch (error) {
        console.error(error);
        return 'Erreur lors de la récupération de l\'auteur';
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
          authors: item.volumeInfo.authors[0],
          genre: item.volumeInfo.categories[0],
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
          genre: item.primaryGenreName,
          authors: item.artistName,
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
      const film = this.films[filmIndex];
      film.authorPromise = this.fetchAuthor(film.id)
        .then(author => {
          film.author = author;
        })
        .catch(error => {
          film.author = 'Erreur lors de la récupération de l\'auteur';
          console.error(error);
        });
      combined.push(film);
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
  }

  this.combinedResults = combined;
},

  },
};
</script>
