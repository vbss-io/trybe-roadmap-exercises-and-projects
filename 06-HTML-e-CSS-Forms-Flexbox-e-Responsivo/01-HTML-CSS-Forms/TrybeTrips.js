const buttonSubmit = document.querySelector('#submit');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputTerms = document.querySelector('#termos');

function buttonPreventDefault(event) {
  event.preventDefault();

  if (inputName.value.length < 10 || inputName.value.length > 40) {
    alert('Nome Inválido');
  } else if (inputEmail.value.length < 10 || inputEmail.value.length > 40) {
    alert('E-mail Inválido')
  } else if (!inputTerms.checked) {
    alert('Acordo de uso de imagens obrigatório!')
  } else {
    alert('Enviado com Sucesso!');
  }
}

buttonSubmit.addEventListener('click', buttonPreventDefault);
