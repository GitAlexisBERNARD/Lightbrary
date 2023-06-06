<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Suspense } from 'vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <header>
    Test
  </header>
  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
    <Suspense>
      <!-- Affiche la page -->
      <RouterView />
    </Suspense>
  </main>
  <FooterPage />
  <!--<RouterLink to="/contact">Contact</RouterLink>-->
</template>
