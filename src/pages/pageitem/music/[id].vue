<template>
    <div v-if="song">artistId
      <h1>{{ song.trackName }}</h1>
      <img :src="song.artworkUrl100" :alt="song.trackName">
      <p>Auteur: {{ song.artistName }}</p>
      <p>Genre: {{ song.primaryGenreName }}</p>
      <p>Date de création: {{ formatDate(song.releaseDate) }}</p>
      <button @click="saveToData(song.artistId)">Marque comme vu</button>
        <button @click="saveToSong(song.artistId)">Watchlist</button>
      <h2>Morceaux similaires :</h2>
      <div v-for="similarSong in similarSongs" :key="similarSong.trackId">
        <img :src="similarSong.artworkUrl100" :alt="similarSong.trackName">
        <p>{{ similarSong.trackName }}</p>
      </div>
    </div>
    <div v-else>
      <p>Vide</p>
    </div>
  </template>
  
  <script lang="ts">
  import PocketBase from 'pocketbase';
  import { RouterLink } from 'vue-router';
  
  var pocketbase_ip = '';
  if (process.env.NODE_ENV === 'production') {
    pocketbase_ip = '193.168.146.150:80';
  } else {
    pocketbase_ip = 'http://127.0.0.1:8090';
  }
  
  const pb = new PocketBase(pocketbase_ip);
  
  export default {
    props: {
      id: String,
    },
    data() {
      return {
        song: null,
        similarSongs: [],
      };
    },
    
    async mounted() {
      await this.fetchSong();
      console.log(this.song);
      await this.fetchSimilarSongs();
    },
    
    methods: {
      reloadPage() {
        setTimeout(() => {
          window.location.reload();
        }, 400);
      },
      async fetchSong() {
        try {
          const response = await fetch(`https://itunes.apple.com/lookup?id=${this.id}`);
          if (response.ok) {
            const data = await response.json();
            this.song = data.results[0];
          }
        } catch (error) {
          console.error('Erreur lors de la récupération de la chanson:', error);
        }
      },
      async saveToSong(id) {
            const Info = pb.authStore.model.watchlist;
            console.log(Info);
            Info.Musique.push(id);
            try {
                await pb.collection('users').update(pb.authStore.model.id.toString(), { 'watchlist': JSON.stringify(Info) });
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la liste de suivi :', error);
            }
        },
        async saveToData(id) {
            const Info = pb.authStore.model.data;
            console.log(Info);
            Info.Musique.push(id);
            try {
                await pb.collection('users').update(pb.authStore.model.id.toString(), { 'data': JSON.stringify(Info) });
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la liste de suivi :', error);
            }
        },
      async fetchSimilarSongs() {
        try {
          const response = await fetch(`https://itunes.apple.com/lookup?id=${this.song.artistId}&entity=song&limit=5`);
          if (response.ok) {
            const data = await response.json();
            this.similarSongs = data.results.slice(1);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des morceaux similaires:', error);
        }
      },
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
      },
    },
  };
  </script>
  