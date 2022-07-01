const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const buttonEraser = document.getElementById('apaga-tudo');
const buttonFinished = document.getElementById('remover-finalizados');
const buttonSave = document.getElementById('salvar-tarefas');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
const buttonSelectedRemove = document.getElementById('remover-selecionado');
const list = document.getElementById('lista-tarefas');

let itensNumbers = 0;

let itens = [];

function cleanBackGround(value2) {
  const resetBackGround = value2;
  resetBackGround.style.backgroundColor = '';
}

function cleanItemSelected() {
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].className.includes('selected')) {
      list.children[index].classList.remove('selected');
      cleanBackGround(list.children[index]);
    }
  }
}

function changeBgColor(value) {
  const currentItem = value;
  cleanItemSelected();
  currentItem.target.classList.add('selected');
  currentItem.target.style.backgroundColor = 'grey';
}

function lineThrough(value3) {
  const currentItem = value3;
  if (currentItem.target.className.includes('completed')) {
    currentItem.target.classList.remove('completed');
  } else {
    currentItem.target.classList.add('completed');
  }
}

function addEventToItem(item) {
  item.addEventListener('click', changeBgColor);
  item.addEventListener('dblclick', lineThrough);
}

function returnListItens() {
  for (let index = 0; index < localStorage.length; index += 1) {
    const createListItem = document.createElement('li');
    const recoverObject = JSON.parse(localStorage.getItem(index));
    createListItem.innerText = recoverObject.value;
    createListItem.className = recoverObject.class;
    itens.push(recoverObject.value);
    list.appendChild(createListItem);
    itensNumbers += 1;
    addEventToItem(createListItem);
  }
}

window.onload = function initPage() {
  if (localStorage.length > 0) {
    returnListItens();
  }
};

function saveItens() {
  localStorage.clear();
  for (let index = 0; index < itensNumbers; index += 1) {
    const itemObject = {
      value: '',
      class: '',
    };
    itemObject.value = list.children[index].innerText;

    if (list.children[index].className.includes('completed')) {
      itemObject.class = 'completed';
    } else {
      itemObject.class = '';
    }
    localStorage.setItem(index, JSON.stringify(itemObject));
  }
}

function addListItens(itemValue) {
  const createListItem = document.createElement('li');
  createListItem.innerText = itemValue;
  itens.push(itemValue);
  list.appendChild(createListItem);
  itensNumbers += 1;
  addEventToItem(createListItem);
}

function getInputValue() {
  const inputValue = input.value;
  addListItens(inputValue);
  input.value = '';
}

function eraseAll() {
  for (let index = itensNumbers - 1; index >= 0; index -= 1) {
    const itemToErase = list.children[index];
    list.removeChild(itemToErase);
    itens = [];
  }
  itensNumbers = 0;
}

function finishedRemover() {
  let itemToRemove;
  for (let index = itensNumbers - 1; index >= 0; index -= 1) {
    if (list.children[index].className.includes('completed')) {
      itemToRemove = list.children[index];
      itens.splice(index, 1);
      list.removeChild(itemToRemove);
      itensNumbers -= 1;
    }
  }
}

function paintBackground(value) {
  const backPaint = value;
  backPaint.style.backgroundColor = 'grey';
}

function cleanBackGroundPrevious(value) {
  const backClean = value;
  backClean.style.backgroundColor = '';
}

function selectVerify() {
  if (document.querySelector('.selected') !== null) {
    return true;
  }
  return false;
}

function moveDown() {
  if (selectVerify()) {
    const selected = document.querySelector('.selected');
    const nextItem = selected.nextSibling;
    const backUpSelected = selected.innerText;
    const backUpSelectedClass = selected.className;

    if (nextItem !== null) {
      selected.innerText = nextItem.innerText;
      selected.className = nextItem.className;
      cleanBackGroundPrevious(selected);
      nextItem.innerText = backUpSelected;
      nextItem.className = backUpSelectedClass;
      paintBackground(nextItem);
    }
  }
}

function moveUp() {
  if (selectVerify()) {
    const selected = document.querySelector('.selected');
    const previousItem = selected.previousSibling;
    const backUpSelected = selected.innerText;
    const backUpSelectedClass = selected.className;

    if (previousItem !== null) {
      selected.innerText = previousItem.innerText;
      selected.className = previousItem.className;
      cleanBackGroundPrevious(selected);
      previousItem.innerText = backUpSelected;
      previousItem.className = backUpSelectedClass;
      paintBackground(previousItem);
    }
  }
}

function removeSelected() {
  let itemToRemove;
  for (let index = itensNumbers - 1; index >= 0; index -= 1) {
    if (list.children[index].className.includes('selected')) {
      itemToRemove = list.children[index];
      itens.splice(index, 1);
      list.removeChild(itemToRemove);
      itensNumbers -= 1;
    }
  }
}

button.addEventListener('click', getInputValue);
buttonEraser.addEventListener('click', eraseAll);
buttonFinished.addEventListener('click', finishedRemover);
buttonSave.addEventListener('click', saveItens);
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);
buttonSelectedRemove.addEventListener('click', removeSelected);
