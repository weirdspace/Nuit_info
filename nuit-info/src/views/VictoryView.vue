<template>
    <div class="victory">
      <VictoryArticles></VictoryArticles>
      <VictoryBackToGame></VictoryBackToGame>
    </div>
  </template>
  
<script>
import VictoryArticles from '@/components/VictoryArticles.vue';
import VictoryBackToGame from '@/components/VictoryBackToGame.vue';

export default {
    name: 'VictoryView',
    components: {
        VictoryArticles,
        VictoryBackToGame
    }
}
</script>
  