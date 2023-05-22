<template>
    <div>
      <h1>Bienvenue sur le tableau de bord</h1>
      <p>Utilisateur connecté : {{ username }}</p>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import PocketBase from 'pocketbase'
  
  var pocketbase_ip = ''
  if (process.env.NODE_ENV === 'production') {
    pocketbase_ip = '193.168.146.150:80'
  } else {
    pocketbase_ip = 'http://127.0.0.1:8090'
  }
  
  const pb = new PocketBase(pocketbase_ip)
  
  export default {
    setup() {
      const router = useRouter()
      const state = reactive({
        username: ''
      })
        const getUsername = async () => {
        try {
          const user = await pb.getCurrentUser()
          if (user) {
            state.username = user.email 
          }
        } catch (error) {
          console.error('Erreur lors de la récupération du nom d\'utilisateur :', error)
        }
      }
  
      onMounted(() => {
        getUsername() 
      })
  
      return {
        state
      }
    }
  }
  import { UseHead } from '@unhead/vue'
UseHead({
  title: 'Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Dashboard'
    }
  ]
})
  </script>
  