import PocketBase from 'pocketbase';
  
var pocketbase_ip =''
if (process.env.NODE_ENV === 'production') {
  pocketbase_ip = '193.168.146.150:80'
} else {
  pocketbase_ip = 'http://127.0.0.1:8090'
}
  
const pb = new PocketBase(pocketbase_ip);
import { useRouter } from 'vue-router'

export const verifaction = () => {
  const router = useRouter()
  const user = pb.authStore.isValid
  if (!user) {
    router.push('/connexion')
  }
}

