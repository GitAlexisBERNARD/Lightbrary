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
    async rechargerPage() {
      window.location.reload();
    },
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

<template>
  <main>
    <header class="grille_mobile lg:grille_desktop relative">
      <div class="col-span-4 lg:col-span-6 lg:col-start-4 flex items-center border border-Secondary1(Gold) rounded-[20px] gap-5 px-3">
        <img class="w-6 h-6" src="/img/icon_search.webp" alt="Icone rechercher">
        <input class="w-full h-14 bg-Primary1(Black) font-text text-Secondary1(Gold) focus:outline-none" type="text" id="search"
          v-model="search" placeholder="Recherche un film, une série..." @keyup.enter="fetchData" />
        <!-- <button class="font-text font-bold text-Primary2(White)" @click="fetchData">OK</button>  -->
      </div>
    </header>

    <button class="text-Primary2(White)" @click="rechargerPage">
      Retour
    </button>

    <div class="grille_mobile" v-for="(item, index) in combinedResults" :key="index">
      <template v-if="item.type === 'film'">
        <img class="col-span-1 w-full mb-5 pb-5" v-if="item.imageUrl" :src="item.imageUrl" :alt="item.title" />
        <div class="col-span-3 col-start-2 mb-5 pb-5 border-b-[3px] border-Secondary1(Gold) font-text">
          <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">
            {{ item.title }}
          </h4>
          <p class="text-[11px] text-Gray1" v-if="item.authorPromise">{{ item.author }}</p>
        </div>
        
      </template>

      <template v-else-if="item.type === 'book'">
        <img class="col-span-1 w-full mb-5 pb-5" v-if="item.thumbnail" :src="item.thumbnail" :alt="item.title" />
        <div class="col-span-3 col-start-2 mb-5 pb-5 border-b-[3px] border-Secondary1(Gold) font-text">
          <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">
            {{ item.title }}
          </h4>
          <p class="text-[11px] text-Gray1">{{ item.authors }}</p>
          <p class="italic text-[10px] text-Secondary2(Beige)">{{ item.genre }}</p>
        </div>
        
      </template>

      <template v-else-if="item.type === 'music'">
        <img class="col-span-1 w-full mb-5 pb-5" :src="item.artworkUrl100" :alt="item.trackName" />
        <div class="col-span-3 col-start-2 mb-5 pb-5 border-b-[3px] border-Secondary1(Gold) font-text">
          <h4 class="font-bold text-[14px] text-Primary2(White) mt-2">
            {{ item.trackName }}
          </h4>
          <p class="text-[11px] text-Gray1">{{ item.authors }}</p>
          <p class="italic text-[10px] text-Secondary2(Beige)">{{ item.genre }}</p>
        </div>
      </template>
    </div>
  </main>
</template>