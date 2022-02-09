// Acessando conteudo HTML pela ID

const paragraph = document.getElementById('paragraph');
paragraph.style.color = 'red';
    
const title = document.getElementById('page-title');
title.innerText = 'Senhor dos Anéis';

const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.innerText = 'O melor da trilogia!';

const subtitle = document.getElementById('subtitle');
subtitle.innerText = 'O Retorno do Rei';

// Acessando conteudo HTML pela classe

const pClass = document.getElementsByClassName('p');
pClass[0].style.color = 'blue';
pClass[1].style.color = 'red';

// Acessando conteudo HTML pela tag

const subTitle = document.getElementsByTagName('h2');
subTitle[0].style.color = 'green'

// querySelector
// Usa os seletores do CSS (tag, id, class, decendencia...)
// Define a regra e a busca retorna o primeiro encotrado

// querySelectorAll
// Define a regra e a busca retorna uma lista de elementos com base nos sletores CSS




