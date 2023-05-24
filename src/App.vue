<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'

  const connected = false; 
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
      </template>
      <template v-else #login>
        <h1 class="text-Primary2(White)">Connecté</h1>
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
