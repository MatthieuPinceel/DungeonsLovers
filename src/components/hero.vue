<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Hero } from '@/types/Hero'
import { useHeroesStore } from '@/services/HeroStore'

const props = defineProps<{
  hero: Hero & { ImageUrl?: string }
}>()

const store = useHeroesStore()

const editForm = ref<Partial<Hero>>({})

watch(
  () => store.editingHeroId,
  () => {
    if (store.editingHeroId === props.hero.HeroId) {
      editForm.value = { ...props.hero }
    }
  },
  { immediate: true },
)

const save = () => {
  if (store.editingHeroId !== null) {
    store.saveHero(props.hero.HeroId, editForm.value)
  }
}
</script>

<template>
  <div class="card">
    <div class="hero-image">
      <img src="/other/logo.png?url" alt="" />
    </div>

    <div class="card-content">
      <div v-if="store.editingHeroId !== hero.HeroId">
        <h2>{{ hero.Name }}</h2>
        <div class="stats">
          <p>
            HP: <span>{{ hero.MaxHP }}</span>
          </p>
          <p>
            Dodge: <span>{{ hero.Dodge }}</span>
          </p>
          <p>
            Speed: <span>{{ hero.Speed }}</span>
          </p>
          <p>
            Crit: <span>{{ hero.CriticChance }}%</span>
          </p>
          <p>
            Damage: <span>{{ hero.Damage }}</span>
          </p>
        </div>
        <button class="btn" @click="store.startEditing(hero)">Modify Hero</button>
      </div>

      <div v-else>
        <h2>{{ hero.Name }} (editing)</h2>
        <div class="stats">
          <p>HP: <input type="number" v-model.number="editForm.MaxHP" /></p>
          <p>Dodge: <input type="number" v-model.number="editForm.Dodge" /></p>
          <p>Speed: <input type="number" v-model.number="editForm.Speed" /></p>
          <p>Crit: <input type="number" v-model.number="editForm.CriticChance" /></p>
          <p>Damage: <input type="number" v-model.number="editForm.Damage" /></p>
        </div>
        <button class="btn" @click="save">Save</button>
        <button class="btn cancel" @click="store.cancelEditing">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 350px;
  height: 450px;
  background: red;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #5a3a1b;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  margin: 10px;
  display: flex;
  flex-direction: column;
  color: #fff3d1;
}

.hero-image {
  display: flex;
  justify-content: center;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-content {
  padding: 12px;
}

h2 {
  margin: 0 0 10px;
  font-size: 20px;
  color: #fff7e1;
}

.stats p {
  margin: 2px 0;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.stats span {
  font-weight: bold;
}

input {
  width: 60px;
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #3c2a14;
  background: #f5deb3;
  color: #3c2a14;
}

.btn {
  margin-top: 8px;
  padding: 6px 8px;
  background: #3d2d1c;
  border: none;
  color: #ffe8c3;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn:hover {
  background: #4d3b25;
}

.cancel {
  background: #7a1e1e;
}

.cancel:hover {
  background: #8d2a2a;
}
</style>
