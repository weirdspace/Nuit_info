<template>
  <div class="victory_back_to_game card" style="margin: 5rem">
    <h2 class="card-header">Rejouer un niveau</h2>

    <div class="card-body">
      <p class="card-text">Retrouvez tous les articles utilisés dans l'escape game.</p>
      
      <div class="row row-cols-4 justify-content-center" style="row-gap: 1.5rem">
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
          description: "description",
          link: "/escape-game/1"
        },
        {
          name: "Niveau 2",
          description: "description",
          link: "/escape-game/2"
        },
        {
          name: "Niveau 3",
          description: "description",
          link: "/escape-game/3"
        },
        {
          name: "Niveau 4",
          description: "description",
          link: "/escape-game/4"
        },
        {
          name: "Niveau 5",
          description: "description",
          link: "/escape-game/5"
        },
        {
          name: "Niveau 6",
          description: "description",
          link: "/escape-game/6"
        },
        {
          name: "Niveau 7",
          description: "description",
          link: "/escape-game/7"
        },
        {
          name: "Niveau 8",
          description: "description",
          link: "/escape-game/8"
        },
        {
          name: "Niveau 9",
          description: "description",
          link: "/escape-game/9"
        },
        {
          name: "Niveau 10",
          description: "description",
          link: "/escape-game/10"
        },
      ]
    }
  },
  mounted() {
  }
}
</script>
  