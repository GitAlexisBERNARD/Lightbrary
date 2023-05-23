<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'
</script>

<template>
  <HeaderPage />    
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
  