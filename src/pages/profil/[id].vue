<script setup lang="ts">
import like from '@/components/icons/like.vue';
import stat from '@/components/icons/stat.vue';
import reset from '@/components/icons/reset.vue';
import langue from '@/components/icons/langue.vue';
import deconnexion from '@/components/icons/deconnexion.vue';
import chevronRightVue from '@/components/icons/chevron-right.vue';
</script>

<template>
    <main class="bg-Primary1(Black)">
        <section>
            <header class="grille_mobile">
                <img class="rounded-[9999px] col-span-4 border-[5px] border-Primary2(White) my-5" src="../../../public/img/Test_Profil.webp" alt="Test">

                <div class="col-span-4 flex justify-between">
                    <button class="bg-Secondary1(Gold) rounded-[8px] py-3 px-5">
                        <RouterLink class="font-text font-medium" to="">
                            Modifier profil
                        </RouterLink>
                    </button>
                    <button class="bg-Secondary1(Gold) rounded-[8px] py-3 px-5">
                        <RouterLink class="font-text font-medium" to="">
                            Partager profil
                        </RouterLink>
                    </button>
                </div>
            </header>
            
            <article class="pt-20">
                <div class="grille_mobile border-b-[3px] border-Secondary1(Gold) pb-7">
                    <RouterLink class="col-span-2 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <like/>

                        Ma liste
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile py-7">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <stat/>

                        Mes statistiques
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile border-b-[3px] border-Secondary1(Gold) pb-7">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <reset/>

                        Réinitialiser statistiques 
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile py-7">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <langue/>

                        Langues
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile pb-7">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <deconnexion/>

                        Déconnexion
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>
            </article>
        </section>
    </main>
</template>