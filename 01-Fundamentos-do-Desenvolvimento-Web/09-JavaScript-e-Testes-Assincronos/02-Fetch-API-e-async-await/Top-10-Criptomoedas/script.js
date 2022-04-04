const list = document.querySelector('.criptoList');

const coinCap = 'https://api.coincap.io/v2/assets';
const currencyRates = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';

const usdToBrl = async(priceUsd) => {
  const errorMessage = 'Error'
  const result = await fetch(currencyRates)
    .then((response) => response.json())
    .then((data) => data.usd.brl)
    .catch(() => errorMessage);

  if (result === errorMessage) {
    return result;
  }
  return (result * priceUsd).toFixed(2);
};

const append = async(coin) => {
  const p = document.createElement('p');
  const priceUsd = parseFloat(coin.priceUsd).toFixed(2);

  const priceBrl = await usdToBrl(priceUsd);

  p.innerHTML = `<strong>${coin.name}</strong> (${coin.symbol}): U$ ${priceUsd}, R$ ${priceBrl}`;
  return list.appendChild(p);
};

const fetchCoin = async() => {
  const myObject = {
    method: 'GET',
  }
  const result = await fetch(coinCap, myObject)
    .then((response) => response.json())
    .then((coin) => coin.data)
    .catch((error) => `Something is wrong! \n${error} \nTry reload!`);

  return result.filter((coin) => parseInt(coin.rank) < 10).forEach(element => {
    append(element);
  });
};

window.onload = () => fetchCoin();
