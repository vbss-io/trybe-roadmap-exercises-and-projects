const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => new Error('Error'));

  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
