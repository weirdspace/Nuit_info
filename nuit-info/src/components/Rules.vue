<template>
  <div class="rules">
    <hr style="margin-top: 40px">
    <h1 class="mt-6">{{ msg }}</h1>
    <hr>
    <div class="container mt-5">
      <div class="row">

        <!-- Carte pour le renard -->
        <div class="col-md-6">
          <div class="card">
            <img src="@/assets/fox.png" class="card-img-top" alt="Image du renard">
            <div class="card-body">
              <h5 class="card-title">Foxil, le Renard</h5>
              <p class="card-text">
                "Bonjour à toi, visiteur désireux d’améliorer la situation de notre planète bleue !! Je suis Foxil, un petit renard qui tâche à son échelle de combattre la déforestation et la pollution des sols. Mais, à moi tout seul, je ne pourrai pas changer le monde. J’ai besoin de ton aide pour sensibiliser et éduquer les humains comme toi sur les dangers du réchauffement climatique et sur les solutions pour arranger les choses."
              </p>
            </div>
          </div>
        </div>

        <!-- Carte pour l'ours polaire -->
        <div class="col-md-6">
          <div class="card">
            <img src="@/assets/ourse_polaire.png" class="card-img-top" alt="Image de l'ours polaire">
            <div class="card-body">
              <h5 class="card-title">Ursus, l'Ours Polaire</h5>
              <p class="card-text">
                "Et moi c’est Ursus, l’ours polaire menacé par la fonte des glaces et la pollution des océans. Mais revenons à nos pingouins. Pour en apprendre plus et avancer progressivement sur la piste du changement, il vous faudra résoudre quelques énigmes variées. Vous pourrez consulter votre progression au fur et à mesure sur la barre de progression sur la droite de votre écran. Résolvez toutes les énigmes pour atteindre une société plus saine et plus durable."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
  margin-top: 20px;
}
</style>
