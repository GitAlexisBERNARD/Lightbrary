<script setup lang="ts">
</script>

<template>
    <main class="bg-Primary1(Black) pb-10">
        <section>
            <header class="grille_mobile lg:grille_profil pt-10">
                <h1 class="col-span-4 font-text font-bold text-Primary2(White) text-[24px] lg:col-span-6 lg:text-[30px]">Création profil utilisateur</h1>
                <p class="col-span-4 font-text text-Primary2(White) text-[15px] lg:col-span-10 lg:text-[20px]">Afin de vous proposer la meilleure recommandation, pourriez-vous renseigner vos genres préférés ?</p>
            </header>

            <article class="grille_mobile lg:grille_profil mt-10">
                <div class="col-span-4 lg:col-span-3">
                    <h2 class="font-text font-bold text-Primary2(White) text-[16px] lg:text-[22px] lg:border-b lg:border-Secondary1(Gold) lg:pb-2">Mes styles préférés</h2>

                    <ul class="ml-10 font-text text-Primary2(White) text-[14px] lg:text-[19px]">
                        <li class="pt-3 lg:pt-5"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                    </ul>  
                </div>

                <button class="col-span-2 col-start-2 font-text font-medium text-Primary1(Black) bg-Secondary1(Gold) px-5 py-3 rounded-[8px] mt-6 lg:col-start-5 lg:row-start-2">Suivant</button>
            </article>
        </section>
    </main>
</template>