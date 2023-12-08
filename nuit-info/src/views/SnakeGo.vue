<template>
  <div class="game-board">
    <div v-for="(cell, index) in cells" :key="index" class="cell"
     :class="{ 'snake-head': isSnakeHead(index), 'snake-body': isSnakeBody(index), 'letter-cell': isLetterCell(index) }">
  <!-- Affiche la lettre si c'est une cellule de lettre -->
  <span v-if="isLetterCell(index)">{{ currentLetter }}</span>
</div>

  </div>
</template>

<script>
import {setLevelCookie } from '@/base_functions'
export default {
  data() {
    return {
      boardSize: 10, // Taille du plateau (10x10)
      snake: [0], // Indices des cellules occupées par le serpent
      direction: 'RIGHT', // Direction initiale
      currentLetter: 'C', // Lettre actuelle à manger
      targetWord: 'CLIMATIQUE', // Mot cible
      targetIndex: 0, // Index de la lettre actuelle dans le mot
      letterCell: 15, // Position initiale de la lettre
    };
  },
  computed: {
    cells() {
      return Array.from({ length: this.boardSize * this.boardSize });
    },
    
  },
  methods: {
    getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
},
isSnakeHead(index) {
    return this.snake[0] === index;
  },
  isSnakeBody(index) {
    return this.snake.slice(1).includes(index);
  },
handleKeyDown(event) {
    switch(event.key) {
      case 'ArrowRight':
        this.direction = 'RIGHT';
        break;
      case 'ArrowLeft':
        this.direction = 'LEFT';
        break;
      case 'ArrowUp':
        this.direction = 'UP';
        break;
      case 'ArrowDown':
        this.direction = 'DOWN';
        break;
    }
  },
     moveSnake() {
      let newHead;
      const currentHead = this.snake[0];

      switch (this.direction) {
        case 'RIGHT':
          newHead = (currentHead + 1) % this.boardSize === 0 ? currentHead - this.boardSize + 1 : currentHead + 1;
          break;
        case 'LEFT':
          newHead = currentHead % this.boardSize === 0 ? currentHead + this.boardSize - 1 : currentHead - 1;
          break;
        case 'UP':
          newHead = currentHead - this.boardSize < 0 ? currentHead + this.boardSize * (this.boardSize - 1) : currentHead - this.boardSize;
          break;
        case 'DOWN':
          newHead = (currentHead + this.boardSize) % (this.boardSize * this.boardSize);
          break;
      }

      // Check if the new head collides with the snake body
      if (this.snake.includes(newHead)) {
        alert('Game Over! You hit yourself!');
        this.resetGame();
        return;
      }

      this.snake.unshift(newHead); // Add the new head
      this.snake.pop(); // Remove the tail

      // Check if the head collides with the letter
      if (newHead === this.letterCell) {
        this.handleLetterConsumption();
        this.snake.unshift(newHead);
      }
    },
    resetGame() {
      this.snake = [0];
      this.direction = 'RIGHT';
      this.currentLetter = 'C';
      this.targetIndex = 0;
      this.letterCell = this.getRandomInt(0, 99);
    },

  handleLetterConsumption() {
    
    if (this.targetWord[this.targetIndex] === this.currentLetter) {
      this.targetIndex++;
      this.currentLetter = this.targetWord[this.targetIndex];
      // Déplacer la lettre à une nouvelle position
      this.letterCell = this.getRandomInt(0,99);
    } 

    // Vérifier si le jeu est gagné
    if (this.targetIndex === this.targetWord.length) {
      alert('Félicitations ! Vous avez gagné ! Le mot était '+this.targetWord);
       
            setLevelCookie(4);
            window.location = '/escape-game/4';
          
    }
   
  },
    isSnakeCell(index) {
      return this.snake.includes(index);
    },
    isLetterCell(index) {
      return index === this.letterCell;
    },
    
  },
  mounted() {
  window.addEventListener('keydown', this.handleKeyDown);
  setInterval(this.moveSnake, 300);
},

beforeUnmount() {
  window.removeEventListener('keydown', this.handleKeyDown);
}

  
  
}

</script>

<style>
.game-board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 135%;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #ddd;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transform: scale(1.35);
}

.cell {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.snake-head {
  background: url('@/assets/head.png');
  background-size: cover;
}

.snake-body {
  background: url('@/assets/body.png');
  background-size: cover;
}

.letter-cell {
  background-color: blue;
  color: white;
}
</style>


