<template>
    <div class="progress-bar-container">
        <div>
        <img :src="images[currentIndex]" alt="Image" :style="{ height: '150', width: '400px', transform: 'rotate(90deg)' }">

        </div>
    </div>
</template>

<script>

import { getLevelCookie } from '@/base_functions'

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
      let val = (Number(getLevelCookie())-1)*3+1;
      if (val <= 0) {
        val = 1;
      }

      return val;
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

<style>
label,input{
  padding-left: 5px;
  padding-right: 5px;
}
.progress-bar-container {
  position: fixed;
  right: 0;
  bottom: 4rem;
  padding: 20px;
  z-index: 999;
}
</style>