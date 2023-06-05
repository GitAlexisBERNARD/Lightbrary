<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { Suspense } from 'vue';
</script>

<template>
  <main>
    <!-- Suspense sera utile pour charger les données (await) -->
    <Suspense>
      <!-- Affiche la page -->
      <RouterView />
    </Suspense>
  </main>
</template>
  