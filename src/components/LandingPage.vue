<script setup lang="ts">
    import IconFilm from '@/components/icons/film.vue'
    import IconLivre from '@/components/icons/book-open.vue'
    import IconMusique from '@/components/icons/music.vue'
    import IconTv from '@/components/icons/tv.vue'
    import chevronRight from './icons/chevron-right.vue'
    import SVG_blanc_1 from './icons/SVG_blanc_1.vue'
</script>

<template>
    <main>
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

                    <div class="col-span-4 lg:col-span-1 lg:col-start-10 flex justify-between lg:flex-col lg:justify-between lg:items-end lg:py-5">
                        <IconFilm class="w-[50px] h-[50px] stroke-[1px] stroke-Primary2(White)"/>
                        <IconTv class="w-[50px] h-[50px] stroke-[1px] stroke-Primary2(White)"/>
                    </div>
                    
                    <button class="col-span-2 col-start-2 mt-10 lg:col-start-1 font-text font-medium text-Primary1(Black) bg-Secondary1(Gold) py-3 px-5 rounded-[8px]">
                        <RouterLink 
                            to=""
                        >
                            En savoir plus
                        </RouterLink>
                    </button>
                </div>
            </header>

            <article class="bg-Primary1(Black) pb-20">
                <div>
                    <h2 class="bg-Secondary1(Gold) font-text font-bold text-Primary2(White) text-[24px] py-2 text-center lg:hidden">Pourquoi choisir Lightbray ?</h2>

                    <div class="hidden lg:grille_desktop">
                        <h2 class="col-span-5 bg-Secondary1(Gold) font-text font-bold text-Primary2(White) text-[24px] py-2 text-center">Pourquoi choisir Lightbray ?</h2>
                    </div>

                    <div class="hidden lg:grille_desktop mt-20">
                        <img class="col-span-3 col-start-1 border border-Primary2(White)" src="/img/Affinite.webp" alt="Affiche Ready PLayer One">
                        <h3 class="col-span-2 col-start-1 text-start font-text font-bold text-Primary2(White) text-[36px]">Affinité</h3>
                        <p class="col-span-4 row-start-3 text-start font-text text-Primary2(White)">Grâce à notre système de pourcentage d'affinité vous pourrez trouver le film/la série/le livre/la musique qui vous correspond le mieux.</p>

                        <img class="col-span-3 col-start-5 row-start-1 my-auto" src="/img/Diversite.webp" alt="Image diversité">
                        <h3 class="col-span-2 col-start-5 row-start-2 text-start font-text font-bold text-Primary2(White) text-[36px]">Diversité</h3>
                        <p class="col-span-4 col-start-5 row-start-3 text-start font-text text-Primary2(White)">Notre site propose un large catalogue comprenant des films, des séries, des livres et même des musiques afin de convenir à toutes les envies.</p>

                        <img class="col-span-3 col-start-9 row-start-1" src="/img/Rapidite.webp" alt="Image page d'accueil de Lightbrary">
                        <h3 class="col-span-2 col-start-9 row-start-2 text-start font-text font-bold text-Primary2(White) text-[36px]">Rapidité</h3>
                        <p class="col-span-4 col-start-9 row-start-3 text-start font-text text-Primary2(White)">Sur la page d'accueil de notre site vous pourrez retrouver un top comprenant un film, une série, un livre et une musique avec lesquels vous avez le plus grand pourcentage d'affinité.</p>
                    </div>

                    <div class="grille_mobile lg:hidden mt-20">
                        <img class="col-span-2 col-start-2 border border-Primary2(White)" src="/img/Affinite.webp" alt="Affiche Ready PLayer One">
                        <h3 class="col-span-2 col-start-2 text-center font-text font-bold text-Primary2(White) text-[20px]">Affinité</h3>
                        <p class="col-span-4 text-center font-text text-Primary2(White)">Grâce à notre système de pourcentage d'affinité vous pourrez trouver le film/la série/le livre/la musique qui vous correspond le mieux.</p>
                    </div>

                    <div class="grille_mobile lg:hidden mt-20">
                        <img class="col-span-2 col-start-2 mx-auto" src="/img/Diversite.webp" alt="Image diversité">
                        <h3 class="col-span-2 col-start-2 text-center font-text font-bold text-Primary2(White) text-[20px]">Diversité</h3>
                        <p class="col-span-4 text-center font-text text-Primary2(White)">Notre site propose un large catalogue comprenant des films, des séries, des livres et même des musiques afin de convenir à toutes les envies.</p>
                    </div>

                    <div class="grille_mobile lg:hidden mt-20">
                        <img class="col-span-2 col-start-2" src="/img/Rapidite.webp" alt="Image page d'accueil de Lightbrary">
                        <h3 class="col-span-2 col-start-2 text-center font-text font-bold text-Primary2(White) text-[20px]">Rapidité</h3>
                        <p class="col-span-4 text-center font-text text-Primary2(White)">Sur la page d'accueil de notre site vous pourrez retrouver un top comprenant un film, une série, un livre et une musique avec lesquels vous avez le plus grand pourcentage d'affinité.</p>
                    </div> 
                </div>

                <div>
                    <h2 class="bg-Secondary1(Gold) font-text font-bold text-Primary2(White) text-[24px] py-2 text-center mt-20">Comment ça fonctionne ?</h2>

                    <div class="grille_mobile mt-10">
                        <h3 class="col-span-2 col-start-3 text-center bg-Secondary1(Gold) py-2 font-text font-medium italic uppercase text-Primary2(White) text-[20px]">Inscription</h3>
                        <img class="col-span-2 col-start-2" src="/img/Chapitre_1.webp" alt="Photo page inscription">
                        <p class="col-span-4 text-center font-text text-Primary2(White)">Au moment de s'inscrire sur le site, vous sélectionnez le genre de films/séries/livres/musiques que vous appréciez. Vous sélectionnez également ce que vous avez déjà vu/écouté ou lu.</p>
                    </div>

                    <div class="grille_mobile mt-10">
                        <h3 class="col-span-3 text-center bg-Secondary1(Gold) py-2 font-text font-medium italic uppercase text-Primary2(White) text-[20px]">Pourcentage d'affinité</h3>
                        <img class="col-span-2 col-start-2" src="/img/Affinite_Pourcentage.webp" alt="">
                        <p class="col-span-4 text-center font-text text-Primary2(White)">Notre site va alors vous proposer un pourcentage d’affinité sur chaque film/série/livre/musique.</p>
                    </div>

                    <div class="grille_mobile mt-10">
                        <h3 class="col-span-3 col-start-2 text-center bg-Secondary1(Gold) py-2 font-text font-medium italic uppercase text-Primary2(White) text-[20px]">Mise à jour du compte</h3>
                        <img class="col-span-2 col-start-2" src="/img/Chapitre_3.webp" alt="">
                        <p class="col-span-4 text-center font-text text-Primary2(White)">Un bouton permet de mettre à jour votre compte une fois que vous avez vu/écouté/lu quelque chose. Il y a également un système  de notation pour savoir si vous avez apprécié le film/la série/le livre/la musique.</p>
                    </div>

                    <div class="grille_mobile mt-10">
                        <h3 class="col-span-4 text-center bg-Secondary1(Gold) py-2 font-text font-medium italic uppercase text-Primary2(White) text-[20px]">Nouvelles recommandations</h3>
                        <img class="col-span-2 col-start-2" src="/img/Chapitre_4.webp" alt="">
                        <p class="col-span-4 text-center font-text text-Primary2(White)">A chaque fois que vous mettez à jour votre compte et que vous notez ce que vous avez vu/lu/écouté, notre algorithme de recommandation se met à jour aussi.</p>
                    </div>
                </div>

                <div>
                    <h2 class="bg-Secondary1(Gold) font-text font-bold text-Primary2(White) text-[24px] py-2 text-center mt-20">Multimédia</h2>

                    <div class="grille_mobile mt-10">
                        <img class="col-span-2" src="/img/Bande_Multimedia.webp" alt="">

                        <div class="col-span-2 col-start-3 flex flex-col justify-between">
                            <button class="lg:col-start-1 font-text font-bold text-Primary1(Black) bg-Primary2(White) py-3 px-5 rounded-[8px] uppercase">
                                <RouterLink to="" class="flex justify-between">
                                    Films
                                    <chevronRight/>
                                </RouterLink>
                            </button>
                            <button class="lg:col-start-1 font-text font-bold text-Primary1(Black) bg-Primary2(White) py-3 px-5 rounded-[8px] uppercase">
                                <RouterLink to="" class="flex justify-between">
                                    Séries
                                    <chevronRight/>
                                </RouterLink>
                            </button>
                            <button class="lg:col-start-1 font-text font-bold text-Primary1(Black) bg-Primary2(White) py-3 px-5 rounded-[8px] uppercase">
                                <RouterLink to="" class="flex justify-between">
                                    Livres
                                    <chevronRight/>
                                </RouterLink>
                            </button>
                            <button class="lg:col-start-1 font-text font-bold text-Primary1(Black) bg-Primary2(White) py-3 px-5 rounded-[8px] uppercase">
                                <RouterLink to="" class="flex justify-between">
                                    Musiques
                                    <chevronRight/>
                                </RouterLink>
                            </button>
                        </div>

                        <div class="col-span-2 border border-Primary2(White) py-5 mt-5">
                            <h3 class="font-text font-bold text-Secondary1(Gold) text-[40px] text-center">60 000</h3>
                            <p class="font-text font-light text-Primary2(White) text-[20px] text-center">films</p>
                        </div>

                        <div class="col-span-2 border border-Primary2(White) py-5 mt-5">
                            <h3 class="font-text font-bold text-Secondary1(Gold) text-[40px] text-center">30 000</h3>
                            <p class="font-text font-light text-Primary2(White) text-[20px] text-center">séries</p>
                        </div>

                        <div class="col-span-2 border border-Primary2(White) py-5">
                            <h3 class="font-text font-bold text-Secondary1(Gold) text-[28px] text-center">130 millions</h3>
                            <p class="font-text font-light text-Primary2(White) text-[20px] text-center">de livres</p>
                        </div>

                        <div class="col-span-2 border border-Primary2(White) py-5">
                            <h3 class="font-text font-bold text-Secondary1(Gold) text-[30px] text-center px-2">2 milliards</h3>
                            <p class="font-text font-light text-Primary2(White) text-[20px] text-center">de musiques</p>
                        </div>
                    </div>
                </div>
                
                <div class="grille_mobile mt-10">
                    <img class="col-span-4" src="/img/tv_2.webp" alt="Icone TV avec textes">
                    <button class="col-span-2 col-start-2 lg:col-start-1 -mt-10 font-text font-medium text-Primary1(Black) bg-Secondary1(Gold) py-3 px-5 rounded-[8px]">
                        <RouterLink 
                            to=""
                        >
                            Inscription
                        </RouterLink>
                    </button>
                </div>
            </article>
        </section>
    </main>
</template>