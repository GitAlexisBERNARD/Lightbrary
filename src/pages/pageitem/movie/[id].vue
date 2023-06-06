<template>
    <div v-if="film">
        <h1>{{ film.id }}</h1>
        <p>{{ film.title }}</p>
        <p>{{ film.genres.map(genre => genre.name).join(', ') }}</p>
        <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" :alt="film.title">
        <p>{{ film.overview }}</p>
        <button @click="saveToData(film.id)">Marque comme vu</button>
        <button @click="saveToFilm(film.id)">Watchlist</button>
        <div>
            <h2>Films similaire :</h2>
            <div v-for="filmss in films" :key="filmss.id">
                <RouterLink @click="reloadPage" :to="{ name: 'pageitem-movie-id', params: { id: filmss.id } }">
                    <img :src="'https://image.tmdb.org/t/p/w500' + filmss.poster_path" :alt="filmss.title">
                </RouterLink>
            </div>
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
            film: null,
            films: [],
            UserFilm: [],
        };
    },


    async mounted() {
        await this.fetchFilm();
        await this.fetchFilms(this.film.genres[0]);
    },

    methods: {
        reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 400); 
  },
        async fetchFilm() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=ab3ffc07e2a06a3122219298b0ba013b&language=fr-FR`);
            if (response.ok) {
                const data = await response.json();
                this.film = data;
            }
        },

        async saveToFilm(id) {
            const Info = pb.authStore.model.watchlist;
            console.log(Info);
            Info.Film.push(id);
            try {
                await pb.collection('users').update(pb.authStore.model.id.toString(), { 'watchlist': JSON.stringify(Info) });
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la liste de suivi :', error);
            }
        },
        async saveToData(id) {
            const Info = pb.authStore.model.data;
            console.log(Info);
            Info.Film.push(id);
            try {
                await pb.collection('users').update(pb.authStore.model.id.toString(), { 'data': JSON.stringify(Info) });
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la liste de suivi :', error);
            }
        },
        async fetchFilms(genreId) {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ab3ffc07e2a06a3122219298b0ba013b&with_genres=${genreId}`);
            if (response.ok) {
                const data = await response.json();
                this.films = data.results.slice(0, 5);
            }
        },

    },
};
</script>
