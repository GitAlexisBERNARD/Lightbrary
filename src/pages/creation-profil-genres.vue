<template>
  <main class="bg-Primary1(Black) pb-10">
    <section>
      <header class="grille_mobile lg:grille_profil pt-10">
          <h1 class="col-span-4 font-text font-bold text-Primary2(White) text-[24px] lg:col-span-6 lg:text-[30px]">Création profil utilisateur</h1>
          <p class="col-span-4 font-text text-Primary2(White) text-[15px] lg:col-span-10 lg:text-[20px]">Afin de vous proposer la meilleure recommandation, pourriez-vous renseigner vos genres préférés ?</p>
      </header>
      
      <article class="grille_mobile lg:grille_profil mt-10">
        <div class="col-span-4 lg:col-span-3">
          <h2 class="font-text font-bold text-Primary2(White) text-[16px] lg:text-[22px] lg:border-b lg:border-Secondary1(Gold) lg:pb-2">Mes styles préférés</h2>

          <ul class="ml-10 font-text text-Primary2(White) text-[14px] lg:text-[19px]">
            <li class="pt-3 lg:pt-5"><input type="checkbox" v-model="genres['Science Fiction']"/> Science Fiction</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Adventure']"/> Adventure</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Action']"/> Action</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Animation']"/> Animation</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Comédie']"/> Comédie</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Biopic']"/> Biopic</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Drame']"/> Drame</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Romance']"/> Romance</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Famille']"/> Famille</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Thriller']"/> Thriller</li>
            <li class="pt-3"><input type="checkbox" v-model="genres['Horreur']"/> Horreur</li>
          </ul>
        </div>

        <p class="col-span-4 font-text font-medium text-Primary2(White) text-[15px] lg:col-span-10 lg:text-[20px]">Genres sélectionnés: {{ selectedGenres }}</p>

        <RouterLink class="col-span-2 col-start-2 lg:col-start-5 lg:row-start-2" to="/profifutilisateur">
          <button class="font-text font-medium text-Primary1(Black) bg-Secondary1(Gold) px-5 py-3 rounded-[8px] mt-6">
            Valider
          </button>
        </RouterLink>
      </article>
    </section>
  </main>
  
  
  
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