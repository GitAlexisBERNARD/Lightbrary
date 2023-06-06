<script>
import { useRouter } from 'vue-router';
import PocketBase from 'pocketbase';

var pocketbase_ip = '';
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80';
} else {
  pocketbase_ip = 'http://127.0.0.1:8090';
}

const pb = new PocketBase(pocketbase_ip);

export default {
  setup() {
    const router = useRouter();

    const register = async () => {
      const password = document.getElementById('passwd').value;
      const confirmPassword = document.getElementById('confirmPasswd').value;

      if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = "Les mots de passe ne correspondent pas.";
        console.error("Les mots de passe ne correspondent pas.");
        return;
      }

      try {
        await pb.collection('users').create({
          email: document.getElementById('login').value,
          password,
          passwordConfirm: confirmPassword,
          name: document.getElementById('name').value,
        });
        console.log("pourquoi ça ne marche pas ?");
        router.push('/creation-profil-genres');
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
      }
    };

    return {
      register,
    };
  },
};
</script>

<template>
  <main class="grille_mobile lg:grille_connexion bg-Primary1(Black) pb-10">
    <div class="col-span-4 lg:col-start-5 flex flex-col">
      <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="login">Email</label>
      <input  class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4" type="email" id="login" placeholder="exemple@gmail.com"/>
      <p></p>
    </div>

    <div class="col-span-4 lg:col-start-5 row-start-2 flex flex-col">
      <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="name">Nom d'utilisateur</label>
      <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) placeholder:text-Gray1 text-[16px] rounded-[8px] px-4" type="text" id="name" placeholder="krys_film"/>
      <p></p>
    </div>

    <div class="col-span-4 lg:col-start-5 row-start-3 flex flex-col">
      <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="passwd">Mot de passe</label>
      <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4" type="password" id="passwd" />
      <p></p>
    </div>

    <div class="col-span-4 lg:col-start-5 row-start-4 flex flex-col">
      <label class="font-text font-medium text-Secondary1(Gold) text-[24px] pb-3" for="confirmPasswd">Répétez le mot de passe</label>
      <input class="bg-Primary1(Black) py-2 border border-Secondary2(Beige) font-text text-Secondary1(Gold) text-[16px] rounded-[8px] px-4" type="password" id="confirmPasswd" />
      <p></p>
      <p class="font-text" id="error-message" style="color: red;"></p>
    </div>

    <div class="col-span-4 lg:col-start-5 flex items-start">
      <input type="checkbox" id="checkbox" v-model="checked">
      <p class="font-text text-Primary2(White) text-[12px] text-center">J'accepte les conditions d'utilisation et la charte sur le respect de la vie privée.</p>
    </div>

    <button class="col-span-2 col-start-2 lg:col-start-6 py-4 bg-Secondary1(Gold) font-text font-medium text-Primary1(Black) text-[20px] rounded-[8px]" @click="register">S'inscrire</button>
    
    <div >
      <hr />
      <p></p>
    </div>
  </main>
</template>