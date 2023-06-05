<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'
</script>

<template>
  <HeaderPage />
  <RouterLink to="/about">About</RouterLink>
  <main>
    <RouterLink to="/film-serie">
      Accueil film-série
    </RouterLink>
    <!-- Suspense sera utile pour charger les données (await) -->
    <Suspense>
      <!-- Affiche la page -->
      <RouterView />
    </Suspense>
  </main>
</template>
  