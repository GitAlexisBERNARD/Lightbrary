<script setup lang="ts">
    import { ref, computed, watch } from 'vue'
    import LogoIconMobile from '@/components/icons/Logo_ampoule_Seule.vue'
    import LogoIconDesktop from '@/components/icons/SVG_blanc_1.vue'
    import UserIcon from '@/components/icons/user.vue'
    import FilmIcon from '@/components/icons/film.vue'
    import SerieIcon from '@/components/icons/tv.vue'
    import BookIcon from '@/components/icons/book-open.vue'
    import MusicIcon from '@/components/icons/music.vue'
    import { RouterLink } from 'vue-router'

    const activeMenu= ref(false)
    function closeMenu() {
        activeMenu.value=false
    }
</script>

<template>
    <header class="relative z-10 flex w-full translate-y-0 items-stretch justify-between px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
        <div class="flex items-center">
            <RouterLink to="/" class="hidden lg:block">
                <LogoIconDesktop/>
            </RouterLink>
        </div>
        
        <div class="flex justify-start items-center self-stretch flex-grow relative gap-[17px] lg:justify-end">
            <div class="flex items-center gap-4 lg:flex-row-reverse">
                <button 
                class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
                @click="activeMenu=!activeMenu"
                >
                    <span class="blockease h-[2px] w-full transform rounded-full bg-Primary2(White) transition duration-300" 
                    :class="{'translate-y-[7px] rotate-45':activeMenu}"></span>
                    <span class="blockease h-[2px] w-full transform rounded-full bg-Primary2(White) transition duration-300" 
                    :class="{'opacity-0':activeMenu}"></span>
                    <span class="blockease h-[2px] w-full transform rounded-full bg-Primary2(White) transition duration-300" 
                    :class="{'-translate-y-[11.5px] -rotate-45':activeMenu}"></span>
                </button>
            

                <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-Primary1(Black) text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:tracking-wide lg:opacity-100" 
                :class="{'!visible !opacity-100':activeMenu}"
                v-scroll-lock="activeMenu"
                >
                    <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
                        <li class="hidden font-text font-medium  text-Primary2(White) text-menu lg:block"><RouterLink class="menu-link" to="/"
                            @click="closeMenu">Accueil</RouterLink></li>
                        <li class="font-text font-medium  text-Primary2(White) text-menu">
                            <RouterLink class="flex items-center gap-5 menu-link" to="/films"
                            @click="closeMenu">
                                <FilmIcon class="lg:hidden"/>
                                Films
                            </RouterLink>
                        </li>
                        <li class="font-text font-medium  text-Primary2(White) text-menu">
                            <RouterLink class="flex items-center gap-5 menu-link" to="/séries"
                            @click="closeMenu">
                                <SerieIcon class="lg:hidden"/>
                                Séries
                            </RouterLink>
                        </li>
                        <li class="font-text font-medium  text-Primary2(White) text-menu">
                            <RouterLink class="flex items-center gap-5 menu-link" to="/livres"
                            @click="closeMenu">
                                <BookIcon class="lg:hidden"/>
                                Livres
                            </RouterLink>
                        </li>
                        <li class="font-text font-medium  text-Primary2(White) text-menu">
                            <RouterLink class="flex items-center gap-5 menu-link" to="/musiques"
                            @click="closeMenu">
                                <MusicIcon class="lg:hidden"/>
                                Musiques
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div class="flex items-center">
                <RouterLink to="/" class="lg:invisible">
                    <LogoIconMobile/>
                </RouterLink>
            </div>
        </div>

        <div class="flex items-center">
            <RouterLink to="/" class="lg:hidden">
                <UserIcon/>
            </RouterLink>

            <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-Primary1(Black) text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:tracking-wide lg:text-black lg:opacity-100">
                <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
                    <li class="font-text font-bold  text-Primary2(White) text-connexion">
                        <RouterLink class="menu-link" to="/connexion">Connexion</RouterLink>
                    </li>
                    <li class="font-text font-bold text-Primary1(Black) text-connexion bg-Secondary1(Gold) rounded-inscription px-5">
                        <RouterLink class="menu-link" to="/inscription">Inscription</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>