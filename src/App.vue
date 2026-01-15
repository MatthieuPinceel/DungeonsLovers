<script setup lang="ts"></script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <nav>
      <router-link to="/"> Accueil </router-link>
      <router-link to="/users"> Utilisateurs </router-link>
    </nav>
  </header>
  <body>
    Bienvenue sur Dungeons & Lovers !
    <router-view />
  </body>
</template>

<style scoped>
header {
  background-color: red;
  text-align: center;
}

em {
  font-style: normal;
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.25rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: top;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
