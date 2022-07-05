const sectionItens = document.querySelector('.items');
const emptyButton = document.querySelector('.empty-cart');
let cartItens = document.querySelector('.cart__items');
const price = document.querySelector('.total-price');
let priceCart = 0;

const priceUpdate = async (value) => {
  priceCart += value;
  price.innerText = `${priceCart}`;
  localStorage.setItem('price', priceCart);
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const getPrice = (string) => {
  const stringSplit = string.split(' ');
  // Alternativa pra obter apenas números pesquisado no google (replace)
  const value = parseFloat(stringSplit[stringSplit.length - 1].replace(/[^0-9]/, ''), 10);
  priceUpdate(-value);
};

function cartItemClickListener(event) {
  cartItens.removeChild(event.target);
  getPrice(event.target.innerText);
  return saveCartItems(cartItens);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  priceUpdate(salePrice);
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const getProduct = async (productObject) => {
  const product = await fetchItem(productObject);
  const productInfo = {
    sku: product.id,
    name: product.title,
    salePrice: product.price,
  };

  cartItens.appendChild(createCartItemElement(productInfo));
  saveCartItems(cartItens);
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const addToCart = (event) => {
  const item = getSkuFromProductItem(event.target.parentNode);
  return getProduct(item);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', addToCart);

  return section;
}

const removeLoading = () => {
  const loading = document.querySelector('.loading');
  sectionItens.removeChild(loading);
};

const productsArray = async () => {
  const array = (await fetchProducts('computador')).results;
  const itens = array.map((elementMap) => ({
    sku: elementMap.id,
    name: elementMap.title,
    image: elementMap.thumbnail,
  }));

  await removeLoading();
  itens.forEach((element) => {
    sectionItens.appendChild(createProductItemElement(element));
  });
};

const getLocalStorage = () => {
  console.log(cartItens);
  getSavedCartItems(cartItens);
  cartItens = document.querySelector('.cart__items');
  for (let index = 0; index < cartItens.children.length; index += 1) {
    cartItens.children[index].addEventListener('click', cartItemClickListener);
  }
  const priceCartBackup = localStorage.getItem('price');
  if (priceCartBackup !== null) {
    priceCart = parseFloat(priceCartBackup);
    price.innerText = `${priceCart}`;
  }
};

const cleanCart = () => {
  cartItens.innerHTML = '';
  price.innerText = '$0,00';
  priceCart = 0;
  localStorage.removeItem('cartItems');
  localStorage.removeItem('price');  
};

emptyButton.addEventListener('click', cleanCart);

const insertLoading = () => {
  const loading = document.createElement('spam');
  loading.className = 'loading';
  loading.innerText = 'loading...';
  sectionItens.appendChild(loading);
};

window.onload = () => {
  insertLoading();
  productsArray();
  getLocalStorage();
};
