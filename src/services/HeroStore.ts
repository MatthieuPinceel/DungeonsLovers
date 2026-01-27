import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { Hero } from '../types/Hero'

export const useHeroesStore = defineStore('heroes', () => {
  const heroes = ref<Hero[]>([])
  const editingHeroId = ref<number | null>(null)
  const editForm = ref<Partial<Hero>>({})

  const fetchHeroes = async () => {
    try {
      const res = await axios.get<Hero[]>('http://localhost:3000/heroes/getHeroes')
      heroes.value = res.data
    } catch (err) {
      console.error('Erreur lors de la récupération des héros :', err)
    }
  }

  const startEditing = (hero: Hero) => {
    editingHeroId.value = hero.HeroId
    editForm.value = { ...hero }
  }

  const cancelEditing = () => {
    editingHeroId.value = null
    editForm.value = {}
  }

const saveHero = async (heroId: number, updatedValues: Partial<Hero>) => {
  try {
    const token = localStorage.getItem('token')

    await axios.put(
      `http://localhost:3000/heroes/updateHero/${heroId}`,
      updatedValues,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    const index = heroes.value.findIndex(h => h.HeroId === heroId)
    if (index !== -1) {
      heroes.value[index] = { ...heroes.value[index], ...updatedValues } as Hero
    }

    cancelEditing()
  } catch (err) {
    console.error('Erreur lors de la mise à jour du héros :', err)
  }
}

  return {
    heroes,
    editingHeroId,
    editForm,
    fetchHeroes,
    startEditing,
    cancelEditing,
    saveHero
  }
})