require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  const arg = 'computador';
  it(`1.1 - Teste se fetchProducts é uma função.`, () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it(`1.2 - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada.`, async() => {
    await fetchProducts(arg);
    expect(fetch).toHaveBeenCalled();
  });
  it(`1.3 - Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint
  "https://api.mercadolibre.com/sites/MLB/search?q=computador"`, async() => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    await fetchProducts(arg);
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it(`1.4 - Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto
  computadorSearch, que já está importado no arquivo.`, async() => {
    const products = await fetchProducts(arg);
    expect(products).toBe(computadorSearch);
  });
  it(`1.5 - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.
  Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.`, async() => {
    const fail = await fetchProducts();
    expect(fail).toEqual(new Error('Error'));
  });
});
