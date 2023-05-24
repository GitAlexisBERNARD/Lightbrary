<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'
</script>

<template>
  <div class="bg-Primary1(Black)">
    <HeaderPage />
    <h1>Lightbrary</h1>
  </div>   
  <RouterLink to="/api">Api</RouterLink>
  <br />
  <RouterLink to="/connexion">Connexion</RouterLink>
  <br />
  <RouterLink to="/dashboard">Dashboard</RouterLink>
  <br />
  <RouterLink to="/inscription">Inscription</RouterLink>
  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
      <!-- Affiche la page -->
      <RouterView />
  </main>

</template>
