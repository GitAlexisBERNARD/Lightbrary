<template>
    <main class="bg-Primary1(Black) pb-10">
        <section>
            <header class="grille_mobile lg:grille_profil relative">
                <img class="col-span-4 rounded-[9999px] border-[5px] border-Primary2(White) my-5 lg:rounded-[0px] lg:border-none lg:col-span-2" :src="url" alt="image de profil">

                <button class="col-start-4 -mt-52 -ml-3 lg:ml-10 lg:-mt-28 lg:col-start-2">
                    <RouterLink to="">
                        <plus class="w-[50px] h-[50px] stroke-Primary2(White) rounded-[9999px] border-[3px] border-Primary2(White) bg-Secondary1(Gold) p-2 lg:w-[30px] lg:h-[30px] lg:p-1" />
                    </RouterLink>
                </button>

                <div class="hidden lg:flex font-text font-medium text-Primary2(White) text-[14px] my-10 lg:col-span-5 lg:col-start-3 lg:row-start-1">
                    <p>Dernière modification : </p>
                    <p class="text-Secondary1(Gold)">10/08/2022</p>
                </div>
            </header>

            <article class="grille_mobile lg:grille_profil">
                <h1 class="col-span-4 font-text font-bold text-Primary2(White) text-[26px] lg:hidden">Vos informations</h1>

                <div class="col-span-4 row-start-2 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="login">Email</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4"
                        type="email" id="login" placeholder="exemple@gmail.com" />
                    <p></p>
                </div>

                <div class="col-span-4 row-start-3 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="name">Nom d'utilisateur</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4"
                        type="text" id="name" placeholder="krys_film" />
                    <p></p>
                </div>

                <div class="col-span-4 row-start-4 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="passwd">Mot de passe</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4"
                        type="password" id="passwd" />
                    <p></p>
                </div>

                <div class="col-span-4 row-start-5 flex flex-col">
                    <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="confirmPasswd">Répétez le mot de passe</label>
                    <input
                        class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4"
                        type="password" id="confirmPasswd" />
                    <p></p>
                    <p class="font-text" id="error-message" style="color: red;"></p>
                </div>

                <button
                    class="col-span-2 col-start-2 row-start-6 py-4 mt-5 bg-Secondary1(Gold) font-text font-medium text-Primary1(Black) text-[20px] rounded-[8px]"
                    @click="updateProfile">
                    Sauvegarder
                </button>

                <div>
                    <hr />
                    <p></p>
                </div>
            </article>
        </section>
    </main>
    <label for="name">Nom d'utilisateur:</label>
    <input type="text" id="name" v-model="newUsername" />
    <label for="img">URL de l'image de profil:</label>
    <input type="file" id="img" @change="handleFileUpload" />
</template>

<script setup lang="ts">
import plus from '@/components/icons/plus.vue';
</script>

<script lang="ts">
import PocketBase from 'pocketbase';
var pocketbase_ip = '';
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);

export default {
    data() {
        return {
            newUsername: '',
            newImgFile: null,
            newMail: '',
            userInfo: null,
            url: '',
        };
    },
    async mounted(){
        const userInfo = await pb.authStore.model;
        this.userInfo = userInfo;
        const img = userInfo.img;
        this.url = pb.files.getUrl(userInfo, img, { thumb: '100x250' });
        console.log(this.url);
        console.log(img);
        this.newUsername = this.userInfo.name; 
    },
    methods: {
        handleFileUpload(event) {
            this.newImgFile = event.target.files[0];
        },
        async updateProfile() {
            this.userInfo.name = this.newUsername;
            this.userInfo.mail = this.newMail;

            const formData = new FormData();
            formData.append('img', this.newImgFile, this.newImgFile.name);
            formData.append('name', this.newUsername);
            formData.append('email', this.newMail);

            await pb.collection('users').update(this.userInfo.id.toString(), formData);

            this.newUsername = '';
            this.newImgFile = null;
            this.newMail = '';
        }
    }
}
</script>
