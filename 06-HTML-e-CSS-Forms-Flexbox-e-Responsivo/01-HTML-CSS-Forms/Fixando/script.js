const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// 1 - Adicione um evento ao href com preventDefault
function hrefPreventDefault(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', hrefPreventDefault);

// 2 - Adicione um evento click na checkbox com preventDefault

function checkboxPreventDefault(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', checkboxPreventDefault);

// 3 - Adicione um evento keypress no elemento input de
// forma que somente o caractere a 

function inputPreventDefault(event) {
  const key = event.key;

  if (key !== 'a') {
    event.preventDefault();
  }
}

INPUT_TEXT.addEventListener('keypress', inputPreventDefault);
