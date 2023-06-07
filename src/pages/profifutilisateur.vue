<template>
    <main class="bg-Primary1(Black)">
        <section>
            <header class="grille_mobile lg:grille_profil">
                <h6 class="hidden lg:block font-text text-Primary2(White) col-span-4 lg:col-span-12">Accueil > Profil</h6>
                <h1 class="hidden lg:block font-text font-bold text-Primary2(White) text-[27px]">{{ name }}</h1>

                <img class="rounded-[9999px] col-span-4 border-[5px] border-Primary2(White) my-5 lg:rounded-[0px] lg:border-none lg:col-span-2 lg:col-start-1 lg:my-0" v-if="url" :src="url" alt="image de profil">
                <img class="rounded-[9999px] col-span-4 border-[5px] border-Primary2(White) my-5 lg:rounded-[0px] lg:border-none lg:col-span-2 lg:col-start-1 lg:my-0" v-else src="default-avatar.png" alt="image de profil par défaut" />

                <div class="col-span-4 flex justify-between lg:hidden">
                    <button class="bg-Secondary1(Gold) rounded-[8px] py-3 px-5">
                        <RouterLink class="font-text font-medium" to="/modifcationprofil">
                            Modifier profil
                        </RouterLink>
                    </button>
                    <button class="bg-Secondary1(Gold) rounded-[8px] py-3 px-5">
                        <RouterLink class="font-text font-medium" to="">
                            Partager profil
                        </RouterLink>
                    </button>
                </div>

                <div class="hidden lg:flex lg:col-span-5 font-text font-medium text-Primary2(White) text-[14px]">
                    <p>Membre de Lightbrary depuis - </p>
                    <p class="text-Secondary1(Gold)">- {{ created.slice(0, 4) }}</p>
                </div>

                
            </header>
            
            <article class="pt-20 lg:pt-7">
                <div class="grille_mobile lg:grille_profil border-b-[3px] border-Secondary1(Gold) pb-7 lg:border-none">
                    <RouterLink class="col-span-2 flex gap-3 items-center font-text text-Primary2(White) lg:hidden" to="">
                        <like/>

                        Ma liste
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end lg:hidden" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>

                    <h2 class="hidden lg:block lg:col-span-2 lg:font-text lg:font-bold lg:text-Primary2(White) lg:text-[24px] lg:border-b lg:border-Secondary1(Gold) lg:pb-2 lg:pl-1">Ma liste</h2>

                    <div class="hidden lg:flex lg:justify-between lg:row-start-2 lg:col-span-12">
                      <h3 class="lg:font-text lg:font-medium lg:text-Primary2(White) lg:text-[20px]">Films</h3>
                      <ul>
                        <li v-for="movie in movies" :key="movie.id">
                          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Affiche du film" />
                        </li>
                      </ul>

                      <h3 class="lg:font-text lg:font-medium lg:text-Primary2(White) lg:text-[20px]">Musique</h3>
                      <ul>
                        <li v-for="song in songs" :key="song.trackId">
                          <h3>{{ song.trackName }}</h3>
                          <img :src="song.artworkUrl100" alt="Pochette de la chanson" />
                        </li>
                      </ul>

                      <h3 class="lg:font-text lg:font-medium lg:text-Primary2(White) lg:text-[20px]">Livres</h3>
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

                <div class="grille_mobile lg:grille_profil py-7">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White) lg:hidden" to="">
                        <stat/>

                        Mes statistiques
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end lg:hidden" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>

                    <h2 class="hidden lg:block lg:col-span-3 lg:font-text lg:font-bold lg:text-Primary2(White) lg:text-[24px] lg:border-b lg:border-Secondary1(Gold) lg:pb-2 lg:pl-1">Mes statistiques</h2>

                    <div class="hidden lg:block lg:col-span-6 lg:row-start-2 lg:font-text lg:text-Primary2(White)">
                      <ul>
                        <li v-for="(genre, index) in topFiveGenres" :key="index">
                          <p class="ml-20 pt-4">{{ genre[1] }}pts {{ genre[0] }}</p>
                        </li>
                      </ul>
                    </div>
                </div>

                <div class="grille_mobile lg:grille_profil border-b-[3px] border-Secondary1(Gold) pb-7 lg:border-none">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White) lg:col-span-4 lg:text-[18px] lg:border-t lg:border-t-Secondary1(Gold) lg:pt-2" to="">
                        <reset/>

                        Réinitialiser statistiques 
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end lg:hidden" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile py-7 lg:hidden">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <langue/>

                        Langues
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile pb-7 lg:hidden">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <deconnexion/>

                        Déconnexion
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>
            </article>
        </section>
    </main>
  </template>

  <script setup lang="ts">
  import like from '@/components/icons/like.vue';
  import stat from '@/components/icons/stat.vue';
  import reset from '@/components/icons/reset.vue';
  import langue from '@/components/icons/langue.vue';
  import deconnexion from '@/components/icons/deconnexion.vue';
  import chevronRightVue from '@/components/icons/chevron-right.vue';
  </script>
  
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
  