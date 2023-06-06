<script setup lang="ts">
    import IconFilm from '@/components/icons/film.vue'
    import IconLivre from '@/components/icons/book-open.vue'
    import IconMusique from '@/components/icons/music.vue'
    import IconTv from '@/components/icons/tv.vue'
</script>

<template>
    <nav>
        <section>
            <header>
                <div class="grille_mobile lg:grille_landing relative grid h-screen grid-rows-[10fr_1fr] pt-14">
                    <div class="col-span-4 lg:col-span-6 self-center font-text">
                        <p class="font-light text-Primary2(White) text-[12px] pb-10 lg:text-[16px]">Vous avez du temps libre et vous ne savez pas quoi faire ?</p>
                        <h1 class="font-bold text-Secondary1(Gold) text-[36px] lg:text-[48px]">Lightbray,</h1>
                        <h1 class="font-bold text-Primary2(White) text-[36px] pb-10 lg:text-[40px]">mettez en lumière votre Watchlist</h1>
                        <p class="font-medium text-Primary2(White) text-[14px] lg:text-[16px]">Films, séries, musiques et livres. Trouvez tous les médias qui vous correspondent !</p>
                    </div>

                    <img src="/img/Banniere.webp" alt="Photo Fondation Cartier" class="absolute inset-0 object-cover w-full h-full z-[-1]" />

                    <div class="col-span-2 col-start-2 lg:col-span-1 lg:col-start-9 flex justify-between lg:flex-col lg:justify-center lg:gap-20">
                        <IconLivre class="w-[50px] h-[50px] stroke-[1px] stroke-Primary2(White)"/>
                        <IconMusique class="w-[50px] h-[50px] stroke-[1px] stroke-Primary2(White)"/>
                    </div>

                    <div class="col-span-4 lg:col-span-1 lg:col-start-10 flex justify-between lg:flex-col lg:justify-between lg:items-end">
                        <IconFilm class="w-[50px] h-[50px] stroke-[1px] stroke-Primary2(White)"/>
                        <IconTv class="w-[50px] h-[50px] stroke-[1px] stroke-Primary2(White)"/>
                    </div>
                    
                    <button class="col-span-2 col-start-2 pt-10 lg:col-start-1">
                        <RouterLink 
                            to="/exposition" 
                            class="font-text font-medium text-Primary1(Black) bg-Secondary1(Gold) py-3 px-5 rounded-[8px]"
                        >
                            En savoir plus
                        </RouterLink>
                    </button>

                    <div class="col-start-2">
                        <chevronDownVue/>
                    </div>
                </div>
            </header>
        </section>
        <!-- <div class="text-Primary2(White) text-sm pb-12">
            
            Vous avez du temps et vous ne savez pas quoi faire ?
        </div>
        <ul class="text-xl pb-12">
            <li class="text-Secondary1(Gold)">LIGHTBRARY</li>
            <li class="text-Primary2(White)">mettez en lumière</li>
            <li class="text-Primary2(White)">votre WatchList</li>
        </ul>
        <ul class="text-Primary2(White) text-sm pb-12">
            <li>Films, séries, musiques et livres. Trouvez tous les</li>
            <li>médias qui vous correspondent !</li>
        </ul>
        <nav class="flex justify-center items-center space-x-10 pb-12">
            <div><IconFilm/></div>
            <div class="pt-[-100px]"><IconLivre /></div>
            <div class="pt-[-100px]"><IconMusique /></div>
            <div><IconTv /></div>
        </nav>
        <button class="px-5 py-2 border-2 bg-Secondary1(Gold) flex justify-center pb-10">
            En savoir plus
        </button> -->
    </nav>
    <!-- <div class="bg-Primary1(Black) text-Primary2(White)">
        <nav class="flex justify-center items-center">

            <div class="h-3 w-full text-lg bg-Secondary1(Gold)">
                Pourquoi choisir LIGHTBRARY ?
            </div>
            <img src="/img/ImgAffinite.webp">
            <div>
                Affinité
            </div>
            <div class="text-sm">
                <ul>
                    <li>Grâce à notre système de pourcentage</li>
                    <li>d'affinité vous pourrez trouver le film/la</li>
                    <li>série/le livre/la musique qui vous</li>
                    <li>correspond le mieux.</li>
                </ul>
            </div>
            <img src="/img/Diversite.webp">
            <div>
                Diversité
            </div>
            <div class="text-sm">
                <ul>
                    <li>Notre site propose un large catalogue</li>
                    <li>comprenant des films, des séries, des livres</li>
                    <li>et même des musiques afin de convenir à</li>
                    <li>toutes les envies.</li>
                </ul>
            </div>
            <img src="/img/Rapidite.webp">
            <div>
                Rapidité
            </div>
            <div class="text-sm">
                <ul>
                    <li>Sur la page d'accueil de notre site vous</li>
                    <li>pourrez retrouver un top comprenant un</li>
                    <li>film, une série, un livre et une musique avec</li>
                    <li>lesquels vous avez le plus grand</li>
                    <li>pourcentage d'affinité.</li>
                </ul>
            </div>

            <div class="h-3 w-full text-lg bg-Secondary1(Gold)">
                Comment ça fonctionne ?
            </div>
            <div class="px-5 py-3 justify-end text-lg bg-Secondary1(Gold)">
                INSCRIPTION
            </div>
            <img src="/img/Chapitre_1.webp">
            <div class="text-sm">
                <li>Au moment de s'inscrire sur le site, vous</li>
                <li>sélectionnez le genre de films/séries/livres/</li>
                <li>musiques/ que vous appréciez. Vous</li>
                <li>sélectionnez également ce que vous avez</li>
                <li>déjà vu/écouté ou lu.</li>
            </div>
            <div class="px-12 py-3 text-lg bg-Secondary1(Gold)">
                POURCENTAGE D'AFFINITÉ
            </div>
            <img src="/img/Affinite_Pourcentage.webp">
            <div class="text-sm">
                <ul>
                    <li>Notre site va alors vous proposer un</li>
                    <li>pourcentage d'affinité sur chaque film/</li>
                    <li>série/livre/musique.</li>
                </ul>         
            </div>
            <div class="px-10 py-3 justify-end text-lg bg-Secondary1(Gold)">
                MISE À JOUR DU COMPTE
            </div>
            <img src="/img/Chapitre_3.webp">
            <div class="text-sm">
                <ul>
                    <li>Un bouton permet de mettre à jour votre</li>
                    <li>compte une fois que vous avez vu/écouté/lu</li>
                    <li>quelque chose. Il y a également un système</li>
                    <li>de notation pour savoir si vous avez</li>
                    <li>apprécié le film/la série/le livre/la musique.</li>
                </ul>
            </div>
            <div class="px14 py-3 text-lg bg-Secondary1(Gold)">
                NOUVELLES RECOMMENDATIONS
            </div>
            <img src="/img/Chapitre_4.webp">
            <div class="text-sm">
                <ul>
                    <li>A chaque fois que vous mettez à jour votre</li>
                    <li>compte et que vous notez ce que vous avez</li>
                    <li>vu/lu/écouté, notre algorithme de</li>
                    <li>recommandation se met à jour aussi.</li>
                </ul>
            </div>
            <div class="h-3 w-full text-lg bg-Secondary1(Gold)">
                Multimédia
            </div>
        </nav>

        <nav class="grid grid-cols-2">
            <div class="col-start-1">
                <img src="/img/Bande_Multimedia.webp">
            </div>
            <div class="col-start-2 :flex justify-between">
                <ul class="text-lg">
                    <li class="px-6 py-2 bg-Primary2(White)">Films  ></li>
                    <li class="px-6 py-2 bg-Primary2(White)">SÉRIES ></li>
                    <li class="px-6 py-2 bg-Primary2(White)">LIVRES ></li>
                    <li class="px-7 py-2 bg-Primary2(White)">MUSIQUES ></li>
                </ul>
            </div>
        </nav>
        <div class="flex justify-center items-center gap-4">
            <div class="px-10 py-10 border-Primary2(White)">
                <ul>
                    <li class="text-xl">60 000</li>
                    <li class="text-sm">films</li>
                </ul>
            </div>
            <div class="px-10 py-10 border-Primary2(White)">
                <ul>
                    <li class="text-xl">30 000</li>
                    <li class="text-sm">séries</li>
                </ul>
            </div>
            <div class="px-10 py-10 border-Primary2(White)">
                <ul>
                    <li class="text-xl">130</li>
                    <li class="text-xl">MILLIONS</li>
                    <li class="text-sm">de livres</li>
                </ul>
            </div>
            <div class="px-10 py-10 border-Primary2(White)">
                <ul>
                    <li class="text-xl">2</li>
                    <li class="text-xl">MILLIARDS</li>
                    <li class="text-sm">de musiques</li>
                </ul>
            </div>
        </div>
        <img class="flex justify-center items-center" src="/img/tv_2.webp">
    </div> -->
</template>