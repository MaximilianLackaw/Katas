import { fizzBuzz } from '../src/fizz-bazz';

test('When 1 is given it should return "1"', () => {
  const result = fizzBuzz(1);

  expect(result).toBe('1');
});

test('When 2 is given it should return "2"', () => {
  const result = fizzBuzz(2);

  expect(result).toBe('2');
});

test('When 3 is given it should return "Fizz"', () => {
  const result = fizzBuzz(3);

  expect(result).toBe('Fizz');
});

test('When 4 is given it should return "4"', () => {
  const result = fizzBuzz(4);

  expect(result).toBe('4');
});

test('When 5 is given it should return "Buzz"', () => {
  const result = fizzBuzz(5);

  expect(result).toBe('Buzz');
});

test('When 6 is given it should return "Fizz"', () => {
  const result = fizzBuzz(6);

  expect(result).toBe('Fizz');
});

test('When 7 is given it should return "7"', () => {
  const result = fizzBuzz(7);

  expect(result).toBe('7');
});

test('When 10 is given it should return "Buzz"', () => {
  const result = fizzBuzz(10);

  expect(result).toBe('Buzz');
});

test('When 13 is given it should return "13"', () => {
  const result = fizzBuzz(13);

  expect(result).toBe('13');
});

test('When 15 is given it should return "FizzBuzz"', () => {
  const result = fizzBuzz(15);

  expect(result).toBe('FizzBuzz');
});
