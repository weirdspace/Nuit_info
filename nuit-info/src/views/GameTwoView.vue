<template>
  <div class="game-two-view">
    <h1>Game 2</h1>
    <p>Click the button to win the game!</p>
    <button @click="completeGame">Win Game</button>
  </div>
</template>

<script>
export default {
  name: 'GameTwoView',
  methods: {
    completeGame() {
      this.$emit('game-complete');
    }
  }
}
</script>
