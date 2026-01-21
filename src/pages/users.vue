<template>
  <div>
    <h1>Img</h1>
    <div class="img-zoom-blur-container">
      <img ref="imgRef" src="/img/HeroesGif/Hwm_combat.gif?url" alt="Blurred Image" />
    </div>
    Remaining Try : {{ n }}
    <div>
      <label for="Try">Essai : </label>
      <input type="Try" id="Try" v-model="Try" />
    </div>
    <button @click="submitTry" :disabled="n === 0">Send</button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const n = ref(5)
const zoom = ref(5)
const Try = ref('')

const submitTry = async () => {
  try {
    guess(Try.value)
  } catch (err) {
    console.error("Erreur lors de la soumission de l'essai :", err)
  }
}

function guess(Try: string) {
  if (Try === 'Leper') {
    alert('You win!')
    showImage()
  } else {
    n.value -= 1
    zoom.value -= 0.5
    dezoom()
    if (n.value === 0) {
      alert('Game over! The correct answer was Leper.')
      showImage()
    }
  }
}

const imgRef = ref<HTMLImageElement | null>(null)

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function applyRandomZoom() {
  if (!imgRef.value) return

  const originX = randomBetween(0, 100)
  const originY = randomBetween(0, 100)

  imgRef.value.style.transform = `scale(${zoom.value})`
  imgRef.value.style.transformOrigin = `${originX}% ${originY}%`
}

function dezoom() {
  if (!imgRef.value) return

  imgRef.value.style.transform = `scale(${zoom.value})`
}

function showImage() {
  if (!imgRef.value) return

  imgRef.value.style.filter = 'blur(0px)'
  imgRef.value.style.transform = 'scale(1)'
}

onMounted(() => {
  applyRandomZoom()
})
</script>
<style scoped>
.img-zoom-blur-container {
  overflow: hidden;
  width: 200px;
  height: 300px;
  border: 2px solid whitesmoke;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
}

ul {
  list-style-type: none;
  padding: 0;
}
h1 {
  text-align: center;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
