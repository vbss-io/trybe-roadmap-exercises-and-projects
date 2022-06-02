// Adicione a tag h1 com o texto:
// Exercício 5.2 - JavaScript DOM como filho da tag body

let body = document.querySelector("body");
let h1Text = document.createElement("h1");
h1Text.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(h1Text);

// Adicione a tag main com a classe main-content como filho da tag body

let main = document.createElement("main");
main.setAttribute("class", "main-content");
body.appendChild(main);

// Adicione a tag section com a classe center-content como filho
// da tag main criada no passo 2

let section = document.createElement("section");
section.setAttribute("class", "center-content");
main.appendChild(section);

// Adicione a tag p como filho do section criado no passo 3
// e coloque algum texto

let pTag = document.createElement("p");
pTag.innerText = "Hello World";
section.appendChild(pTag);

// Adicione a tag section com a classe left-content como
// filho da tag main criada no passo 2

let sectionLeft = document.createElement("section");
sectionLeft.setAttribute("class", "left-content");
main.appendChild(sectionLeft);

// Adicione a tag section com a classe right-content como
// filho da tag main criada no passo 2

let sectionRight = document.createElement("section");
sectionRight.setAttribute("class", "right-content");
main.appendChild(sectionRight);

// Adicione uma imagem com src configurado para o valor
// https://picsum.photos/200 e classe small-image.
// Esse elemento deve ser filho do section criado no passo 5;

let img = document.createElement("img");
img.setAttribute("class", "small-image");
img.src = "https://picsum.photos/200";
sectionLeft.appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por
// extenso, ou seja, um , dois , três , ...
// como valores da lista. Essa lista deve ser filha do section
//criado no passo 6

let liItens = [
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

let ul = document.createElement("ul");

sectionRight.appendChild(ul);

for (let index = 0; index < liItens.length; index += 1) {
  let text = liItens[index];

  let li = document.createElement("li");
  li.innerText = text;

  ul.appendChild(li);
}

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

let h3Itens = ["primeira h3", "segunda h3", "terceira h3"];

for (let index = 0; index < h3Itens.length; index += 1) {
  let textH3 = h3Itens[index];

  let h3 = document.createElement("h3");
  h3.innerText = textH3;

  main.appendChild(h3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada

h1Text.setAttribute("class", "title");

// Adicione a classe description nas 3 tags h3 criadas

let h3 = document.querySelectorAll("h3");

for (let index = 0; index < h3.length; index += 1) {
  h3[index].setAttribute("class", "description");
}

// Remova a section criado no passo 5 (aquele que possui a classe left-content ).
// Utilize a função .removeChild()

main.removeChild(sectionLeft);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ).
// Dica: para centralizar, basta configurar o margin-right: auto da section

sectionRight.style.marginRight = "auto";

// Troque a cor de fundo do elemento pai da section criada no passo 3
// (aquela que possui a classe center-content ) para a cor verde

section.style.backgroundColor = "green";

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

let li = document.querySelectorAll("li");

for (let index = 0; index < li.length; index += 1) {
  let liText;
  liText = li[index].innerText;

  if (liText === "nove" || liText === "dez") {
    ul.removeChild(li[index]);
  }
}
