const saveCartItems = (cartHtml) => {
  const item = cartHtml.outerHTML;
  return localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
