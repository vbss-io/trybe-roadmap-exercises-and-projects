const myRemove = require('../src/myRemove');

describe('Testando função de remoção', () => {
  it('Deve retornar [1,2,3,4,6] quando receber [1,2,3,4,5,6] e valor 5', () => {
    expect(myRemove([1, 2, 3, 4, 5, 6], 5)).toEqual([1, 2, 3, 4, 6]);
  });
  it('Deve retornar [1,2,4] quando receber [1,2,3,4] e valor 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Deve retornar [1,2,3,4] quando receber [1,2,3,4] e valor 5', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});