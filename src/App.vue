<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { Suspense } from 'vue'
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <Suspense>
    <HeaderPage />
  </Suspense>
  <RouterLink to="/about">About</RouterLink>
  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
    <Suspense>
      <!-- Affiche la page -->
      <RouterView />
    </Suspense>
  </main>
  <Suspense>
    <FooterPage />
  </Suspense>
  <RouterLink to="/contact">Contact</RouterLink>
</template>
  
