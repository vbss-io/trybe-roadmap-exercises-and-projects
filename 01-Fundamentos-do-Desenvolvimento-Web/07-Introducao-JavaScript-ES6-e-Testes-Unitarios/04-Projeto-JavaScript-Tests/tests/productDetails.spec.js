const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Álcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Álcool gel'
      details: {
        productId: 'Álcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se productDetails retorna um array', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'mascara'))).toBeTruthy();
  });
  it('Teste se productDetails retorna um array com 2 objetos', () => {
    expect(productDetails('test', 'teste').length).toEqual(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails(1)[0]).toBe('object');
    expect(typeof productDetails(1)[1]).toBe('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    const check = (verify) => {
      if (verify[0].name !== verify[1].name) {
        return false;
      }
      return true;
    };
    expect(check(productDetails('test', 'test2'))).toBeFalsy();
  });
  it('Teste se os dois productIds terminam com 123', () => {
    expect(productDetails('test', 'test2')[0].details.productId).toContain('123');
    expect(productDetails('test', 'test2')[1].details.productId).toContain('123');
  });
});
