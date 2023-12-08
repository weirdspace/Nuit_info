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
        name: "Réchauffement climatique : un danger ...",
        description: "D’après l’ONU, vers 2050, les réfugiés climatiques pourraient être au nombre de 250 millions. Déjà, entre 2008 et 2016, la moyenne annuelle des déplacements liés au changement climatique a été de 25,3 millions de personnes dans le monde...",
        link: "https://reseauactionclimat.org/rechauffement-climatique-danger-humanitaire/"
      },
      {
        name: "Climat et santé, des enjeux liés",
        description: "Le changement climatique a des impacts sur la santé, renforçant les risques liés à la chaleur, aux catastrophes naturelles, aux maladies… Mais de nombreuses mesures pour réduire nos émissions de gaz à effet de serre ont des bénéfices ...",
        link: "https://reseauactionclimat.org/climat-et-sante-des-enjeux-lies/"
      },
      {
        name: "Réchauffement climatique : des ...",
        description: "40°C à Londres ou en Sibérie, 43°C dans le Sud-Ouest de la France, plus de 50°C en Inde… Des records de chaleur sont désormais battus chaque année à travers le monde. Ce que nous subissons aujourd’hui n’est pourtant qu’un aperçu de ce ...",
        link: "https://reseauactionclimat.org/rechauffement-climatique-des-vagues-de-chaleur-plus-frequentes-et-plus-intenses/"
      },
    ];
  }
}
</script>
