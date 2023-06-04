<script setup lang="ts">
import Affinite from '@/components/icons/Affinite.vue';
import like from '@/components/icons/like.vue';
import check from '@/components/icons/check.vue'
</script>

<template>
    <main>
        <section>
            <header>
                <img src="/img/Test_Image_Page.webp" alt="Test Images">

                <h1>Ready Player One</h1>
                <h2>Steven Spielberg</h2>

                <div>
                    <p>Action</p>
                    <p>Aventure</p>
                    <p>Science-Fiction</p>
                </div>
            </header>

            <article>
                <div>
                    <div>
                        <Affinite/>
                        <p>98%</p>
                    </div>

                    <div>
                        <p>Score Metacritic</p>
                        <p>100</p>
                    </div>
                </div>

                <div>
                    <div>
                        <like/>
                        <p>Ajouter à ma Watchlist</p>
                    </div>

                    <div>
                        <check/>
                        <p>Marquer comme vu</p>
                    </div>
                </div>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia commodo metus, quis vulputate turpis rhoncus ac. Vivamus pulvinar aliquet mi id pretium. Maecenas ac malesuada enim. Fusce at nibh in eros rutrum fermentum at ut sapien. Vestibulum varius ligula enim, non rutrum est laoreet sit amet. Curabitur sed cursus ante, a condimentum ipsum. Nunc imperdiet hendrerit nunc, vitae tempus lacus. Donec sed est libero. Nulla eu dolor nec urna vulputate iaculis. Duis interdum quis ante eget tincidunt. Duis ultrices odio nibh, lobortis molestie ante luctus sed. Sed quis luctus massa, at viverra tellus. Mauris in rutrum purus.</p>
                </div>

                <button>
                    <RouterLink to="">
                        Retour
                    </RouterLink>
                </button>
            </article>
        </section>
    </main>
</template>