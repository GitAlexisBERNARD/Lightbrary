<script setup lang="ts">
    import IconFilm from '@/components/icons/film.vue'
    import IconLivre from '@/components/icons/book-open.vue'
    import IconMusique from '@/components/icons/music.vue'
    import IconTv from '@/components/icons/tv.vue'
</script>

<template>
    <nav>
        <div class="text-Primary2(White) text-sm pb-12">
            <img src="/img/Banniere.webp">
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
        </button>
        <div class="bg-Primary1(Black) text-Primary2(White)">
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
        </div>
    </nav>
</template>