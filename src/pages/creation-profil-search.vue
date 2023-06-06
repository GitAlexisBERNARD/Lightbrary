<template>
  <main class="bg-Primary1(Black) pb-10">
    <header class="grille_mobile lg:grille_desktop pt-10">
      <h1 class="col-span-4 font-text font-bold text-Primary2(White) text-[24px] lg:col-span-6 lg:text-[30px]">Création profil utilisateur</h1>
      <p class="col-span-4 font-text text-Primary2(White) text-[15px] lg:col-span-10 lg:text-[20px] pb-10">Pour finir la création de votre profil, nous vous invitons à ajouter vos 5 films, vos 5 séries, vos 5 livres et vos 5 musiques préférés via la barre de recherche ci-dessous.</p>
      <div class="col-span-4 lg:col-span-6 lg:col-start-4 flex items-center bg-[#2C2927] border border-Secondary1(Gold) rounded-[20px] gap-5 px-3">
        <img class="w-6 h-6" src="/img/icon_search.webp" alt="Icone rechercher">
        <input class="w-full h-14 bg-[#2C2927] font-text text-Secondary1(Gold) focus:outline-none" type="text" id="search"
        v-model="search" placeholder="Recherche" @keyup.enter="fetchData" />
      </div>
    </header>

    <div class="grille_mobile lg:grille_desktop" v-for="(item, index) in combinedResults" :key="index">
      <template v-if="item.type === 'film'">
        <div class="col-span-3 col-start-2 lg:col-span-4 lg:col-start-6 pb-10 pr-1 bg-[#2C2927] border-b-[1px] border-r-[1px] border-Secondary1(Gold) font-text flex justify-between items-center">
          <div>
            <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">{{ item.title }}</h4>
            <p class="hidden">{{ item.id }}</p>
            <p class="italic text-[10px] text-Secondary2(Beige)">Film/Série</p>
          </div>
          <button class="mt-5" @click="saveToFilm(item.id)">
            <p>Validation</p>   
            <img class="w-[34px]" src="/img/plus.webp" alt="Icone plus">
          </button>
        </div>
      </template>

      <template v-else-if="item.type === 'book'">
        <div class="col-span-3 col-start-2 lg:col-span-4 lg:col-start-6 pb-10 pr-1 bg-[#2C2927] border-b-[1px] border-r-[1px] border-Secondary1(Gold) font-text flex justify-between">
          <div>
            <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">{{ item.title }}</h4>
            <p class="italic text-[10px] text-Secondary2(Beige)">Livre</p>
          </div>
          <button class="mt-5" @click="saveToBook(item.id)">
            <p>Validation</p>
            <img class="w-[34px]" src="/img/plus.webp" alt="Icone plus">
          </button>
        </div>
      </template>

      <template v-else-if="item.type === 'music'">
        <div class="col-span-3 col-start-2 lg:col-span-4 lg:col-start-6 pb-10 pr-1 bg-[#2C2927] border-b-[1px] border-r-[1px] border-Secondary1(Gold) font-text flex justify-between">
          <div>
            <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">{{ item.trackName }}</h4>
            <p class="italic text-[10px] text-Secondary2(Beige)">Musique</p>
          </div>
          <button class="mt-5" @click="saveToMusic(item.trackId)">
            <p>Validation</p>
            <img class="w-[34px]" src="/img/plus.webp" alt="Icone plus">
          </button>
        </div>
      </template>
    </div>
    <br>
    <div class="grille_mobile lg:grille_desktop my-10">
      <button class="col-span-2 col-start-2 lg:col-span-4 lg:col-start-5 bg-Secondary1(Gold) py-3 px-5 font-text font-medium rounded-[8px] lg:text-[20px]" @click="saveToPocketBase()">Inscription</button>
    </div>

  </main>
</template>
<script>
import SearchIcon from '@/components/icons/search.vue';
import PocketBase from 'pocketbase';
import { useRouter } from 'vue-router';

var pocketbase_ip = '';
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);

export default {
  setup() {
    const router = useRouter();
    return { router };
  },
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

