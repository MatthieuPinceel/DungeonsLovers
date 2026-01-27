<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="submitRegister">

      <div>
        <label for="firstName">First Name : </label>
        <input type="text" id="firstName" v-model="FirstName" />
      </div>

      <div>
        <label for="lastName">Last Name : </label>
        <input type="text" id="lastName" v-model="LastName" />
      </div>

      <div>
        <label for="username">Username : </label>
        <input type="text" id="username" v-model="Username" />
      </div>

      <div>
        <label for="password">Password : </label>
        <input type="password" id="password" v-model="Password" />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/services/UserAuthStore'

const authStore = useAuthStore()

const FirstName = ref('')
const LastName = ref('')
const Username = ref('')
const Password = ref('')

const submitRegister = async () => {
  try {
    await authStore.register(FirstName.value, LastName.value, Username.value, Password.value)
  } catch (err) {
    console.error("Erreur lors de l'inscription :", err)
  }
}
</script>
