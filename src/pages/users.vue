<template>
  <div>
    <h1>Utilisateurs</h1>

    <ul></ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/users')
  users.value = res.data
})
</script>
