<template>
  <div class="victory_back_to_game card" style="margin: 5rem">
    <h2 class="card-header">Rejouer un niveau</h2>

    <div class="card-body">
      <p class="card-text">Retrouvez tous les articles utilisés dans l'escape game.</p>
      
      <div class="row row-cols-4" style="row-gap: 1.5rem">
        <div class="col" :key="level.name" v-for="level in this.levels">
          <div class="card">
            <div class="card-body text-start">
              <h5 class="card-title">{{ level.name }}</h5>
              <p class="card-text">{{ level.description }}</p>
              <a :href="level.link" class="btn btn-primary">Rejouer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VictoryArticles',
  data() {
    return {
      levels: [
        {
          name: "Niveau 1",
          description: "Puzzle ours polaire",
          link: "?escape-game=1"
        },
        {
          name: "Niveau 2",
          description: "Trouvez les mots",
          link: "?escape-game=2"
        },
        {
          name: "Niveau 3",
          description: "Snake écologique !",
          link: "?escape-game=3"
        },
      ]
    }
  },
  mounted() {
  }
}
</script>
  