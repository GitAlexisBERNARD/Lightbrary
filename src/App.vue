<script setup lang="ts">
import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'
  import user from '@/components/icons/user.vue';
  import Polygon from '@/components/icons/Polygon_down.vue'

  const connected = false;

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
            krys_film
            <Polygon class="fill-Secondary1(Gold)" :class="{'rotate-180':profil}"/>
            <img class="w-[40px]" src="/img/Test_Profil.webp" alt="Photo de profil">
          </button>

          <div class="hidden fixed mt-10 p-2 bg-Primary1(Black)" :class="{'!block' :profil}">
            <nav>
              <ul class="font-text font-medium text-[14px] text-Primary2(White)">
                <li class="pb-1"><RouterLink to="">Ma liste</RouterLink></li>
                <li class="pb-1"><RouterLink to="">Profil</RouterLink></li>
                <li class="pb-1"><RouterLink to="">Modifier mon profil</RouterLink></li>
                <li><RouterLink to="">Déconnexion</RouterLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </template>
    </HeaderPage>
    <h1>Lightbrary</h1>
  </div>
  <RouterLink to="/api">API</RouterLink>
  <br />
  <RouterLink to="/connexion">Connexion</RouterLink>
  <br />
  <RouterLink to="/dashboard">Tableau de bord</RouterLink>
  <br />
  <RouterLink to="/inscription">Inscription</RouterLink>
  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
    <!-- Affiche la page -->
    <RouterView />
  </main>
</template>
  