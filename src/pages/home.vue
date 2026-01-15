<template>
  <div class="home">
    <h1>Accueil</h1>
    <p>Bienvenue sur mon site</p>
    <button @click="compter">Clique ici</button>
    <p>Compteur : {{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function compter() {
  count.value++
}
</script>
