const sum = require("../src/sum");

describe('Testando função de soma', () => {
  it('Deve retornar 3 quando receber 1 e 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('Deve retornar 75 quando receber 50 e 25', () => {
    expect(sum(50, 25)).toBe(75);
  });
  it('Verifica se é jogado um erro caso um dos parâmetros seja diferente de um número', () => {
    expect(() => sum(50, '1')).toThrow(Error);
    expect(() => sum('test', 1)).toThrow(Error);
    expect(() => sum('test', '1')).toThrow(Error);
    expect(() => sum(1, 'test')).toThrow("parameters must be numbers");
  });
});
