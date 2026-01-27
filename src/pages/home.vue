<template>
  <div class="home">
    <section class="hero-section">
      <div class="text-content">
        <h1>Bienvenue sur Dungeons Lovers !</h1>
        <p>
          Plongez dans un univers fantastique où l'aventure et la camaraderie vous attendent.
          Recrutez vos héros, améliorez leurs compétences et partez à l'aventure.
        </p>
        <router-link to="/heroes" class="cta-btn">Voir les héros</router-link>
      </div>

      <div class="image-content">
        <img src="/img/heroImages/Leper_combat.gif" alt="Combat GIF" />
      </div>
    </section>

    <section class="info-section">
      <h2>À propos du jeu</h2>
      <p>
        Dungeons Lovers est un jeu où chaque décision compte. Construisez votre équipe de héros, 
        améliorez leurs statistiques et explorez des donjons remplis de mystères et de dangers.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff3d1;
}

.hero-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #7a1e1e;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.text-content {
  flex: 1 1 400px;
  margin-right: 2rem;
}

.text-content h1 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #ffe8c3;
}

.text-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cta-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #fcbf49;
  color: #7a1e1e;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
}

.cta-btn:hover {
  transform: scale(1.05);
  background: #f77f00;
}

.image-content {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
}

.image-content img {
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
}

.info-section {
  background: #3d2d1c;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  text-align: center;
}

.info-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffe8c3;
}

.info-section p {
  font-size: 1.1rem;
  line-height: 1.5;
}
</style>