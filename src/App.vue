<script setup lang="ts"></script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./img/image-removebg-preview.png"
      height="120"
      width="200"
    />
    <animated-text text="Dungeons Lovers" />
    <nav>
      <router-link to="/"> Accueil </router-link>
      <router-link to="/login"> login </router-link>
      <router-link to="/users"> Utilisateurs </router-link>
      <router-link to="/heros"> Héros </router-link>
    </nav>
  </header>
  <body>
    <router-view />
  </body>
</template>

<style scoped>
header {
  background-color: red;
  text-align: center;
}

animated-text {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: bold;
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
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
