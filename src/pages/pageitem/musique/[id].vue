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

<script setup lang="ts">
import Affinite from '@/components/icons/Affinite.vue';
import like from '@/components/icons/like(black).vue';
import check from '@/components/icons/check.vue'
</script>

<template>
    <main class="bg-Primary1(Black) pb-12 absolute z-10 -mt-24 w-full lg:mt-0">
        <section v-if="song">artistId">
            <header class="grille_mobile lg:grille_profil pt-7">
                <img class="col-span-2 col-start-2 border border-Primary2(White) rounded-[20px] lg:col-span-3 lg:col-start-1" :src="song.artworkUrl100" :alt="song.trackName">

                <div class="col-span-4 font-text text-center lg:col-span-5 lg:col-start-4 lg:text-start ">
                    <h1 class="font-bold text-Primary2(White) text-[24px] lg:text-[35px]">{{ song.trackName }}</h1>
                    <h2 class="font-medium text-Secondary1(Gold) lg:text-[25px]">{{ song.artistName }}</h2>
                    <p class="italic text-Gray1 lg:text-[20px]">{{ formatDate(song.releaseDate) }}</p>

                    <div class="hidden lg:flex justify-between font-text text-Secondary1(Gold) text-[16px] pt-5">
                        <p class="border rounded-[20px] py-1 px-5">{{ song.primaryGenreName }}</p>
                    </div>

                    <p class="text-Primary2(White)">{{ film.overview }}</p>

                    <div class="hidden lg:flex flex-col py-5">
                        <div class="flex items-center gap-2">
                            <Affinite class="w-[25px]"/>
                            <p class="font-text font-bold text-Primary2(White)">98%</p>
                        </div>

                        <div class="flex items-center gap-2">
                            <p class="font-text text-Primary2(White) text-[14px]">Score Metacritic</p>
                            <p class="font-text font-bold text-Primary2(White) bg-[#66CC33] p-1">100</p>
                        </div>
                    </div>
                </div>

                <div class="hidden lg:flex col-span-2 items-end gap-1">
                    <div class="bg-Secondary1(Gold) rounded-l-[6px] flex flex-col items-center justify-center p-2 gap-2 h-[90px]">
                        <like/>
                        <p class=" font-text text-Primary1(Black) text-[10px] text-center"  @click="saveToSong(song.trackId)">Ajouter à ma Watchlist</p>
                    </div>

                    <div class="bg-Primary2(White) opacity-[0.90] rounded-r-[6px] flex flex-col items-center justify-center p-2 gap-2 h-[90px]">
                        <check/>
                        <p class=" font-text text-Primary1(Black) text-[10px] text-center"@click="saveToData(song.trackId)">Marquer comme vu</p>
                    </div>
                </div>
                
                <div class="col-span-4 flex justify-between font-text text-Secondary1(Gold) text-[14px] lg:hidden">
                    <p class="border rounded-[20px] py-1 px-5">{{ book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Non spécifié' }}</p>
                </div>
            </header>

            <article>
                <div class="grille_mobile py-5 lg:hidden">
                    <div class="col-span-2 flex items-center gap-2">
                        <Affinite class="w-[25px]"/>
                        <p class="font-text font-bold text-Primary2(White)">98%</p>
                    </div>

                    <div class="col-span-2 flex items-center justify-end gap-2">
                        <p class="font-text text-Primary2(White) text-[14px]">Score Metacritic</p>
                        <p class="font-text font-bold text-Primary2(White) bg-[#66CC33] p-1">100</p>
                    </div>
                </div>

                <div class="grille_mobile lg:hidden">
                    <div class="col-span-4 bg-Secondary1(Gold) rounded-[6px] flex items-center p-2 gap-4">
                        <like/>
                        <p class=" font-text text-Primary1(Black) text-[10px]"  @click="saveToSong(song.trackId)">Ajouter à ma Watchlist</p>
                    </div>

                    <div class="col-span-4 bg-Primary2(White) opacity-[0.90] rounded-[6px] flex items-center p-2 gap-4 -mt-4">
                        <check/>
                        <p class=" font-text text-Primary1(Black) text-[10px]" @click="saveToData(song.trackId)">Marquer comme vu</p>
                    </div>
                </div>

                <div class="grille_mobile lg:grille_profil py-5 lg:py-20">
                    <h2 class="hidden lg:block font-text font-bold text-Primary2(White) text-[24px] lg:col-span-3 lg:border-b lg:border-Secondary1(Gold) lg:pb-2">Histoire</h2>
                    <p class="col-span-4 font-text text-Primary2(White) text-[12px] lg:col-span-8">{{ book.volumeInfo.description }}</p>
                </div>

                <div class="grille_mobile mt-5 lg:hidden">
                    <button class="col-span-2 col-start-2">
                        <RouterLink class="font-text font-medium text-Secondary1(Gold) border border-Secondary1(Gold) rounded-[8px] py-3 px-10" to="">
                            Retour
                        </RouterLink>
                    </button>
                </div>

                <div class="hidden lg:grille_profil">
                    <h2 class="font-text font-bold text-Primary2(White) text-[24px] lg:col-span-3 lg:border-b lg:border-Secondary1(Gold) lg:pb-2">Du même genre</h2>
                    <div class="lg:row-start-2" v-for="similarSong in similarSongs" :key="similarSong.trackId">
                        <RouterLink  @click="reloadPage" :to="{ name: 'pageitem-music-id', params: { id: similarSong.trackId } }"">
                            <img :src="similarSong.artworkUrl100" :alt="similarSong.trackName">
                            <p>{{ similarSong.trackName }}</p>
                        </RouterLink>
                    </div>
                </div>
            </article>
        </section>
        <div v-else>
            <p>Vide</p>
        </div>
    </main>
</template>