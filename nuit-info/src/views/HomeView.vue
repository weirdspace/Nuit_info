<template>
  <div class="container-md">
    <div v-if="!getCookie('settings')" class="card">
      <div class="card-header">
        <h5>Paramètres d'Accessibilité</h5>
      </div>
      <div class="card-body">
        <form class="card-text" id="accessibility">
          <div class="container">
            <div class="row">
              <div class="col">
                <label for="fontSize">Malvoyant:</label>
                <label><input type="radio" name="fontSize" value="True"> Oui</label>
                <label><input type="radio" name="fontSize" value="False"> Non</label>
              </div>
              <div class="col">
                <label for="colorScheme">Dislexique</label>
                <label><input type="radio" name="colorScheme" value="True"> Oui</label>
                <label><input type="radio" name="colorScheme" value="False"> Non</label>
              </div>
              <div class="col">
                <input class="form-check-input" type="checkbox" id="audioDescriptions" name="audioDescriptions">
                <label class="form-check-label" for="audioDescriptions"> Audio-description</label>
              </div>
            </div>
          </div>
          <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant, vous acceptez notre utilisation des cookies.</p>
          <button class="btn btn-primary" type="button" @click="saveSettings()">Continuer et jouer</button>
        </form>

      </div>
    </div>

    <div v-else>
      <button class="btn btn-primary" type="button" @click="goBackToMaxLevel()">Reprendre le jeu</button>
    </div>


    <Rules msg="Voici les règles du jeu"/>
    <div class="progress-bar-container">
      <ProgressBar msg="Progress bar"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Rules from '@/components/Rules.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { getLevelCookie } from '@/base_functions';

export default {
  name: 'HomeView',
  components: {
    Rules,
    ProgressBar
  },
  methods: {
    saveSettings () {
      let form = new FormData(document.getElementById('accessibility'));
      this.setCookie('settings',JSON.stringify(Object.fromEntries(form)),30);
      this.setCookie("max_level", 1, 30);
      window.location='/escape-game/1';
    },

    setCookie(cName, cValue, expDays) {
      let date = new Date();
      date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    },

    getCookie(name){
      let pattern = RegExp(name + "=.[^;]*")
        console.log(pattern);
      let matched = document.cookie.match(pattern)
        console.log(matched);
      if(matched){
        let cookie = matched[0].split('=')
        return cookie[1]
      }
      return false
    },

    goBackToMaxLevel() {
      if (getLevelCookie() < 4 && getLevelCookie() > 0) {
        window.location = '/escape-game/' + getLevelCookie();
      } else if (getLevelCookie() < 4) {
        window.location = '/';
      }
    }
  },
  beforeMount() {
    if (getLevelCookie() >= 4) {
      window.location = "/escape-game/victory";
    }
  }
}
</script>
<style>
label,input{
  padding-left: 5px;
  padding-right: 5px;
}
.progress-bar-container {
  position: fixed;
  bottom: 4rem;
  display: flex;
  padding: 20px; /* Ajustez cela en fonction de vos besoins */
  z-index: 999; /* Assurez-vous que la barre de progression est au-dessus du contenu principal */
}
</style>
