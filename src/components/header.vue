<script setup lang="ts">
import { useAuthStore } from '@/services/UserAuthStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

// Computed pour savoir si l'utilisateur est connecté
const isLoggedIn = computed(() => !!authStore.token)

// Déconnexion et redirection
const handleLogout = () => {
  authStore.logout()          // supprime token & user
  router.push('/login')       // redirige vers login
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="/img/other/logo.png"
      height="120"
      width="200"
    />
    <animated-text text="Dungeons Lovers" />

    <nav>
      <router-link to="/"> Home </router-link>
      <router-link to="/users"> Users </router-link>
      <router-link to="/heroes"> Heroes </router-link>
    </nav>

    <nav class="LoRe">
      <template v-if="!isLoggedIn">
        <router-link to="/login"> Login </router-link>
        <router-link to="/register"> Register </router-link>
      </template>
      <template v-else>
        <router-link to="/login" @click.prevent="handleLogout">Logout</router-link>
      </template>
    </nav>
  </header>
</template>



<style scoped>
header {
  background-color: red;
  text-align: center;
}

nav a {
  margin: 0 15px;
  color: white;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    text-shadow:
      1px 1px 0px #e63946,
      2px 2px 0px #f77f00,
      3px 3px 0px #fcbf49,
      4px 4px 0px #a8dadc,
      5px 5px 0px #457b9d;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    animation: spin-3d 4s infinite linear;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
@keyframes spin-3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.LoRe {
  position: absolute;
  right: 10px;
}
</style>