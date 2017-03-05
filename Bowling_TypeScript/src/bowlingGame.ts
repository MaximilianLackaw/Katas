const totalPins = 10;

export class BowlingGame {
  private scores: number[];

  constructor() {
    this.scores = [];
  }

  public roll(pins: number): void {
    this.scores.push(pins);
  }

  public getScore(): number{
    let totalScore = 0;
    let scoreIndex = 0;

    for (let i = 0; i < 10; i++) {
      if (this.isStrike(scoreIndex)) {
        totalScore += totalPins + this.calcualteStrikeBonus(scoreIndex);
      } else if (this.isSpare(scoreIndex)) {
        totalScore += totalPins + this.calcualteSpareBonus(scoreIndex);
        scoreIndex++;
      } else {
        totalScore += this.calcualteFramePoints(scoreIndex);
        scoreIndex++;
      }

      scoreIndex++;
    }

    return totalScore;
  }

  private calcualteFramePoints(index: number) {
    return this.scores[index] + this.scores[index + 1];
  }

  private isSpare(index: number) {
    return this.scores[index] + this.scores[index + 1] === totalPins;
  }

  private isStrike(index: number) {
    return this.scores[index] === totalPins;
  }

  private calcualteSpareBonus(index: number) {
    return this.scores[index + 2];
  }

  private calcualteStrikeBonus(index: number) {
    return this.scores[index + 1] + this.scores[index + 2];
  }
}
