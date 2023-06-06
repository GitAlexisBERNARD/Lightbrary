<template>
    <div> 
      <h6>Accueil > Profil</h6>
      <h2>{{ name }}</h2>
      <h2>Date de creation du profil :{{ created }}</h2>
      <img v-if="url" :src="url" alt="image de profil" />
      <img v-else src="default-avatar.png" alt="image de profil par défaut" />
      <h3>Ma liste</h3>
      <div>
        <h2>Films</h2>
        <ul>
          <li v-for="movie in movies" :key="movie.id">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Affiche du film" />
          </li>
        </ul>
        <h2>Musique</h2>
        <ul>
          <li v-for="song in songs" :key="song.trackId">
            <h3>{{ song.trackName }}</h3>
            <img :src="song.artworkUrl100" alt="Pochette de la chanson" />
          </li>
        </ul>
        <h2>Livres</h2>
        <ul>
          <li v-for="book in books" :key="book.id">
            <h3>{{ book.volumeInfo.title }}</h3>
            <img :src="book.volumeInfo.imageLinks.thumbnail" alt="Couverture du livre" />
          </li>
        </ul>
      </div>
      <h3>Statistique</h3>
      <ul>
        <li v-for="(genre, index) in topFiveGenres" :key="index">
          <p>{{ genre[1] }}pts {{ genre[0] }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import PocketBase from 'pocketbase';
  
  let pocketbase_ip = '';
  if (import.meta.env.MODE === 'production') {
    pocketbase_ip = '193.168.146.150:80';
  } else {
    pocketbase_ip = 'http://127.0.0.1:8090';
  }
  
  const pb = new PocketBase(pocketbase_ip);
  
  export default {
    data() {
      return {
        watchlist: {
          Film: [],
          Musique: [],
          Livre: [],
        },
        userInfo: {
          name: '',
          img: '',
          genre: [],
        },
        movies: [],
        songs: [],
        books: [],
        topFiveGenres: [],
        url: '',
        name: '',
        created: '',
      };
    },
    async mounted() {
      const userInfopb = await pb.authStore.model;
      const userInfo = await pb.collection('users').getOne(userInfopb.id.toString());
      this.watchlist = userInfo.watchlist;
      this.calculateTopGenres();
      const img = userInfo.img;
      this.url = pb.files.getUrl(userInfo, img, { thumb: '100x250' });
      this.name = userInfo.name;
      this.created = userInfo.created.slice(0, 10);
      console.log(this.url);
      console.log("test");
  
      if (this.watchlist.Film && this.watchlist.Film.length > 0) {
        for (const movieId of this.watchlist.Film) {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ab3ffc07e2a06a3122219298b0ba013b`);
          const movie = await res.json();
          this.movies.push(movie);
        }
      }
  
      if (this.watchlist.Musique && this.watchlist.Musique.length > 0) {
        for (const songId of this.watchlist.Musique) {
          const res = await fetch(`https://itunes.apple.com/lookup?id=${songId}`);
          const musicData = await res.json();
          console.log(musicData);
          this.songs.push(...musicData.results);
        }
      }
  
      if (this.watchlist.Livre && this.watchlist.Livre.length > 0) {
        for (const bookId of this.watchlist.Livre) {
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
          const book = await res.json();
          this.books.push(book);
        }
      }    
    },
    methods: {
      calculateTopGenres() {
        let genreCounts = {};
        for (let category in this.userInfo.genre) {
          this.userInfo.genre[category].forEach((genre) => {
            genreCounts[genre] = genreCounts[genre] ? genreCounts[genre] + 1 : 1;
          });
        }
        let genres = Object.keys(genreCounts).map((genre) => [genre, genreCounts[genre]]);
        genres.sort((a, b) => b[1] - a[1]);
        this.topFiveGenres = genres.slice(0, 5);
      },
    },
  };
  </script>
  