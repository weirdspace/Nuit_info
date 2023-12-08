<template>
  <div class="game-one-view">
    <h1>Game 1</h1>
    <p>Click the button to win the game!</p>
    <button @click="completeGame">Win Game</button>
  </div>
</template>

<script>
export default {
  name: 'GameOneView',
  methods: {
    completeGame() {
      this.$emit('game-complete');
    }
  }
}
</script>

