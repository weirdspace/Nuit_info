export class ProgressionUtilisateur {
    constructor() {
      this.currentGame = 1;
      this.totalGames = 2;
    }
  
    completeGame() {
      if (this.currentGame < this.totalGames) {
        this.currentGame++;
      }
    }
  
    isLastGame() {
      return this.currentGame === this.totalGames;
    }
  }
  