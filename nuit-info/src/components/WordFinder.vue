<template>
    <div>
      <h1>Word Finder Game</h1>
      <h2>Devinez quelques mots sur le climat avec ces lettres:</h2>
        <!-- Affichage de la grille de lettres -->
    </div>
    <div>
    <div v-for="(row, rowIndex) in grid" :key="rowIndex">
      <div v-for="(word, colIndex) in row" :key="colIndex">
        <span>{{ word.charAt(0) }}</span> <!-- Affiche la première lettre -->
        <span v-if="word.length > 2">
          {{ word.slice(1, -1).split('').map((letter, index) => index === Math.floor((word.length - 1) / 2) ? letter : '●').join('') }}
        </span> <!-- Affiche la lettre du milieu (si elle existe) -->
        <span v-if="word.length > 1">{{ word.charAt(word.length - 1) }}</span> <!-- Affiche la dernière lettre si elle existe -->
      </div>
    </div>
  </div>

      <!--  Entrée des mots -->
      <input type="text" v-model="userInput" placeholder="Entrez un mot">
      <button @click="checkWord">Vérifier</button>
      <div>
        <!-- Affichage des mots trouvés -->
        <ul>
          <li v-for="foundWord in foundWords" :key="foundWord">{{ foundWord }}</li>
        </ul>
      </div>
  </template>
  
  <script>
  import {setLevelCookie } from '@/base_functions'
  export default {
    data() {
      return {
        grid: [
        ['BANQUISE'],
          ['CLIMATIQUE'],
          ['RECHAUFFEMENT'],
          ['GLACE']
        ],
        userInput: '',
        foundWords: [],
        wordFound: false // Ajout d'une variable pour indiquer si un mot a été trouvé
      };
    },
    methods: {
      checkWord() {
        const wordToFind = this.userInput.toUpperCase(); // Convertit le mot entré en majuscules
        const gridRows = this.grid.map(row => row.join('')); // Convertit la grille en lignes de texte
  
        let wordFound = false; // Variable pour indiquer si un mot a été trouvé
  
        for (const row of gridRows) {
          if (row.includes(wordToFind)) {
            this.foundWords.push(wordToFind); // Ajoute le mot trouvé à la liste
            wordFound = true; // Indique qu'un mot a été trouvé
          }
        }
  
        if (!wordFound) {
          alert("Le mot n'est pas dans la grille.");
          // Vous pouvez ajouter une logique pour informer l'utilisateur que le mot n'a pas été trouvé
        }
  
        this.wordFound = wordFound; // Met à jour la variable wordFound dans les données du composant
        if(this.grid.length === this.foundWords.length){
          alert("win.");
          setLevelCookie(3);
          window.location = '?escape-game=3';
        }
      }
    }
  };
  </script>
  
  
  <style>
  /* Styles CSS pour la mise en forme de la grille et des éléments */
  .grid {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
  }
  .cell {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  