<template>
    <div>
      <img :src="images[currentIndex]" alt="Image" :style="{ height: '150', width: '400px', transform: 'rotate(90deg)' }">

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
      return this.imageIndex % this.images.length;
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