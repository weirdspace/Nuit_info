<template>
    <div class="victory">
      <VictoryArticles></VictoryArticles>
      <VictoryBackToGame></VictoryBackToGame>
    </div>
  </template>
  
<script>
import VictoryArticles from '@/components/VictoryArticles.vue';
import VictoryBackToGame from '@/components/VictoryBackToGame.vue';
import { getLevelCookie } from '@/base_functions';

export default {
    name: 'VictoryView',
    components: {
        VictoryArticles,
        VictoryBackToGame
    },
    beforeMount() {
      if (getLevelCookie() < 4 && getLevelCookie() > 0) {
        window.location = '/escape-game/' + getLevelCookie();
      } else if (getLevelCookie() < 4) {
        window.location = '/';
      }
    }
}
</script>
  