/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Verifica se a função `numbers`retorna `true` quando o array contém apenas números e falso caso contrário', () => {
  it('Teste em que a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });
  it('Teste em que a função recebe [1, 2, "3", 4, 5] e retorna false', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  });
  it('Teste em que a função recebe [1, "a", 3] e retorna false', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  });
  it('Teste em que a função recebe [] e retorna false', () => {
    expect(numbers([' '])).toBeFalsy();
    expect(numbers([])).toBeFalsy();
  });
});
