const getSavedCartItems = (cart) => {
  const cartItens = cart;
  if (localStorage.length !== 0) {
    const itensBack = localStorage.getItem('cartItems');
    cartItens.outerHTML = itensBack;
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
