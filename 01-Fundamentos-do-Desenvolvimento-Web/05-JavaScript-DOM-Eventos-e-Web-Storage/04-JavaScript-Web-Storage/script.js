const configBtn = document.getElementById('show-config');
const configs = document.getElementById('configs');

// Pegar dados do localStorage

function getSavedConfigs() {
  console.log(localStorage);
  if (localStorage !== undefined) {
    text.style.backgroundColor = localStorage.bg;
    text.style.color = localStorage.txtColor;
    textContent.style.fontSize = localStorage.txtSize;
    textContent.style.lineHeight = localStorage.spaceLine;
  }
}

configs.style.visibility = 'hidden';

function showConfigs() {
  console.log((configs.style.visibility));
  if (configs.style.visibility === 'hidden') {
    configs.style.visibility = 'visible';
  } else {
    configs.style.visibility = 'hidden';
  }
}

configBtn.addEventListener('click', showConfigs);

// 1 - Alterar cor de fundo do texto

const inputBg = document.querySelector('.bg-input');
const buttonBg = document.querySelector('.bg-btn');
const text = document.getElementById('text');
const textContent = document.getElementById('text-content')

function changeBg() {
  const color = inputBg.value;
  text.style.backgroundColor = color;
  localStorage.setItem('bg', color);
}

buttonBg.addEventListener('click', changeBg);

// 2 - Alterar cor do texto

const inputTextColor = document.querySelector('.txt-color-input');
const buttonTextColor = document.querySelector('.txt-color-btn');

function changeTxtColor() {
  const color = inputTextColor.value;
  text.style.color = color;
  localStorage.setItem('txtColor', color);
}

buttonTextColor.addEventListener('click', changeTxtColor);

// 3 - Alterar fonte do texto

const inputSizeFont = document.querySelector('.font-size-input');
const buttonSizeFont = document.querySelector('.font-size-btn');

function changeFontSize() {
  const size = `${inputSizeFont.value}px`;
  if (inputSizeFont.value <= 0) {
    alert('Tamanho de fonte inválido!');
    inputSizeFont.value = '';
  } else {
    textContent.style.fontSize = size;
    localStorage.setItem('txtSize', size);
    inputSizeFont.value = '';
  }
}
buttonSizeFont.addEventListener('click', changeFontSize);

// 4 - Alterar espaçamento do texto

const inputLineSpace = document.querySelector('.line-space-input');
const buttonLineSpace = document.querySelector('.line-space-btn');

function changeLineSpace() {
  const size = `${inputLineSpace.value}px`;
  if (inputLineSpace.value <= 0) {
    alert('Tamanho inválido!');
    inputLineSpace.value = '';
  } else {
    textContent.style.lineHeight = size;
    localStorage.setItem('spaceLine', size);
    inputLineSpace.value = '';
  }
}
buttonLineSpace.addEventListener('click', changeLineSpace);















getSavedConfigs();
