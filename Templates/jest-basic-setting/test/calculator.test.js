import { Calculator } from '../src/calculator';

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

test('When calculating 2 + 2 it should return 4', () => {
  const result = calculator.add(2, 2);

  expect(result).toBe(4);
});
