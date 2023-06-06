<script>
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import PocketBase from 'pocketbase';

var pocketbase_ip ='';
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);

export default {
  setup() {
    const router = useRouter();
    return {
      async login() {
        try {
          await pb.collection('users').authWithPassword(
            document.getElementById("login").value,
            document.getElementById("passwd").value
          );
          if (pb.authStore.model.firstconnexion === false) {
            router.push('/creation-profil-search');
          } else {
            router.push('/pageitem'); 
          }
        } catch (error) {
          document.getElementById("error-message").textContent = "Invalid email or password.";
          console.error("Error during login: ", error);
        }
      },
      async reset() {
        try {
          await pb.admins.requestPasswordReset(document.getElementById("login").value);
        } catch (error) {
          console.error("Error during password reset: ", error);
        }
      },
    };
  }
};
</script>

<template>
  <main class="bg-Primary1(Black) pb-10">
    <header class="grille_mobile lg:grille_connexion">
      <div class="col-span-4 lg:col-start-5 flex flex-col">
        <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="login">Email</label>
        <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4" type="email" id="login" placeholder="exemple@gmail.com"/>
      </div>

      <div class="col-span-4 lg:col-start-5 row-start-2 flex flex-col">
        <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="passwd">Mot de passe</label>
        <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4" type="password" id="passwd"/>
        <p id="error-message" style="color: red;"></p>
      </div>

      <div class="row-start-3 col-span-4 lg:col-start-5 flex justify-between">
        <div class="flex gap-1">
          <input type="checkbox" id="checkbox" v-model="checked">
          <p class="font-text text-Primary2(White) text-[16px]">Se souvenir de moi</p>
        </div>
        
        <button class="font-text text-Primary2(White) text-[16px] underline" v-on:click="reset">Mot de passe oublié ?</button>
      </div>

      <div class="row-start-4 col-span-4 flex justify-between">
        <button class="py-4 px-6 bg-Secondary1(Gold) font-text font-medium text-Primary1(Black) text-[20px] rounded-[8px]" v-on:click="login">Connexion</button>
        <button class="py-4 px-6 bg-Primary1(Black) font-text font-medium text-Secondary1(Gold) text-[20px] rounded-[8px] border">
          <RouterLink to="/inscription">
            Inscription
          </RouterLink>
        </button>
      </div>
      <RouterLink class="col-span-4 lg:col-start-5 row-start-5 flex flex-col font-text text-Primary2(White) text-[12px] text-center" to="">
        Accéder à la charte d'utilisation des données personnelles
      </RouterLink>
    </header>
  </main>
</template>
