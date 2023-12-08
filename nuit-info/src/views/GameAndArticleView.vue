<template>
    <div class="home">
      <img alt="Vue Article-Jeu" src="../assets/mini-game.jpg">
      <MiniGame v-if="getLevel() == 1" msg="Article et mini-Jeu"/>
      <WordFinder v-if="getLevel() == 2" msg="Article et mini-Jeu"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import MiniGame from '@/components/MiniGame.vue'
  import WordFinder from '@/components/WordFinder.vue'
  
  export default {
    components: {
      MiniGame,
      WordFinder
      //Article
    },
    methods: {
    getLevel() { 
    if (window.location.pathname.startsWith("/escape-game/") && !window.location.pathname.endsWith("victory")) {
        return Number(window.location.pathname.split('/')[2]);
    } else {
        return 0;
    }
  }
  }

  };
  </script>
  