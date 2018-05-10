function translatePoints(points) {
  switch (points) {
    case 1: return '15';
    case 2: return '30';
    case 3: return '40';
    default: return 'love';
  }
}

export class TennisGame {
  constructor() {
    this.pointsPlayer1 = 0;
    this.pointsPlayer2 = 0;
  }

  scorePlayer1() {
    this.pointsPlayer1++;
  }

  scorePlayer2() {
    this.pointsPlayer2++;
  }

  get score() {
    if (this.pointsPlayer1 > 3 && this.pointsPlayer1 - this.pointsPlayer2 === 1) {
      return 'advantage player 1';
    }

    if (this.pointsPlayer2 > 3 && this.pointsPlayer2 - this.pointsPlayer1 === 1) {
      return 'advantage player 2';
    }

    if (this.pointsPlayer1 >= 3 && this.pointsPlayer1 === this.pointsPlayer2) return 'deuce';

    if (this.pointsPlayer1 >= 4) return 'player 1 wins';

    if (this.pointsPlayer2 >= 4) return 'player 2 wins';

    const points1 = translatePoints(this.pointsPlayer1);

    if (this.pointsPlayer1 === this.pointsPlayer2) return `${points1} all`;

    return `${points1},${translatePoints(this.pointsPlayer2)}`;
  }
}
