<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="submitLogin">
      <div>
        <label for="username">Username : </label>
        <input type="text" id="username" v-model="Username" />
      </div>

      <div>
        <label for="password">Password : </label>
        <input type="password" id="password" v-model="Password" />
      </div>

      <button type="submit">Connect</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/services/UserAuthStore'

const authStore = useAuthStore()

const Username = ref('')
const Password = ref('')

const submitLogin = async () => {
  try {
    await authStore.login(Username.value, Password.value)
  } catch (err) {
    console.error('Erreur lors de la connexion :', err)
  }
}
</script>


<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  border: 1px solid #ccc;
  padding: 20px;
  line-height: 2.5;
}

label {
  text-align: right;
}
</style>