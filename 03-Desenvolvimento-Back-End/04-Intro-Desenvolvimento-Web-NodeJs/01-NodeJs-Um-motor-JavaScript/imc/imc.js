const readline = require('readline-sync');

console.log('Olá, bem-vindo a Calculadora de IMC!');

const altura = readline.questionFloat('Digite sua altura (em metros): ');
const peso = readline.questionFloat('Digite seu peso (em quilos): ');

const imc = (peso / (Math.pow(altura, 2))).toFixed(1);

console.log(`Seu IMC é ${imc}`);

switch (true) {
  case imc < 18.5:
    console.log('Você está abaixo do peso.');
    break;
  case imc >= 18.5 && imc <= 24.9:
    console.log('Você está no peso ideal.');
    break;
  case imc >= 25 && imc <= 29.9:
    console.log('Você está com sobrepeso.');
    break;
  case imc >= 30 && imc <= 34.9:
    console.log('Você está com obesidade grau I.');
    break;
  case imc >= 35 && imc <= 39.9:
    console.log('Você está com obesidade grau II.');
    break;
  case imc >= 40:
    console.log('Você está com obesidade grau III.');
    break;
  default:
    console.log('Erro');
}
