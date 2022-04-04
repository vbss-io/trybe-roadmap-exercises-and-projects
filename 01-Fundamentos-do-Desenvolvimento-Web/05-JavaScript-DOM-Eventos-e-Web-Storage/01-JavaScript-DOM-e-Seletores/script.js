// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function allPConsoleLog(element) {
 for (let index = 0; index < element.length; index += 1) {
  console.log(element[index].innerHTML);
 }

 return true;
}

function pCapslock(element) {
 return element.innerText = element.innerText.toUpperCase();
}

function pTextChange(element) {
 let message = 'Nem todos que vagueiam estão perdidos.';

 return element.innerText = message;
}

function pTextChangeName(element) {
 let message = 'J.R.R. Tolkien';

 return element.innerText = message;
}

function mainContentColorChange(element) {
 let color = 'rgb(76,164,109)';

 return element.style.backgroundColor = color;
}

function centerContentColorChange(element) {
 let color = 'white';

 return element.style.backgroundColor = color;
}

function h1Correction(element) {
 let correction = 'Exercício 5.1 - JavaScript';

 return element.innerText = correction;
}

const mainContent = document.getElementsByClassName('main-content');
const p = document.getElementsByTagName('p');
const centerContent = document.getElementsByClassName('center-content');
const h1 = document.getElementsByClassName('title');

pTextChange(p[0]);
pTextChangeName(p[2]);
mainContentColorChange(mainContent[0]);
centerContentColorChange(centerContent[0]);
h1Correction(h1[0]);
pCapslock(p[0]);
allPConsoleLog(p);