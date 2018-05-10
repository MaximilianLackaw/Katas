import { TennisGame } from '../src/tennis-game';

describe('When starting game', () => {
  let game;

  beforeEach(() => {
    game = new TennisGame();
  });

  it('should return "love all" as score', () => {
    expect(game.score).toBe('love all');
  });

  describe('and player 1 scores', () => {
    beforeEach(() => {
      game.scorePlayer1();
    });

    it('should return "15,love" as score', () => {
      expect(game.score).toBe('15,love');
    });
  });

  describe('and player 2 scores', () => {
    beforeEach(() => {
      game.scorePlayer2();
    });

    it('should return "love;15" as score', () => {
      expect(game.score).toBe('love,15');
    });

    describe('and player 1 scores after player 2', () => {
      beforeEach(() => {
        game.scorePlayer1();
      });

      it('should return "15 all"', () => {
        expect(game.score).toBe('15 all');
      });
    });
  });

  describe('and player 1 scores two times in a row', () => {
    beforeEach(() => {
      game.scorePlayer1();
      game.scorePlayer1();
    });

    it('should return "30,love"', () => {
      expect(game.score).toBe('30,love');
    });
  });

  describe('and player 2 scores two times in a row', () => {
    beforeEach(() => {
      game.scorePlayer2();
      game.scorePlayer2();
    });

    it('should return "love,30"', () => {
      expect(game.score).toBe('love,30');
    });
  });

  describe('and player 1 score three times in a row', () => {
    beforeEach(() => {
      game.scorePlayer1();
      game.scorePlayer1();
      game.scorePlayer1();
    });

    it('should return "40,love"', () => {
      expect(game.score).toBe('40,love');
    });

    describe('and player 2 scores', () => {
      beforeEach(() => {
        game.scorePlayer2();
      });

      it('should return "40,15"', () => {
        expect(game.score).toBe('40,15');
      });
    });

    describe('and player 2 scores twice', () => {
      beforeEach(() => {
        game.scorePlayer2();
        game.scorePlayer2();
      });

      it('should return "40,30"', () => {
        expect(game.score).toBe('40,30');
      });
    });
  });

  describe('and player 1 scores four times in a row', () => {
    beforeEach(() => {
      game.scorePlayer1();
      game.scorePlayer1();
      game.scorePlayer1();
      game.scorePlayer1();
    });

    it('should return "player 1 wins"', () => {
      expect(game.score).toBe('player 1 wins');
    });
  });

  describe('and player 2 scores four times in a row', () => {
    beforeEach(() => {
      game.scorePlayer2();
      game.scorePlayer2();
      game.scorePlayer2();
      game.scorePlayer2();
    });

    it('should return "player 2 wins"', () => {
      expect(game.score).toBe('player 2 wins');
    });
  });

  describe('and player 1 and 2 are scoring three time both', () => {
    beforeEach(() => {
      game.scorePlayer1();
      game.scorePlayer1();
      game.scorePlayer1();
      game.scorePlayer2();
      game.scorePlayer2();
      game.scorePlayer2();
    });

    it('should return "deuce"', () => {
      expect(game.score).toBe('deuce');
    });

    describe('and player 1 scores', () => {
      beforeEach(() => {
        game.scorePlayer1();
      });

      it('should return "advantage player 1"', () => {
        expect(game.score).toBe('advantage player 1');
      });
    });

    describe('and player 2 scores', () => {
      beforeEach(() => {
        game.scorePlayer2();
      });

      it('should return "advantage player 2"', () => {
        expect(game.score).toBe('advantage player 2');
      });

      describe('and player 2 scores again', () => {
        beforeEach(() => {
          game.scorePlayer2();
        });

        it('should return "player 2 wins"', () => {
          expect(game.score).toBe('player 2 wins');
        });
      });
    });
  });

  describe('and both players have scored 5 time without a winner', () => {
    beforeEach(() => {
      game.scorePlayer1();
      game.scorePlayer1();
      game.scorePlayer1();
      game.scorePlayer2();
      game.scorePlayer2();
      game.scorePlayer2();
      game.scorePlayer1();
      game.scorePlayer2();
    });

    it('should return "deuce"', () => {
      expect(game.score).toBe('deuce');
    });

    describe('and player 1 scores the next two game', () => {
      beforeEach(() => {
        game.scorePlayer1();
        game.scorePlayer1();
      });

      it('should return "player 1 wins"', () => {
        expect(game.score).toBe('player 1 wins');
      });
    });
  });
});
