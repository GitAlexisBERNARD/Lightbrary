<script setup lang="ts">
import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'
  import user from '@/components/icons/user.vue';
  import Polygon from '@/components/icons/Polygon_down.vue'
  const profil= ref(false)
</script>

<template>
  <div class="bg-Primary1(Black)">
    <HeaderPage>
      <template v-if="!connected" #login>
        <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-Primary1(Black) text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:tracking-wide lg:text-black lg:opacity-100">
          <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
            <li class="font-text font-bold  text-Primary2(White) text-connexion">
              <RouterLink class="menu-link" to="/connexion">Connexion</RouterLink>
            </li>
            <li class="font-text font-bold text-Primary1(Black) text-connexion bg-Secondary1(Gold) rounded-inscription px-5">
              <RouterLink class="menu-link" to="/inscription">Inscription</RouterLink>
            </li>
          </ul>
        </nav>
        <RouterLink to="/" class="lg:hidden">
            <user/>
        </RouterLink>
      </template>
      <template v-else #login>
        <RouterLink class="lg:hidden" to="">
          <img class="w-[40px] rounded-[9999px] border border-Primary2(White)" src="/img/Test_Profil.webp" alt="Photo de profil">
        </RouterLink>

        <div class="hidden lg:flex flex-col gap-3">
          <button class="flex items-center gap-3 font-text font-medium text-[14px] text-Secondary1(Gold)" @click="profil=!profil">
            {{ name }}
            <Polygon class="fill-Secondary1(Gold)" :class="{'rotate-180':profil}"/>
            <img v-if="url" class="w-[40px]" :src="url" alt="image de profil" />
            <img v-else class="w-[40px]" src="default-avatar.png" alt="image de profil par défaut" />
          </button>

          <div class="hidden fixed mt-10 p-2 bg-Primary1(Black)" :class="{'!block' :profil}">
            <nav>
              <ul class="font-text font-medium text-[14px] text-Primary2(White)">
                <li class="pb-1"><RouterLink to="/profil">Ma liste</RouterLink></li>
                <li class="pb-1"><RouterLink to="/profil">Profil</RouterLink></li>
                <li class="pb-1"><RouterLink to="/profil/modification">Modifier mon profil</RouterLink></li>
                <li><button @click="clear()">Déconnexion</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </template>
    </HeaderPage>
  </div>
  
  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
    <!-- Affiche la page -->
    <RouterView />
  </main>

  <FooterPage/>
</template>
<script lang="ts">
import PocketBase from 'pocketbase';
import { useRouter } from 'vue-router';

let pocketbase_ip = '';
if (import.meta.env.MODE === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);
const connected = pb.authStore.isValid

export default {
  data() {
    return {
      url: '',
      name: '',
    };
  },
  async mounted() {
    const userInfopb = await pb.authStore.model;
    const userInfo = await pb.collection('users').getOne(userInfopb.id.toString());
    const img = userInfo.img;
    this.url = pb.files.getUrl(userInfo, img, { thumb: '100x250' });
    this.name = userInfo.name;
    console.log(this.url);
},
methods: {
async clear() {
      const router = useRouter()
      await pb.authStore.clear();
      window.location.href = 'http://localhost:5173/';
    },
  },
};
</script>
  