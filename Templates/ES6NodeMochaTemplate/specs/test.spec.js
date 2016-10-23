'use strict';

var expect = require('chai').expect;

const SimpleClass = require('../src/SimpleClass.js');

describe('SimpleClass', () => {
  var simpleClass;

  beforeEach(() => {
    simpleClass = new SimpleClass();
  });

  it('Should return 4', () => {
    expect(simpleClass.add(2, 2)).to.equal(4);
  });
});
