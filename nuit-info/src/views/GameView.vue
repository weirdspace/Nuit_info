<template>
  <component :is="currentGameComponent" @game-complete="completeGame" />
</template>

<script>
import { ProgressionUtilisateur } from '../classes/ProgressionUtilisateur.js';
import GameOneView from './GameOneView.vue';
import PuzzleGo from './PuzzleGo.vue';

export default {
  data() {
    return {
      userProgress: new ProgressionUtilisateur()
    };
  },
  computed: {
    currentGameComponent() {
      // This will switch the component based on the current game number
      return this.userProgress.currentGame === 1 ? GameOneView : PuzzleGo;
    }
  },
  methods: {
    completeGame() {
    this.userProgress.completeGame();
    if (this.userProgress.isLastGame()) {
      // This is the last game, display the victory message
      alert('Congratulations! You have completed all the games!');
      // Optionally, navigate to a different page or perform any other actions
      // this.$router.push({ name: 'congratulations-view' });
    } else {
      // Not the last game, just refresh the view to show the next game
      this.$forceUpdate();
    }
  },
    goToNextGame() {
      let nextGameName = `game${this.userProgress.currentGame}`;
      this.$router.push({ name: nextGameName });
    }
  }
}
</script>
