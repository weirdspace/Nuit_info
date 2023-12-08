<template>
  <div class="puzzle">
    <div class="puzzle-board" :style="{ width: boardSize + 'px', height: boardSize + 'px' }">
      <div v-for="index in gridSize * gridSize"
           :key="index"
           class="puzzle-tile"
           :style="tileStyle(index)"
           @click="moveTile(index)">
        <div v-if="index !== emptyTile" class="puzzle-image" :style="imageStyle(tiles[index])"></div>
    
      </div>
    </div>
  </div>
  <button @click="solvePuzzle" class="solve-button">Résoudre le Puzzle</button>
</template>

<script>
export default {
  data() {
    return {
      gridSize: 3, // 4x4 grid
      boardSize: 300, // Size of the board in pixels
      emptyTile: 1, // The index of the empty tile
      tiles: [],
      imageSrc: require('@/assets/im.jpg'), // Path to your image
    };
  },
  created() {
    this.initTiles();
    this.shuffleTiles();
  },
  methods: {
    
  solvePuzzle() {
  // Réinitialisez les tuiles dans l'ordre initial
  this.tiles = Array.from(Array(this.gridSize * this.gridSize ).keys());

  // Ajoutez le carreau qui était initialement en bas à droite à la première position
  this.tiles.unshift(this.tiles.length);

  // Mettez à jour l'indice de la tuile vide pour qu'elle soit en haut à gauche
  this.emptyTile = 1;
  alert('Congratulations (no)! You solved the puzzle (or not)');
},

    initTiles() {
      this.tiles = Array.from(Array(this.gridSize * this.gridSize).keys());
    },
    shuffleTiles() {
  const shuffleCount = 5; // Un nombre plus petit rend le puzzle plus facile
  for (let i = 0; i < shuffleCount; i++) {
    const tileIndex = Math.floor(Math.random() * (this.tiles.length - 1));
    if (this.isAdjacent(tileIndex, this.emptyTile)) {
      [this.tiles[tileIndex], this.tiles[this.emptyTile]] = [this.tiles[this.emptyTile], this.tiles[tileIndex]];
      this.emptyTile = tileIndex;
    }
  }
  this.emptyTile = 1;
},

    moveTile(index) {
      if (index !== this.emptyTile && this.isAdjacent(index, this.emptyTile)) {
        [this.tiles[index], this.tiles[this.emptyTile]] = [this.tiles[this.emptyTile], this.tiles[index]];
        this.emptyTile = index;
        if (this.isSolved()) {
          alert('Congratulations! You solved the puzzle!');
        }
      }
    },
    isAdjacent(index1, index2) {
  // Calculer les positions de ligne et de colonne
  const row1 = Math.floor(index1 / this.gridSize);
  const col1 = index1 % this.gridSize;
  const row2 = Math.floor(index2 / this.gridSize);
  const col2 = index2 % this.gridSize;

  // Vérifier si les carreaux sont adjacents
  // y compris le mouvement entre les rangées
  return Math.abs(row1 - row2) === 1 && col1 === col2 || // Vertical adjacent
         Math.abs(col1 - col2) === 1 && row1 === row2 || // Horizontal adjacent
         (row1 !== row2 && col1 !== col2 && Math.abs(index1 - index2) === 1); // Diagonal adjacent for end and start of rows
},


    tileStyle(index) {
      const size = this.boardSize / this.gridSize;
      return {
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`,
        float: 'left',
        border: index !== this.emptyTile ? '1px solid #ddd' : 'none',
        boxSizing: 'border-box',
        cursor: 'pointer'
      };
    },
    imageStyle(tileIndex) {
      const size = this.boardSize / this.gridSize;
      const row = Math.floor(tileIndex / this.gridSize);
      const col = tileIndex % this.gridSize;
      return {
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${this.imageSrc})`,
        backgroundSize: `${this.boardSize}px ${this.boardSize}px`,
        backgroundPosition: `-${col * size}px -${row * size}px`
      };
    },
    isSolved() {
  // Vérifier si le dernier carreau est maintenant le premier
  if (this.tiles[0] !== this.tiles.length - 1) {
    return false;
  }

  // Vérifier le reste des carreaux
  for (let i = 1; i < this.tiles.length; i++) {
    if (this.tiles[i] !== i - 1) {
      return false;
    }
  }

  return true;
}

  }
}
</script>

<style scoped>
.puzzle-board {
  position: relative;
  margin: 0 auto;
}
.solve-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .solve-button:hover {
    background-color: #45a049;
  }

.puzzle-tile {
  background-color: #fff;
}

.puzzle-image {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
