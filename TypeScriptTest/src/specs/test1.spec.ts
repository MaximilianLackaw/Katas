import { expect } from 'chai';
import { Test1 } from '../test1';

describe('Class Test1:', () => {
  describe('When calculating 2 + 2', () => {
    let result: number;

    beforeEach(() => {
      const test1 = new Test1();
      result = test1.Add(2, 2);
    });

    it('Should return "4"', () => {
      expect(result).to.be.equal(4);
    });
  });
});
