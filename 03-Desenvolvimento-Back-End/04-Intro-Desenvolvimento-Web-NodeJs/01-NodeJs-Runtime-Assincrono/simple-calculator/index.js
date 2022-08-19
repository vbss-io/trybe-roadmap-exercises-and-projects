const readline = require('readline-sync');
const { sum, sub, mult, div } = require('./operacoes');

const num1 = readline.questionInt('Digite um numero: ');
const operacao = readline.question('Qual a operacao desejada? (+, -, *, /): ');
const num2 = readline.questionInt('Digite outro numero: ');

switch (operacao) {
    case '+':
        console.log(`${num1} + ${num2} = ${sum(num1, num2)}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${sub(num1, num2)}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${mult(num1, num2)}`);
        break;
    case '/':
        console.log(`${num1} / ${num2} = ${div(num1, num2)}`);
        break;
    default:
        console.log('Operação inválida!');
        break;
}
