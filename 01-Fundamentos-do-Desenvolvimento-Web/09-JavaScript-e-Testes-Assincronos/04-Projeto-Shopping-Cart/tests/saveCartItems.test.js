const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  const arg = '<li>Item</li>';
  const olHTML = document.createElement('ol');
  olHTML.innerHTML = arg;
  it(`4.1 - Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;`, () => {
    saveCartItems(olHTML);
  expect(localStorage.setItem).toHaveBeenCalled();    
  });
  it(`4.2 - Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros,
  sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para saveCartItems.`, () => {
    saveCartItems(olHTML);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', olHTML.outerHTML);
  });
});
