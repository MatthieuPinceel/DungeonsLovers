<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import HeroCard from '@/components/hero.vue'
import { useHeroesStore } from '@/services/HeroStore'

const store = useHeroesStore()
const focusedIndex = ref(0)

onMounted(async () => {
  await store.fetchHeroes()
})

const prevCard = () => {
  if (focusedIndex.value > 0) focusedIndex.value--
}

const nextCard = () => {
  if (focusedIndex.value < store.heroes.length - 1) focusedIndex.value++
}

const heroPositions = computed(() => {
  return store.heroes.map((_, i) => {
    if (i === focusedIndex.value) return 'center'
    if (i === focusedIndex.value - 1) return 'left'
    if (i === focusedIndex.value + 1) return 'right'
    return 'hidden'
  })
})
</script>

<template>
  <div>
    <h1>Heroes</h1>

    <div class="carousel-container" v-if="store.heroes.length > 0">
      <button class="arrow left" @click="prevCard">&lt;</button>
      <div class="cards-wrapper">
        <HeroCard
          v-for="(hero, i) in store.heroes"
          :key="hero.HeroId"
          :hero="hero"
          :class="heroPositions[i]"
        />
      </div>
      <button class="arrow right" @click="nextCard">&gt;</button>
    </div>

    <p v-else>Aucun héros trouvé.</p>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  gap: 20px;
}

.cards-wrapper > * {
  flex-shrink: 0;
  transition: transform 0.4s ease, opacity 0.1s ease;
}

.center {
  transform: scale(1);
  opacity: 1;
  z-index: 3;
}

.left, .right {
  transform: scale(0.7);
  opacity: 0.5;
  z-index: 2;
}

.hidden {
  transform: scale(0.5);
  opacity: 0;
  pointer-events: none;
  position: absolute;
}

.arrow {
  background: #7c4a2f;
  border: none;
  color: #fff;
  padding: 12px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 6px;
  user-select: none;
}

.arrow:hover {
  background: #a05d36;
}

.arrow.left {
  margin-right: 10px;
}

.arrow.right {
  margin-left: 10px;
}
</style>