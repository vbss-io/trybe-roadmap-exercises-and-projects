const myFizzBuzz = require('../src/myFizzBuzz');

describe('Testando função de fizzbuzz', () => {
  it('Deve retornar fizzbuzz quando receber números divisíveis por 3 e 5', () => {
    const numbers = [15, 30, 45, 60, 75, 90];
    numbers.forEach(num => {
      expect(myFizzBuzz(num)).toBe('fizzbuzz');
    });
  });
  it('Deve retornar fizz quando receber números divisíveis por 3', () => {
    const numbers = [3, 6, 9, 12, 18, 21, 24];
    numbers.forEach(num => {
      expect(myFizzBuzz(num)).toBe('fizz');
    });
  });
  it('Deve retornar buzz quando receber números divisíveis por 5', () => {
    const numbers = [5, 10, 20, 25, 35, 40, 50];
    numbers.forEach(num => {
      expect(myFizzBuzz(num)).toBe('buzz');
    });
  });
  it('Deve retornar o número quando não for divisível por 3 e 5', () => {
    const numbers = [1, 2, 4, 7, 8, 11, 13, 14];
    numbers.forEach(num => {
      expect(myFizzBuzz(num)).toBe(num);
    });
  });
  it('Deve retornar false quando receber um valor que não é um número', () => {
    const values = ['a', '1', 'test', 'notNumber', undefined, null];
    values.forEach(num => {
      expect(myFizzBuzz(num)).toBe(false);
    });
  });
});