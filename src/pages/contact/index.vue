<script setup lang="ts">
import IconX from '@/components/icons/x.vue'
import { ref } from 'vue'
const closeContact = ref(false)
</script>

<template>
  <div class="fixed w-full h-full p-12 z-10 bg-Primary1(Black)">
    <div class="text-Primary2(White) pt-12 pb-10 text-lg flex justify-between">
      Contactez nous
        <button 
        @click="closeContact= false">
            <IconX />
        </button>
    </div>
    <div class="text-Secondary1(Gold)">Email</div>
    <div class="mt-2">
      <input
        type="text"
        placeholder="exemple@gmail.com"
        class="px-3 py-2 border border-Secondary1(Gold) rounded-md w-80 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black) text-sm"
      />
    </div>
    <div class="text-Secondary1(Gold) pt-4">Nom</div>
    <div class="mt-2">
      <input
        type="text"
        placeholder="Nom"
        class="px-3 py-2 border border-Secondary1(Gold) rounded-md w-80 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black) text-sm"
      />
    </div>
    <div class="text-Secondary1(Gold) pt-4">Prénom</div>
    <div class="mt-2">
      <input
        type="text"
        placeholder="Prénom"
        class="px-3 py-2 border border-Secondary1(Gold) rounded-md w-80 focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black) text-sm"
      />
    </div>
    <div class="text-Secondary1(Gold) pt-4">Commentaire</div>
    <div class="mt-2">
      <input
        type="text"
        placeholder="Détails"
        class="px-3 py-2 border border-Secondary1(Gold) rounded-md w-80 h-[130px] focus:outline-none focus:ring-Primary2 focus:border-Primary2 bg-Primary1(Black) pb-20 text-sm"
      />
    </div>
    <nav class="flex justify-center pt-10">
      <button
        class="px-12 py-3 bg-Secondary1(Gold) text-Primary1(Black) rounded-md hover:bg-Primary1(Black) hover:text-Secondary1(Gold) focus:ring-2 focus:ring-Secondary1(Gold)"
      >
        Envoyer
      </button>
    </nav>
  </div>
</template>
