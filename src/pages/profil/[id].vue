<script setup lang="ts">
import like from '@/components/icons/like.vue';
import stat from '@/components/icons/stat.vue';
import reset from '@/components/icons/reset.vue';
import langue from '@/components/icons/langue.vue';
import deconnexion from '@/components/icons/deconnexion.vue';
import chevronRightVue from '@/components/icons/chevron-right.vue';
</script>

<template>
    <main>
        <section>
            <header>
                <img src="../../../public/img/Test_Profil.webp" alt="Test">

                <div>
                    <button>
                        <RouterLink to="">
                            Modifier profil
                        </RouterLink>
                    </button>
                    <button>
                        <RouterLink to="">
                            Partager profil
                        </RouterLink>
                    </button>
                </div>
            </header>
            
            <article>
                <div>
                    <RouterLink to="">
                        <like/>

                        Ma liste

                        <chevronRightVue/>
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="">
                        <stat/>

                        Mes statistiques

                        <chevronRightVue/>
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="">
                        <reset/>

                        Réinitialiser statistiques

                        <chevronRightVue/>
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="">
                        <langue/>

                        Langues

                        <chevronRightVue/>
                    </RouterLink>
                </div>

                <div>
                    <RouterLink to="">
                        <deconnexion/>

                        Déconnexion 

                        <chevronRightVue/>
                    </RouterLink>
                </div>
            </article>
        </section>
    </main>
</template>