/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}
*/

describe('4 - Testando a função `circle`', () => {
  it('Teste se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle('a')).toBeUndefined();
    expect(circle('1')).toBeUndefined();
    expect(circle(null)).toBeUndefined();
  });
  it('Teste se circle retorna um objeto.', () => {
    expect(typeof circle(1)).toBe('object');
  });
  it('Teste se circle retorna um objeto com as propriedades `radius`, `area` e `circumference`.', () => {
    expect(Object.keys(circle(5)).length).toEqual(3);
    expect(Object.keys(circle(5)).includes('radius')).toBeTruthy();
    expect(Object.keys(circle(5)).includes('area')).toBeTruthy();
    expect(Object.keys(circle(5)).includes('circumference')).toBeTruthy();
  });
  it('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(circle()).toBeUndefined();
  });
  it('Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.', () => {
    expect(circle(2).circumference).toBeCloseTo(12.56);
  });
  it('Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.', () => {
    expect(parseFloat((circle(3).area).toPrecision(2))).toBeCloseTo(28);
  });
  it('Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.', () => {
    expect(circle(3).radius).toBe(3);
    expect(parseFloat((circle(3).area).toPrecision(2))).toBeCloseTo(28);
    expect(parseFloat((circle(3).circumference).toPrecision(2))).toBeCloseTo(19);
  });
});
