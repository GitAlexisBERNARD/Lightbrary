<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue';
import Recherche from '@/components/Recherche.vue';
</script>

<template>
    <h1 class="m-48">Test</h1>
    <main class="bg-Primary1(Black) pt-10">
        <div class="grille_mobile lg:grille_desktop">
            <Recherche/>
        </div>

        <div class="grille_mobile lg:grille_desktop pt-5">
            <h1 class="col-span-4 font-text text-Primary2(White) text-[24px]">Notre selection</h1>

            <div class="col-span-4 lg:col-span-12 flex gap-7 overflow-hidden overflow-x-scroll lg:justify-center">
                <HomeCard class="flex-none"/>
                <HomeCard class="flex-none"/>
                <HomeCard class="flex-none"/>
                <HomeCard class="flex-none"/>
            </div>
        </div>

        <div class="flex-none">
            <div class="px-5 font-text text-Primary2(White) text-[16px] flex justify-between gap-6 lg:w-[451px] lg:text-[24px] py-5">
                <RouterLink to="/serie">
                    Film
                </RouterLink>
                <p class="text-Secondary1(Gold) border-b-[3px]">Série</p> 
                <RouterLink to="">
                    Livre
                </RouterLink>
                <RouterLink to="">
                    Musique
                </RouterLink>
            </div>
            <div class="grille_mobile lg:grille_desktop">

            </div>
        </div>
    </main>
</template>