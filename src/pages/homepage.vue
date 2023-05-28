<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue';
import IconSearch from '@/components/icons/search.vue'
</script>

<template>
    <main class="bg-Primary1(Black) pt-10">
        <div class="w-[333px] h-14 relative flex items-center mx-auto px-8 rounded-[20px] bg-Primary1(Black) border-[1px] border-Secondary1(Gold)">
            <IconSearch class="mr-5"/>
            <p class="relative font-text text-Primary2(White)">
                Recherche un film,une série...
            </p>
        </div>
        <HomeCard/>
    </main>
</template>