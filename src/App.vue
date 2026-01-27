<script setup lang="ts">
import router from './router'
import headerComponent from './components/header.vue';
</script>

<template>
  <headerComponent/>
  <body>
    <router-view />
  </body>
</template>

<style scoped>
</style>