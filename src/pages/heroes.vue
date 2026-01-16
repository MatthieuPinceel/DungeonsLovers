<template>
  <div>
    <h1>Heroes</h1>
    <h2>List of your heroes :</h2>

    <ul>
      <li v-for="hero in heroes" :key="hero.HeroesId">{{ hero.Name }}</li>
      <img :src="hero.ImageUrl" :alt="hero.Name" v-if="hero.ImageUrl" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Hero } from '../types/Hero'

const heroes = ref<Hero[]>([])

onMounted(async () => {
  try {
    const res = await axios.get<Hero[]>('http://localhost:3000/api/heroes/getHeroes')
    heroes.value = res.data
  } catch (err) {
    console.error('Erreur lors de la récupération des héros :', err)
  }
})
</script>

<style scoped></style>
