<template>
  <main>
    <h1>Connexion</h1>
    <div>
      <label for="name">Nom d'utilisateur:</label>
      <input type="text" id="name" />
      <p></p>
      <label for="login">Adresse Mail:</label>
      <input type="email" id="login" />
      <p></p>
      <label for="passwd">Mot de passe:</label>
      <input type="password" id="passwd" />
      <p></p>
      <label for="confirmPasswd">Confirmer le mot de passe:</label>
      <input type="password" id="confirmPasswd" />
      <p></p>
      <p id="error-message" style="color: red;"></p>
      <hr />
      <button @click="register">S'inscrire</button>
      <p></p>
    </div>
  </main>
</template>

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
        router.push('/dashboard');
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
