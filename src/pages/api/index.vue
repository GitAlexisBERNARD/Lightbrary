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
      </template>
      <template v-else-if="item.type === 'book'">
        <img v-if="item.thumbnail" :src="item.thumbnail" :alt="item.title" />
        <p>{{ item.title }}</p>
      </template>
      <template v-else-if="item.type === 'music'">
        <img :src="item.artworkUrl100" :alt="item.trackName" />
        <h4>{{ item.trackName }}</h4>
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
      clientId: '14d536499af34c37b295c11c199652b0',
      combinedResults: []
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
      const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${this.search}`;
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
        this.films = result.d.map(item => ({
          title: item.l,
          type: 'film',
          imageUrl: item.i && item.i.imageUrl ? item.i.imageUrl : ''
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
        this.books = result.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
          type: 'book'
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
        this.tracks = data.results.slice(0, 10).map(item => ({
          trackId: item.trackId,
          artworkUrl100: item.artworkUrl100,
          trackName: item.trackName,
          type: 'music'
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
      }

      this.combinedResults = combined;
    }
  }
};
</script>
