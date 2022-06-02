// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.querySelector(".btn");
const spam = document.querySelector(".count");
const reset = document.querySelector(".reset");

let click = 0;

const countClicks = () => {
  click += 1;
  spam.innerHTML = `count: ${click}`;
};

const resetCount = () => {
  click = 0;
  spam.innerHTML = `count: ${click}`;
};

button.addEventListener("click", countClicks);
reset.addEventListener("click", resetCount);
