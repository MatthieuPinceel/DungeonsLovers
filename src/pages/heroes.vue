<template>
  <div>
    <h1>Heroes</h1>
    <h2>List of your heroes :</h2>

    <ul v-if="heroes.length > 0">
      <li v-for="hero in heroes" :key="hero.HeroId">
        <strong>{{ hero.Name }}</strong>
        <ul>
          <li>HP: {{ hero.MaxHP }}</li>
          <li>Dodge: {{ hero.Dodge }}</li>
          <li>Speed: {{ hero.Speed }}</li>
          <li>Crit: {{ hero.CriticChance }}%</li>
          <li>Damage: {{ hero.Damage }}</li>
        </ul>
      </li>
    </ul>

    <p v-else>Aucun héros trouvé.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Heroes } from '../types/Heroes'

const heroes = ref<Heroes[]>([])

onMounted(async () => {
  try {
    const res = await axios.get<Heroes[]>('http://localhost:3000/heroes/getHeroes')
    heroes.value = res.data
  } catch (err) {
    console.error('Erreur lors de la récupération des héros :', err)
  }
})
</script>

<style scoped></style>
