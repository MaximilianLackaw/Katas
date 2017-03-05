import * as chai from 'chai';
import { BowlingGame } from '../bowlingGame';

let game: BowlingGame;

const expect = chai.expect;

const rollMany = (times: number, pins: number): void => {
  for (let i = 0; i < times; i++) {
    game.roll(pins);
  }
}

const rollSpare = () => {
  game.roll(7);
  game.roll(3);
}

describe('Bowling game:', () => {
  let result: number;

  beforeEach(() => {
    game = new BowlingGame();
  });

  describe('When having a gutter game', () => {
    beforeEach(() => {
      rollMany(20, 0);
    });

    it('Should return 0', () => {
      expect(game.getScore()).to.be.equal(0);
    });
  });

  describe('When rolling one twenty times', () => {
    beforeEach(() => {
      rollMany(20, 1);
    });

    it('Should return 20', () => {
      expect(game.getScore()).to.be.equal(20);
    });
  });

  describe('When having one spare', () => {
    beforeEach(() => {
      rollSpare();
      game.roll(3);
      rollMany(17, 0);
    });

    it('Should return 16', () => {
      expect(game.getScore()).to.be.equal(16);
    });
  });

  describe('When having one strike', () => {
    beforeEach(() => {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      rollMany(16, 1);
    });

    it('Should return 40', () => {
      expect(game.getScore()).to.be.equal(40);
    });
  });

  describe('When having two strikes', () => {
    beforeEach(() => {
      game.roll(10);
      game.roll(10);
      game.roll(4);
      game.roll(2);
      rollMany(14, 0);
    });

    it('Should return 19', () => {
      expect(game.getScore()).to.be.equal(46);
    });
  });

  describe('When starting the last frame with a spare', () => {
    beforeEach(() => {
      rollMany(18, 0);
      rollSpare();
      game.roll(3);
    });

    it('Should return 13', () => {
      expect(game.getScore()).to.be.equal(13);
    });
  });

  describe('When starting the last frame with a strike', () => {
    beforeEach(() => {
      rollMany(18, 0);
      game.roll(10);
      game.roll(3);
      game.roll(6);
    });

    it('Should return 19', () => {
      expect(game.getScore()).to.be.equal(19);
    });
  });

  describe('When having a perfect game', () => {
    beforeEach(() => {
      rollMany(12, 10);
    });

    it('Should return 300', () => {
      expect(game.getScore()).to.be.equal(300);
    });
  });
});
