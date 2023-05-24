<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <HeaderPage />
  <RouterLink to="/about">About</RouterLink>
  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
    <Suspense>
      <!-- Affiche la page -->
      <RouterView />
    </Suspense>
  </main>
  <FooterPage />
</template>
  
