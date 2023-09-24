<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BddFirebase from './views/BddFirebase.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/kompoz-logo.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Kompoz" />

      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/kompoz">Kompoz</RouterLink>
        <RouterLink to="/dekompoz">DeKompoz</RouterLink>
        <RouterLink to="/rekompoz">ReKompoz</RouterLink>
        <RouterLink to="/adokompoz">AdoKompoz</RouterLink>
        <RouterLink to="/minikompoz">MiniKompoz</RouterLink>
        <br>
        <br>
        <hr>
        <br>
        <RouterLink to="/ressources">Ressources</RouterLink>
        <RouterLink to="/temoignages">Temoignages</RouterLink>
        <RouterLink to="/forum">Forum</RouterLink>
        <RouterLink to="/newsletter">Recevoir les informations</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
        <RouterLink to="/profile">Mon profile</RouterLink>
        <br><br>
        <hr>
        <br>


        <!-- <h3>Telécharger Kompoz Mobile</h3> -->
        <!-- <p>Téléchargez l'application Kompoz dès aujourd'hui et commencez votre nouveau départ.</p> -->
        <button><a href="lien_de_telechargement">Télécharger Kompoz</a></button>

        <!-- <h3>Inscription</h3> -->
        <!-- <p>Téléchargez l'application Kompoz dès aujourd'hui et commencez votre nouveau départ.</p> -->
        <button>
          <RouterLink to="/login">Connexion</RouterLink>
        </button>

        <BddFirebase />


      </nav>
    </div>
  </header>

  <RouterView />
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
