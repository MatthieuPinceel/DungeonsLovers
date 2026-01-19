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
        <input type="text" id="password" v-model="Password" />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'

  const FirstName = ref('')
  const LastName = ref('')
  const Password = ref('')
  const Username = ref('')

  const submitRegister = async () => {
    try {
      const res = await axios.post('http://localhost:3000/authentification/register', {
        FirstName: FirstName.value,
        LastName: LastName.value,
        Password: Password.value,
        Username: Username.value
      })
    
    const token = res.data.token
    localStorage.setItem('token', token)

    console.log("Inscription terminée, token stocké !")
    }
    catch(err) {
      console.error("Erreur lors de l'inscription : " + err)
  }
}
</script>
<style scoped></style>
