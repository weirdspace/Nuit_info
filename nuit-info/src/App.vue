<template>
  <nav class="d-flex justify-content-between">
    <div>
      <router-link :to="'/escape-game/' + getPreviousLevel()" class="btn btn-primary"
        v-if="getCurrentLevel() > 1"
      >Précédent</router-link>
    </div>
    <router-link to="/">Retour à l'accueil</router-link>
    <div>
      <router-link :to="'/escape-game/' + getNextLevel()" class="btn btn-primary"
        v-if="getCurrentLevel() > 0 && getCurrentLevel() < 10 && getLevelCookie() > 0"
      >Suivant</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  methods: {
    setLevelCookie(value) {
      this.setCookie("max_level", value, 30);
    },

    getLevelCookie() {
      return this.getCookie("max_level");
    },

    getCurrentLevel() {
      if (window.location.pathname.startsWith("/escape-game/") && !window.location.pathname.endsWith("victory")) {
        return Number(window.location.pathname.split('/')[2]);
      } else {
        return 0;
      }
    },

    getNextLevel() {
      return this.getCurrentLevel() + 1;
    },

    getPreviousLevel() {
      return this.getCurrentLevel() - 1;
    },

    setCookie(cName, cValue, expDays) {
      let date = new Date();
      date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    },

    getCookie(name) {
      let pattern = RegExp(name + "=.[^;]*");
      let matched = document.cookie.match(pattern);
      if(matched) {
        let cookie = matched[0].split('=');
        return cookie[1];
      } else {
        return 0;
      }
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
