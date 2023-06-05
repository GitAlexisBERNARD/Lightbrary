<template>
  <main>
    <p>
      Test API
    </p>
    <label for="search">Barre de recherche:</label>
    <input type="text" id="search" v-model="search" /><button @click="fetchFilms">OK</button>
    <ul>
      <li v-for="film in films" :key="film.id">
        <img v-if="film.i" :src="film.i.imageUrl" :alt="film.l" />
        <p>{{ film.l }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="book in books" :key="book.id">
        <img v-if="book.thumbnail" :src="book.thumbnail" :alt="book.title" />
        <p>{{ book.title }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="track in tracks" :key="track.id">
        <img v-if="track.album.images.length > 0" :src="track.album.images[0].url" :alt="track.name" />
        <p>{{ track.name }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      films: [],
      books: [],
      tracks: [],
      search: 'Ready',
      clientId: '14d536499af34c37b295c11c199652b0'
    };
  },
  mounted() {
    this.fetchFilms();
    this.fetchBooks();
    this.fetchTracks();
  },
  methods: {
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
        this.films = result.d;
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
          thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTracks() {
      const apiUrl = `https://api.spotify.com/v1/search?type=track&q=${this.search}`;

      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `Bearer ${this.clientId}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          const tracks = data.tracks.items;

          this.tracks = tracks.map(track => ({
            id: track.id,
            name: track.name,
            album: track.album
          }));
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
