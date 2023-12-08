<template>
  <div class="victory_articles card" style="margin: 5rem">
    <h2 class="card-header">Consulter les articles sur l'écologie</h2>

    <div class="card-body">
      <p class="card-text">Retrouvez tous les articles utilisés dans l'escape game.</p>
      
      <div class="row row-cols-4" style="row-gap: 1.5rem">
        <div class="col" :key="article.name" v-for="article in this.articles">
          <div class="card">
            <div class="card-body text-start">
              <h5 class="card-title">{{ article.name }}</h5>
              <p class="card-text">{{ article.description }}</p>
              <a :href="article.link" class="btn btn-primary">Consulter</a>
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
      articles: []
    }
  },
  mounted() {
    this.articles = [
      {
        name: "TEST1",
        description: "TEST 1 description",
        link: "#"
      },
      {
        name: "TEST2",
        description: "TEST 2 description",
        link: "#"
      },
      {
        name: "TEST3",
        description: "TEST 3 description",
        link: "#"
      },
      {
        name: "TEST4",
        description: "TEST 4 description",
        link: "#"
      },
      {
        name: "TEST1",
        description: "TEST 1 description",
        link: "#"
      },
      {
        name: "TEST2",
        description: "TEST 2 description",
        link: "#"
      },
      {
        name: "TEST3",
        description: "TEST 3 description",
        link: "#"
      },
      {
        name: "TEST4",
        description: "TEST 4 description",
        link: "#"
      },
    ];
  }
}
</script>
