// Acessando conteúdo HTML pela ID

const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const title = document.getElementById("page-title");
title.innerText = "Senhor dos Anéis";

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText = "O melhor da trilogia!";

const subtitle = document.getElementById("subtitle");
subtitle.innerText = "O Retorno do Rei";

// Acessando conteúdo HTML pela classe

const pClass = document.getElementsByClassName("p");
pClass[0].style.color = "blue";
pClass[1].style.color = "red";

// Acessando conteúdo HTML pela tag

const subTitle = document.getElementsByTagName("h2");
subTitle[0].style.color = "green";

// querySelector
// Usa os seletores do CSS (tag, id, class, dependência...)
// Define a regra e a busca retorna o primeiro encontrado

// querySelectorAll
// Define a regra e a busca retorna uma lista de elementos com base nos seletores CSS
