<script setup lang="ts">
</script>

<template>
    <main class="bg-Primary1(Black) pb-10">
        <section>
            <header class="grille_mobile">
                <h1 class="col-span-4 font-text font-bold text-Primary2(White) text-[24px]">Création profil utilisateur</h1>
                <p class="col-span-4 font-text text-Primary2(White) text-[15px]">Afin de vous proposer la meilleure recommandation, pourriez-vous renseigner vos genres préférés ?</p>
            </header>

            <article class="grille_mobile mt-10">
                <div class="col-span-4">
                    <h2 class="col-span-4 font-text font-bold text-Primary2(White) text-[16px]">Mes styles préférés</h2>

                    <ul class="ml-10 font-text text-Primary2(White) text-[14px]">
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                        <li class="pt-3"><input class="w-[17px] h-[17px] accent-Secondary1(Gold)" type="checkbox" id="checkbox" v-model="checked" /> Science-Fiction</li>
                    </ul>  
                </div>

                <button class="col-span-2 col-start-2 font-text font-medium text-Primary1(Black) bg-Secondary1(Gold) px-5 py-3 rounded-[8px] mt-6">Suivant</button>
            </article>
        </section>
    </main>
</template>