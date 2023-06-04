<script setup lang="ts">
import Affinite from '@/components/icons/Affinite.vue';
import like from '@/components/icons/like(black).vue';
import check from '@/components/icons/check.vue'
</script>

<template>
    <main class=" bg-Primary1(Black) pb-12">
        <section>
            <header class="grille_mobile pt-7">
                <img class="col-span-2 col-start-2 border border-Primary2(White) rounded-[20px]" src="/img/Test_Image_Page.webp" alt="Test Images">

                <h1 class="col-span-4 font-text font-bold text-Primary2(White) text-[24px] text-center">Ready Player One</h1>
                <h2 class="col-span-2 col-start-2 font-text font-medium text-Secondary1(Gold) text-center -mt-7">Steven Spielberg</h2>

                <div class="col-span-4 flex justify-between font-text text-Secondary1(Gold) text-[14px]">
                    <p class="border rounded-[20px] py-1 px-5">Action</p>
                    <p class="border rounded-[20px] py-1 px-5">Aventure</p>
                    <p class="border rounded-[20px] py-1 px-5">Science-Fiction</p>
                </div>
            </header>

            <article>
                <div class="grille_mobile py-5">
                    <div class="col-span-2 flex items-center gap-2">
                        <Affinite class="w-[25px]"/>
                        <p class="font-text font-bold text-Primary2(White)">98%</p>
                    </div>

                    <div class="col-span-2 flex items-center justify-end gap-2">
                        <p class="font-text text-Primary2(White) text-[14px]">Score Metacritic</p>
                        <p class="font-text font-bold text-Primary2(White) bg-[#66CC33] p-1">100</p>
                    </div>
                </div>

                <div class="grille_mobile">
                    <div class="col-span-4 bg-Secondary1(Gold) rounded-[6px] flex items-center p-2 gap-4">
                        <like/>
                        <p class=" font-text text-Primary1(Black) text-[10px]">Ajouter à ma Watchlist</p>
                    </div>

                    <div class="col-span-4 bg-Primary2(White) opacity-[0.90] rounded-[6px] flex items-center p-2 gap-4 -mt-4">
                        <check/>
                        <p class=" font-text text-Primary1(Black) text-[10px]">Marquer comme vu</p>
                    </div>
                </div>

                <div class="grille_mobile py-5">
                    <p class="col-span-4 font-text text-Primary2(White) text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia commodo metus, quis vulputate turpis rhoncus ac. Vivamus pulvinar aliquet mi id pretium. Maecenas ac malesuada enim. Fusce at nibh in eros rutrum fermentum at ut sapien. Vestibulum varius ligula enim, non rutrum est laoreet sit amet. Curabitur sed cursus ante, a condimentum ipsum. Nunc imperdiet hendrerit nunc, vitae tempus lacus. Donec sed est libero. Nulla eu dolor nec urna vulputate iaculis. Duis interdum quis ante eget tincidunt. Duis ultrices odio nibh, lobortis molestie ante luctus sed. Sed quis luctus massa, at viverra tellus. Mauris in rutrum purus.</p>
                </div>

                <div class="grille_mobile mt-5">
                    <button class="col-span-2 col-start-2">
                        <RouterLink class="font-text font-medium text-Secondary1(Gold) border border-Secondary1(Gold) rounded-[8px] py-3 px-10" to="">
                            Retour
                        </RouterLink>
                    </button>
                </div>
            </article>
        </section>
    </main>
</template>