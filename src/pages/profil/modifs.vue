<script setup lang="ts">
import plus from '@/components/icons/plus.vue';
</script>

<template>
    <main>
        <section>
            <header>
                <div>
                    <img class="rounded-[9999px] col-span-4 border-[5px] border-Primary2(White) my-5 lg:rounded-[0px] lg:border-none lg:col-span-2 lg:col-start-1 lg:my-0" src="../../../public/img/Test_Profil.webp" alt="Test">
                    <plus/>
                </div>
            </header>

            <article>
                <h1>Vos informations</h1>

                <div class="col-span-4 col-start-5 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="login">Email</label>
                    <input  class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4" type="email" id="login" placeholder="exemple@gmail.com"/>
                    <p></p>
                </div>

                <div class="col-span-4 col-start-5 row-start-2 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="name">Nom d'utilisateur</label>
                    <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4" type="text" id="name" placeholder="krys_film"/>
                    <p></p>
                </div>

                <div class="col-span-4 col-start-5 row-start-3 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="passwd">Mot de passe</label>
                    <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4" type="password" id="passwd" />
                    <p></p>
                </div>

                <div class="col-span-4 col-start-5 row-start-4 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="confirmPasswd">Répétez le mot de passe</label>
                    <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4" type="password" id="confirmPasswd" />
                    <p></p>
                    <p class="font-text" id="error-message" style="color: red;"></p>
                </div>

                <div class="col-span-4 col-start-5">
                    <p class="font-text text-Primary2(White) text-[12px]">J'accepte les conditions d'utilisation et la charte sur le respect de la vie privée.</p>
                </div>

                <button class="col-span-2 col-start-6 py-4 bg-Secondary1(Gold) font-text font-medium text-Primary1(Black) text-[20px] rounded-[8px]" @click="register">S'inscrire</button>
                    
                <div >
                    <hr />
                    <p></p>
                </div>
            </article>
        </section>
    </main>
</template>