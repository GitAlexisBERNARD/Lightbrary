<template>
  <div>
    <h6>Accueil > Profil</h6>
    <h2>{{ userInfo.name }}</h2>
    <img v-if="url" :src="url" alt="image de profil" />
    <img v-else src="default-avatar.png" alt="image de profil par défaut" />
    <h3>Ma liste</h3>

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
      userInfo: {
        name: '',
        img: '',
        genre: [],
      },
      topFiveGenres: [],
      url: '', 
    };
  },
  async mounted() {
    const userInfo = await pb.authStore.model;
    const record = await pb.collection('users').getOne(pb.authStore.model.id.toString());
    this.userInfo = userInfo;
    this.calculateTopGenres();
    const img = record.img;
    this.url = pb.files.getUrl(record, img, {'thumb': '100x250'});
  },
  methods: {
    calculateTopGenres() {
      let genreCounts = {};
      for (let category in this.userInfo.genre) {
        this.userInfo.genre[category].genre.forEach((genre) => {
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
