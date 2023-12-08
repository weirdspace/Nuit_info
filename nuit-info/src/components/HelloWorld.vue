<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <img :src="images[currentIndex]" alt="Image" :style="{ height: '150', width: '400px', transform: 'rotate(90deg)' }">
      <button @click="previousImage" :disabled="currentIndex === 0">Précédent</button>
      <button @click="nextImage" :disabled="currentIndex === 10">Suivant</button>
      <div>
        <label for="imageIndex">Index de l'image :</label>
        <input type="number" v-model="imageIndex" id="imageIndex" @input="updateImage">
      </div>
    </div>

    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <div>
    <button class="btn btn-primary">Bouton Bootstrap</button>
  </div>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      images: [
        require("@/assets/0.jpg"),
        require("@/assets/1.jpg"),
        require("@/assets/2.jpg"),
        require("@/assets/3.jpg"),
        require("@/assets/4.jpg"),
        require("@/assets/5.jpg"),
        require("@/assets/6.jpg"),
        require("@/assets/7.jpg"),
        require("@/assets/8.jpg"),
        require("@/assets/9.jpg"),
        require("@/assets/10.jpg")
      ],  // Liste prédefinie d'images
      imageIndex: 0 // Index actuel de l'image
    };
  },
  computed: {
    currentIndex() {
      return (Number(getLevelCookie())-1)*3+1
    }
  },
  methods: {
    nextImage() {
      // Incrémente l'index
      if (this.currentIndex < 10) {
        this.imageIndex++;
      }
    },
    previousImage() {
      // Décrémente l'index
      if (this.currentIndex > 0) {
        this.imageIndex--;
      }
    },
    updateImage() {
      // Met à jour l'index en fonction de la valeur entrée
      this.imageIndex = parseInt(this.imageIndex, 10);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
