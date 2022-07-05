const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => new Error('Error'));
    
    return result;  
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
