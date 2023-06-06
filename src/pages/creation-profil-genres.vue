<template>
  <p>Genres sélectionnés: {{ selectedGenres }}</p>
  <ul>
    <li><input type="checkbox" v-model="genres['Science Fiction']"/> Science Fiction</li>
    <li><input type="checkbox" v-model="genres['Adventure']"/> Adventure</li>
    <li><input type="checkbox" v-model="genres['Action']"/> Action</li>
    <li><input type="checkbox" v-model="genres['Animation']"/> Animation</li>
    <li><input type="checkbox" v-model="genres['Comédie']"/> Comédie</li>
    <li><input type="checkbox" v-model="genres['Biopic']"/> Biopic</li>
    <li><input type="checkbox" v-model="genres['Drame']"/> Drame</li>
    <li><input type="checkbox" v-model="genres['Romance']"/> Romance</li>
    <li><input type="checkbox" v-model="genres['Famille']"/> Famille</li>
    <li><input type="checkbox" v-model="genres['Thriller']"/> Thriller</li>
    <li><input type="checkbox" v-model="genres['Horreur']"/> Horreur</li>
  </ul>
  <RouterLink to="pageitem">
  <button>Valider
    </button>
  </RouterLink>
</template>

<script>
import PocketBase from 'pocketbase';

var pocketbase_ip = '';
if (process.env.NODE_ENV === 'production') {
pocketbase_ip = '193.168.146.150:80';
} else {
pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);

const databasejson = pb.authStore.model.genre
const userInfo = pb.authStore.model.id.toString();

export default {
  data() {
    return {
      genres: {
        'Science Fiction': false,
        'Adventure': false,
        'Action': false,
        'Animation': false,
        'Comédie': false,
        'Biopic': false,
        'Drame': false,
        'Romance': false,
        'Famille': false,
        'Thriller': false,
        'Horreur': false,
      },
      genreSelections: [],
      database: databasejson
    };
  },
  computed: {
    selectedGenres() {
      return Object.keys(this.genres).filter(genre => this.genres[genre]);
    },
  },
  watch: {
    selectedGenres: {
      deep: true,
      handler(newVal) {
        this.genreSelections = newVal;
        this.addNewEntry(newVal);
      },
    },
  },
  methods: {
    addNewEntry(genres) {
      const newEntry = {
        "genre": genres
      };
      this.database["GenrePref"] = newEntry;
      const jsonDatabase = JSON.stringify(this.database)
      console.log(jsonDatabase)
      pb.collection('users').update(userInfo, { 'genre': `${jsonDatabase}` });
    }
  }
};
</script>