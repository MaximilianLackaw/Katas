'use strict';

describe('SimpleClass', () => {

  var simpleClass;

  beforeEach(() => {
    simpleClass = new SimpleClass();
  });


  it('Should return 4', () => {
    expect(simpleClass.add(2, 2)).toBe(4);
  });

});
