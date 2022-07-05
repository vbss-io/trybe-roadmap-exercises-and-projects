const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  const arg = '<li>Item</li>';
  const olHTML = document.createElement('ol');
  olHTML.innerHTML = arg;
  it(`4.1 - Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;`, () => {
    getSavedCartItems(olHTML);
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it(`4.2 - Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o 'cartItems' como parâmetro.`, () => {
    getSavedCartItems(olHTML);
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
