<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderPage from '@/components/HeaderPage.vue';
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
      userInfo: null,
    };
  },
  async mounted() {
    const userInfo = pb.authStore.model;
    console.log(userInfo);
    this.userInfo = userInfo;
    const genres = await this.getGenres(pb.authStore.model.data);
    this.updateGenre(genres);
    if (userInfo.firstconnexion === false) {
      await this.initwhilistdata();
      await pb.collection('users').update(userInfo.id.toString(), { 'firstconnexion': true });
    }
  },
  
  methods: {
    async initwhilistdata(){
      const userInfo = pb.authStore.model.id.toString();
      const json = JSON.stringify({ "Film": [], "Livre": [], "Musique": [] });
        try {
          await pb.collection('users').update(userInfo, { 'watchlist': `${json}`});
        } catch (error) {
          console.error(error);
        }
      },
    async updateGenre(json) {
      const userInfo = pb.authStore.model.id.toString();
      try {
        await pb.collection('users').update(userInfo, { 'genre': `${json}` });
      } catch (error) {
        console.error(error);
      }
    },
    async getGenres(jsonData) {
      const movieGenreApiUrl = 'https://api.themoviedb.org/3/movie/';
      const bookGenreApiUrl = 'https://www.googleapis.com/books/v1/volumes/';
      const musicGenreApiUrl = 'https://itunes.apple.com/lookup?id=';

      const genres = {};

      if (jsonData.Film) {
        for (const movieId of jsonData.Film) {
          const response = await fetch(`${movieGenreApiUrl}${movieId}?api_key=ab3ffc07e2a06a3122219298b0ba013b`);
          const movieData = await response.json();

          if (movieData.genres) {
            genres[`Film_${movieId}`] = movieData.genres;
          }
        }
      }

      if (jsonData.Livre) {
        for (const bookId of jsonData.Livre) {
          const response = await fetch(`${bookGenreApiUrl}${bookId}`);
          const bookData = await response.json();

          if (bookData.volumeInfo && bookData.volumeInfo.categories) {
            genres[`Livre_${bookId}`] = bookData.volumeInfo.categories;
          }
        }
      }

      if (jsonData.Musique) {
        for (const musicId of jsonData.Musique) {
          const response = await fetch(`${musicGenreApiUrl}${musicId}`);
          const musicData = await response.json();

          if (musicData.results && musicData.results[0] && musicData.results[0].primaryGenreName) {
            genres[`Musique_${musicId}`] = [musicData.results[0].primaryGenreName];
          }
        }
      }

      const transformedGenres = {};

      for (const key in genres) {
        const [type, id] = key.split('_');
        const genreData = genres[key];

        if (!transformedGenres[type]) {
          transformedGenres[type] = { id: [], genre: [] };
        }

        transformedGenres[type].id.push(id);

        genreData.forEach(genreItem => {
          const genre = genreItem.name || genreItem;

          if (genre.includes('&')) {
            const separatedGenres = genre.split(' & ');
            transformedGenres[type].genre.push(...separatedGenres);
          } else {
            transformedGenres[type].genre.push(genre);
          }
        });
      }

      return JSON.stringify(transformedGenres);
    }
  }
};
const data = {
  "Film": {
    "id": [
      "333339"
    ],
    "genre": [
      "Science Fiction",
      "Adventure",
      "Action"
    ]
  },
  "Livre": {
    "id": [
      "LH7ziruT7ZQC",
      "kRctEAAAQBAJ",
      "VugRtAEACAAJ",
      "XLVJDwAAQBAJ"
    ],
    "genre": [
      "Fiction / Science Fiction / General",
      "Fiction / Science Fiction / General",
      "Fiction / Science Fiction / Action",
      "Adventure",
      "Fiction / Literary",
      "Fiction / General"
    ]
  },
  "Musique": {
    "id": [
      "1354248992",
      "1454446626",
      "1454446624",
      "1412214020",
      "1454446630"
    ],
    "genre": [
      "Action",
      "Adventure",
      "Rock",
      "R&B/Soul",
      "Dance",
      "Rock"
    ]
  },
  "GenrePref": {
    "genre": [
      "Science Fiction",
      "Adventure"
    ]
  }
};

let genreCounts = {};

for (let category in data) {

  data[category].genre.forEach(genre => {

    genreCounts[genre] = genreCounts[genre] ? genreCounts[genre] + 1 : 1;
  });
}


let genres = Object.keys(genreCounts).map(genre => [genre, genreCounts[genre]]);


genres.sort((a, b) => b[1] - a[1]);

let topFiveGenres = genres.slice(0, 5);

console.log(topFiveGenres);

</script>

<script setup lang="ts">
import like from '@/components/icons/like.vue';
import stat from '@/components/icons/stat.vue';
import reset from '@/components/icons/reset.vue';
import langue from '@/components/icons/langue.vue';
import deconnexion from '@/components/icons/deconnexion.vue';
import chevronRightVue from '@/components/icons/chevron-right.vue';
import HomeCard from '@/components/HomeCard.vue'
</script>

<template>
    <main class="bg-Primary1(Black)">
        <section>
            <header class="grille_mobile lg:grille_profil">
                <h1 class="hidden lg:block font-text font-bold text-Primary2(White) text-[27px]">{{ userInfo.username }}</h1>

                <img class="rounded-[9999px] col-span-4 border-[5px] border-Primary2(White) my-5 lg:rounded-[0px] lg:border-none lg:col-span-2 lg:col-start-1 lg:my-0" src="../../../public/img/Test_Profil.webp" alt="Test">

                <div class="col-span-4 flex justify-between lg:hidden">
                    <button class="bg-Secondary1(Gold) rounded-[8px] py-3 px-5">
                        <RouterLink class="font-text font-medium" to="/profil/modifs">
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
                    <p>Membre de Lightbrary depuis le</p>
                    <p class="text-Secondary1(Gold)">16 mai 2022</p>
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

                    <div class="hidden lg:block lg:row-start-2 lg:col-span-2">
                        <HomeCard/>
                    </div>
                </div>

                <div class="grille_mobile lg:grille_profil py-7">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White) lg:hidden" to="/profil/statistique">
                        <stat/>

                        Mes statistiques
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end lg:hidden" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>

                    <h2 class="hidden lg:block lg:col-span-3 lg:font-text lg:font-bold lg:text-Primary2(White) lg:text-[24px] lg:border-b lg:border-Secondary1(Gold) lg:pb-2 lg:pl-1">Mes statistiques</h2>

                    <div class="hidden lg:block lg:col-span-6 lg:row-start-2 lg:font-text lg:text-Primary2(White)">
                        <p>Ensemble des points d'affinités par catégorie</p>
                        <p class="ml-20 pt-5">8pts Science Fiction</p>
                        <p class="ml-20 pt-4">8pts Science Fiction</p>
                        <p class="ml-20 pt-4">8pts Science Fiction</p>
                        <p class="ml-20 pt-4">8pts Science Fiction</p>
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
                    <button class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" @click="pb.authStore.clear()">
                        <deconnexion/>

                        Déconnexion
                    </button>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>
            </article>
        </section>
    </main>
</template>