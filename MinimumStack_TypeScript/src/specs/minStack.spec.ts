import 'mocha';
import * as chai from 'chai';
import { EmptyStackError } from '../errors';
import {IMinStack} from '../interfaces';
import {MinStack} from '../minStack';

const expect = chai.expect;


describe('MinStack:', () => {
  let minStack: IMinStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  describe('When stack is initialized', () => {
    it('Should stack be emtpy', () => {
      expect(minStack.isEmpty()).to.be.equal(true);
    });
  });

  describe('When pushing "1" on empty minStack', () => {
    beforeEach(() => {
      minStack.push(1);
    });

    it('Should top return "1"', () => {
      expect(minStack.top()).to.be.equal(1);
    });

    it('Should isEmpty return false', () => {
      expect(minStack.isEmpty()).to.be.equal(false);
    });

    it('Should return "1" as minimum element', () => {
      expect(minStack.getMin()).to.be.equal(1);
    });

    describe('And removing the top element', () => {
      beforeEach(() => {
        minStack.pop();
      });

      it('Should isEmpty return true', () => {
        expect(minStack.isEmpty()).to.be.equal(true);
      });
    });
  });

  describe('When pushing elements "3", "2" on empty stack', () => {
    beforeEach(() => {
      minStack.push(3);
      minStack.push(2);
    });

    it('Should return "2" as top elment', () => {
      expect(minStack.top()).to.be.equal(2);
    });

    it('Should return "2" as minimum element', () => {
      expect(minStack.getMin()).to.be.equal(2);
    });

    describe('And removing top element', () => {
      beforeEach(() => {
        minStack.pop();
      });

      it('Should return "3" as top elment', () => {
        expect(minStack.top()).to.be.equal(3);
      });

      it('Should return "3" as minimum element', () => {
        expect(minStack.getMin()).to.be.equal(3);
      });
    });
  });

  describe('When pushing elements "2", "3" on empty stack', () => {
    beforeEach(() => {
      minStack.push(2);
      minStack.push(3);
    });

    it('Should return "3" as top elment', () => {
      expect(minStack.top()).to.be.equal(3);
    });

    it('Should return "2" as minimum element', () => {
      expect(minStack.getMin()).to.be.equal(2);
    });
  });

  describe('When pushing elements "5", "2", "2", "3" on empty stack', () => {
    beforeEach(() => {
      minStack.push(5);
      minStack.push(2);
      minStack.push(2);
      minStack.push(3);
    });

    it('Should return "2" as minimum element', () => {
      expect(minStack.getMin()).to.be.equal(2);
    });

    describe('And removing the top 2 elments', () => {
      beforeEach(() => {
        minStack.pop();
        minStack.pop();
      });

      it.only('Should return "2" as minimum element', () => {
        expect(minStack.getMin()).to.be.equal(2);
      });
    });

    describe('And removing the top 3 elments', () => {
      beforeEach(() => {
        minStack.pop();
        minStack.pop();
        minStack.pop();
      });

      it('Should return "5" as minimum element', () => {
        expect(minStack.getMin()).to.be.equal(5);
      });
    });
  });

  describe('When removing the top element from an empty stack', () => {
    it('Should throw an empty stack error', () => {
      const fn = () => { minStack.pop(); }
      expect(fn).to.throw(EmptyStackError);
    });
  });
});
