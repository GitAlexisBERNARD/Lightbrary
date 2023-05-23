<script>
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
      userInfo: null
    };
  },
  mounted() {
    const userInfo = pb.authStore.model;
    console.log(userInfo);
    console.log(userInfo.name);
    this.userInfo = userInfo;
  }
};
</script>

<template>
  <div>
    <h1>Bienvenue sur le tableau de bord</h1>
    <p v-if="userInfo">Vous êtes connecté en tant que {{ userInfo.name }}</p>
  </div>
</template>
