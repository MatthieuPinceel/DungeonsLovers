<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.UserId">
        {{ user.LastName }} - {{ user.FirstName }} - {{ user.Username }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { User } from '../types/User'

const users = ref<User[]>([])

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.get<User[]>('http://localhost:3000/users/getUsers', {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    users.value = res.data
  } catch (err) {
    console.error('Erreur lors de la récupération des utilisateurs :', err)
  }
})
</script>
