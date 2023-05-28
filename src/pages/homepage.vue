<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue';
import IconSearch from '@/components/icons/search.vue'
</script>

<template>
    <main class="bg-Primary1(Black)">
        <div class="w-[333px] h-14 relative rounded-[20px] bg-Primary1(Black) border-[1px] border-Secondary1(Gold)">
            <IconSearch class=""/>
            <p class="w-[219px] relative font-text text-Primary2(White)">
                Recherche un film,une série...
            </p>
        </div>
        <HomeCard/>
    </main>
</template>