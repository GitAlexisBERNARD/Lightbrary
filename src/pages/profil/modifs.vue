<script setup lang="ts">
import plus from '@/components/icons/plus.vue';
</script>

<template>
    <main class="bg-Primary1(Black) pb-10">
        <section>
            <header class="grille_mobile relative">
                <img class="col-span-4 rounded-[9999px] border-[5px] border-Primary2(White) my-5 lg:rounded-[0px] lg:border-none lg:col-span-2 lg:col-start-1 lg:my-0" src="../../../public/img/Test_Profil.webp" alt="Test">

                <button class="col-start-4 -mt-52 -ml-3">
                    <RouterLink to="">
                        <plus class="w-[50px] h-[50px] stroke-Primary2(White) rounded-[9999px] border-[3px] border-Primary2(White) bg-Secondary1(Gold) p-2" />
                    </RouterLink>
                </button>

            </header>

            <article class="grille_mobile">
                <h1 class="col-span-4 font-text font-bold text-Primary2(White) text-[26px]">Vos informations</h1>

                <div class="col-span-4 row-start-2 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="login">Email</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4"
                        type="email" id="login" placeholder="exemple@gmail.com" />
                    <p></p>
                </div>

                <div class="col-span-4 row-start-3 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="name">Nom
                        d'utilisateur</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4"
                        type="text" id="name" placeholder="krys_film" />
                    <p></p>
                </div>

                <div class="col-span-4 row-start-4 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="passwd">Mot de
                        passe</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4"
                        type="password" id="passwd" />
                    <p></p>
                </div>

                <div class="col-span-4 row-start-5 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="confirmPasswd">Répétez
                        le mot de passe</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4"
                        type="password" id="confirmPasswd" />
                    <p></p>
                    <p class="font-text" id="error-message" style="color: red;"></p>
            </div>

            <button
                class="col-span-2 col-start-2 py-4 mt-5 bg-Secondary1(Gold) font-text font-medium text-Primary1(Black) text-[20px] rounded-[8px]"
                @click="register">Sauvegarder</button>

            <div>
                <hr />
                <p></p>
            </div>
        </article>
    </section>
</main></template>