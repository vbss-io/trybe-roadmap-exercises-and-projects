const inputLoginEmail = document.querySelector('#email');
const inputLoginPassword = document.querySelector('#password');
const buttonLogin = document.querySelector('#btn-login');

const emailLogin = 'tryber@teste.com';
const passwordLogin = '123456';

function checkLogin(event) {
  if (inputLoginEmail.value === emailLogin && inputLoginPassword.value === passwordLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  event.preventDefault();
}

buttonLogin.addEventListener('click', checkLogin);

const agreement = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

function disableButton() {
  if (agreement.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

agreement.addEventListener('click', disableButton);

const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputCasa = document.querySelector('#house');

const radioOne = document.querySelector('#frontend-family');
const radioTwo = document.querySelector('#backend-family');
const radioTree = document.querySelector('#fullstack-family');
const radio = [];
const optionsValues = [];

const firstSectionForm = document.querySelector('#container1');
const secondSectionForm = document.querySelector('#second');
const thirdSectionForm = document.querySelectorAll('.third');

function cleanThirdSection() {
  for (let index = 0; index < thirdSectionForm.length; index += 1) {
    thirdSectionForm[index].style.display = 'none';
  }
}

function checkInputRadio() {
  radio.push(radioOne.checked);
  radio.push(radioTwo.checked);
  radio.push(radioTree.checked);

  const path = document.querySelector('#radio-family');

  if (radio.indexOf(true) === 0) {
    path.innerHTMLh = `Família: ${radioOne.value}`;
  }
  if (radio.indexOf(true) === 1) {
    path.innerHTML = `Família: ${radioTwo.value}`;
  }
  if (radio.indexOf(true) === 2) {
    path.innerHTML = `Família: ${radioTree.value}`;
  }
  secondSectionForm.style.display = 'none';
}

const options = document.querySelectorAll('.subject');
const gradeValue = document.querySelectorAll('.radio');
const textArea = document.querySelector('#textarea');

function printContent() {
  document.querySelector('#content-family').innerHTML = `Matérias: ${optionsValues.toString()}`;
}

function checkGrade() {
  let text = '';
  for (let index = 0; index < gradeValue.length; index += 1) {
    if (gradeValue[index].checked === true) {
      text = gradeValue[index].value;
    }
  }

  document.querySelector('#grade').innerHTML = `Avaliação: ${text}`;
}

function checkCheckBox() {
  for (let index = 0; index < options.length; index += 1) {
    if (options[index].checked === true) {
      optionsValues.push(` ${options[index].value}`);
    }
  }
  printContent();
}

function checkTextArea() {
  document.querySelector('#observacoes').innerHTML = `Observações: ${textArea.value}`;
}

function getFormsInfos(event) {
  event.preventDefault();

  const text = `Nome: ${inputName.value} ${inputLastName.value}`;
  document.querySelector('#nome-forms').innerHTML = text;
  document.querySelector('#email-forms').innerHTML = `Email: ${inputEmail.value}`;
  document.querySelector('#casa-forms').innerHTML = `Casa: ${inputCasa.value}`;
  firstSectionForm.style.display = 'none';

  checkInputRadio();
  checkCheckBox();
  cleanThirdSection();
  checkGrade();
  checkTextArea();
}

buttonSubmit.addEventListener('click', getFormsInfos);

const textarea = document.querySelector('textarea');
const counter = document.querySelector('#counter');
const max = 500;

function contador() {
  const totalChar = this.value.length;
  const rest = max - totalChar;
  counter.innerHTML = rest;
}
textarea.addEventListener('keyup', contador);
