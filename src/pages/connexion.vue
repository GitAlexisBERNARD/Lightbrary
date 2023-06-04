<script>
import { useRouter } from 'vue-router'
import PocketBase from 'pocketbase';
  
var pocketbase_ip =''
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80'
} else {
  pocketbase_ip = 'http://127.0.0.1:8090'
}
  
const pb = new PocketBase(pocketbase_ip);
  
export default {
  setup() {
    const router = useRouter()
    return {
      async login() {
        try {
          await pb.collection('users').authWithPassword(
            document.getElementById("login").value,
            document.getElementById("passwd").value
          );
          console.log(pb.authStore.isValid);
          router.push('/dashboard'); 
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
    }
  }
};
</script>

<template>
  <header>
    <div>
      <label for="login">Login:</label>
      <input type="email" id="login" />
      <p></p>
      <label for="passwd">Password:</label>
      <input type="password" id="passwd" />
      <p id="error-message" style="color: red;"></p>
      <button v-on:click="login">Login</button>
      <p></p>
      <button v-on:click="reset">Reset Password</button>
    </div>
  </header>

  <main>
  </main>
</template>