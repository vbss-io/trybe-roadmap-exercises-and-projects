// Acesse o elemento elementoOndeVoceEsta.

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = ondeVoceEsta.parentElement;
pai.style.color = 'blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.Você se lembra dos vídeos da aula anterior, como fazer isso ?

let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerText = 'Adicionando texto';

// Acesse o primeiroFilho a partir de pai.

let primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

let primeiroFilho2 = ondeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção!a partir de elementoOndeVoceEsta.

let atencaoTexto = ondeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let terceiroFilho = ondeVoceEsta.nextSibling.nextSibling;

// Agora acesse o terceiroFilho a partir de pai.

let terceiroFilho2 = pai.firstElementChild.nextElementSibling.nextElementSibling;

// Crie um irmão para elementoOndeVoceEsta.

let irmaoElementoOndeVoceEsta = document.createElement('section');
pai.appendChild(irmaoElementoOndeVoceEsta);
irmaoElementoOndeVoceEsta.setAttribute('id', 'irmaoElementoOndeVoceEsta');

// Crie um filho para elementoOndeVoceEsta.

let filhoElementoOndeVoceEsta = document.createElement('section');
ondeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
filhoElementoOndeVoceEsta.setAttribute('id', 'filhoElementoOndeVoceEsta');

// Crie um filho para primeiroFilhoDoFilho.

let filhoPrimeiroFilho = document.createElement('section');
primeiroFilho.appendChild(filhoPrimeiroFilho);
filhoPrimeiroFilho.setAttribute('id', 'filhoDoPrimeiroFilho');

// A partir desse filho criado, acesse terceiroFilho.

let terceiroFilho3 = filhoPrimeiroFilho.parentNode.nextElementSibling.nextElementSibling;

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai2 = document.getElementById('pai');

for (let index = pai2.childNodes.length - 1; index >= 0; index -= 1) {
 let element = pai2.childNodes[index];

 if (element.id !== 'elementoOndeVoceEsta') {
  element.remove();
 }
}

let ondeVoceEsta2 = document.getElementById('elementoOndeVoceEsta');

for (let index = ondeVoceEsta2.childNodes.length - 1; index >= 0; index -= 1) {
 let element = ondeVoceEsta2.childNodes[index];

 if (element.id !== 'primeiroFilhoDoFilho') {
  element.remove();
 }
}