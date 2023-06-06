<template>
    <img :src="url" alt="image de profil" />
    <label for="name">Nom d'utilisateur:</label>
    <input type="text" id="name" v-model="newUsername" />
    <label for="img">URL de l'image de profil:</label>
    <input type="file" id="img" @change="handleFileUpload" />
    <button @click="updateProfile">Mettre à jour le profil</button>
</template>

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
