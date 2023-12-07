<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form id="accessibility">
      <h2>Paramètres d'Accessibilité</h2>
      <div>
        <label for="fontSize">Malvoyant:</label>
        <label><input type="radio" name="fontSize" value="True">Oui</label>
        <label><input type="radio" name="fontSize" value="False">Non</label>
      </div>
      <div>
        <label for="colorScheme">Dislexique</label>
        <label><input type="radio" name="colorScheme" value="True">Oui</label>
        <label><input type="radio" name="colorScheme" value="False">Non</label>
      </div>

      <label for="audioDescriptions"><input type="checkbox" id="audioDescriptions" name="audioDescriptions">Audio-description</label>

      <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant, vous acceptez notre utilisation des cookies.</p>
      <button type="button" @click="saveSettings()">Continuer</button>
    </form>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    saveSettings () {
      let form = new FormData(document.getElementById('accessibility'));
      this.setCookie('settings',JSON.stringify(Object.fromEntries(form)),30);
    },
    setCookie(cName, cValue, expDays) {
      let date = new Date();
      date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
}
}
</script>
