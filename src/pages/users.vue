<template>
  <div>
    <h1>Utilisateurs</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.LastName }} - {{ user.FirstName }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);

onMounted(async () => {
  const res = await axios.get("http://localhost:3000/api/users");
  users.value = res.data;
});
</script>
