<template>

  <nav class="d-flex justify-content-between">
    <div>
      <a :href="'?escape-game=' + bf.getPreviousLevel()" class="btn btn-primary"
        v-if="bf.getCurrentLevel() > 1"
      >Précédent</a>
    </div>
    <a href="/">Retour à l'accueil</a>
    <div>
      <a :href="'?escape-game=' + bf.getNextLevel()" class="btn btn-primary"
        v-if="bf.getCurrentLevel() > 0 && bf.getCurrentLevel() < 10 && bf.getLevelCookie() > 0 && bf.getCurrentLevel() < bf.getLevelCookie()"
      >Suivant</a>
    </div>

  </nav>
  <HomeView />
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  components: {
    HomeView,
  },
  data() {
    return {
      bf: require('@/base_functions')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
