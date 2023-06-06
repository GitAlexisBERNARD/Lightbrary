<script setup lang="ts">
import like from '@/components/icons/like.vue';
import stat from '@/components/icons/stat.vue';
import reset from '@/components/icons/reset.vue';
import langue from '@/components/icons/langue.vue';
import deconnexion from '@/components/icons/deconnexion.vue';
import chevronRightVue from '@/components/icons/chevron-right.vue';
import HomeCard from '@/components/HomeCard.vue'
</script>

<template>
    <main class="bg-Primary1(Black)">
        <section>
            <header class="grille_mobile lg:grille_profil">
                <h1 class="hidden lg:block font-text font-bold text-Primary2(White) text-[27px]">krys_film</h1>

                <img class="rounded-[9999px] col-span-4 border-[5px] border-Primary2(White) my-5 lg:rounded-[0px] lg:border-none lg:col-span-2 lg:col-start-1 lg:my-0" src="../../../public/img/Test_Profil.webp" alt="Test">

                <div class="col-span-4 flex justify-between lg:hidden">
                    <button class="bg-Secondary1(Gold) rounded-[8px] py-3 px-5">
                        <RouterLink class="font-text font-medium" to="/profil/modifs">
                            Modifier profil
                        </RouterLink>
                    </button>
                    <button class="bg-Secondary1(Gold) rounded-[8px] py-3 px-5">
                        <RouterLink class="font-text font-medium" to="">
                            Partager profil
                        </RouterLink>
                    </button>
                </div>

                <div class="hidden lg:flex lg:col-span-5 font-text font-medium text-Primary2(White) text-[14px]">
                    <p>Membre de Lightbrary depuis le</p>
                    <p class="text-Secondary1(Gold)">16 mai 2022</p>
                </div>

                
            </header>
            
            <article class="pt-20 lg:pt-7">
                <div class="grille_mobile lg:grille_profil border-b-[3px] border-Secondary1(Gold) pb-7 lg:border-none">
                    <RouterLink class="col-span-2 flex gap-3 items-center font-text text-Primary2(White) lg:hidden" to="">
                        <like/>

                        Ma liste
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end lg:hidden" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>

                    <h2 class="hidden lg:block lg:col-span-2 lg:font-text lg:font-bold lg:text-Primary2(White) lg:text-[24px] lg:border-b lg:border-Secondary1(Gold) lg:pb-2 lg:pl-1">Ma liste</h2>

                    <div class="hidden lg:block lg:row-start-2 lg:col-span-2">
                        <HomeCard/>
                    </div>
                </div>

                <div class="grille_mobile lg:grille_profil py-7">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White) lg:hidden" to="">
                        <stat/>

                        Mes statistiques
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end lg:hidden" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>

                    <h2 class="hidden lg:block lg:col-span-3 lg:font-text lg:font-bold lg:text-Primary2(White) lg:text-[24px] lg:border-b lg:border-Secondary1(Gold) lg:pb-2 lg:pl-1">Mes statistiques</h2>

                    <div class="hidden lg:block lg:col-span-6 lg:row-start-2 lg:font-text lg:text-Primary2(White)">
                        <p>Ensemble des points d'affinités par catégorie</p>
                        <p class="ml-20 pt-5">8pts Science Fiction</p>
                        <p class="ml-20 pt-4">8pts Science Fiction</p>
                        <p class="ml-20 pt-4">8pts Science Fiction</p>
                        <p class="ml-20 pt-4">8pts Science Fiction</p>
                    </div>
                </div>

                <div class="grille_mobile lg:grille_profil border-b-[3px] border-Secondary1(Gold) pb-7 lg:border-none">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White) lg:col-span-4 lg:text-[18px] lg:border-t lg:border-t-Secondary1(Gold) lg:pt-2" to="">
                        <reset/>

                        Réinitialiser statistiques 
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end lg:hidden" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile py-7 lg:hidden">
                    <RouterLink class="col-span-3 flex gap-3 items-center font-text text-Primary2(White)" to="">
                        <langue/>

                        Langues
                    </RouterLink>

                    <RouterLink class="col-start-4 flex justify-end" to="">
                        <chevronRightVue class="stroke-Secondary1(Gold)"/>
                    </RouterLink>
                </div>

                <div class="grille_mobile pb-7 lg:hidden">
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