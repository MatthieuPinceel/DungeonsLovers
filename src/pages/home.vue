<template>
  <div class="home">
    <h1>Accueil</h1>
    <tr>
      <td>
        <h1>Bienvenue sur Dungeons Lovers !</h1>
        <div class="wrapper">
          <p>
            Plongez dans un univers fantastique où l'aventure et la camaraderie vous attendent.
            Rejoignez notre communauté de passionnés de jeux de rôle et explorez des donjons
            mystérieux, combattez des créatures légendaires et forgez des alliances épiques.
          </p>
          <img
            class="background"
            src="D:\Dev\Der\R6\maintenance\DungeonsLovers\src\img\Leper_combat.gif"
            height="212"
            width="297"
          />
        </div>
      </td>
    </tr>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  align-items: center;
  margin-left: 5rem;
}
</style>
