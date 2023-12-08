<template>
    <div class="home">
      <PuzzleGo v-if="getLevel() == 1"/>
      <WordFinder v-if="getLevel() == 2" msg="Article et mini-Jeu"/>
      <SnakeGo v-if="getLevel() == 3"/>

      <ProgressBar msg="Progress bar"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import PuzzleGo from '@/views/PuzzleGo.vue'
  import WordFinder from '@/components/WordFinder.vue'
  import SnakeGo from '@/views/SnakeGo.vue'
  import ProgressBar from '@/components/ProgressBar.vue';
  
  export default {
    components: {
      PuzzleGo,
      WordFinder,
      SnakeGo,

      ProgressBar
      //Article
    },
    methods: {
    getLevel() { 
    if (window.location.search.startsWith("?escape-game") && !window.location.search.endsWith("victory")) {
      console.log(window.location.search.split('='));
        return Number(window.location.search.split('=')[1]);
    } else {
        return 0;
    }
  }
  }

  };
  </script>
  