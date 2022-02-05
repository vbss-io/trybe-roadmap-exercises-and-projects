//Exercicio 1 - Imprimir valores array usando for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//Exercicio 2 - Some todos os valores contidos
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result = result + numbers[index]
}

console.log('Resultado soma: ', result);

//Exercicio 3 - Media aritmetica do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result = result + numbers[index];
}

average = result/numbers.length;
console.log('Média: ', average);

//Exercicio 4 - Media maior ou menos ue 20
if (average > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menor ou igual a 20.');
}

//Exercicio 5 - Descubra o maior valor do array com for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}

console.log('Maior número: ', higherNumber);

//Exercicio 6 - Quantos valores impares existem no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [2, 4, 6, 8, 10];
let flag = 0;


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index]%2 === 1) {
        flag += 1;
    }
}

if (flag === 0) {
    console.log('Nenhum número ímpar');
} else {
    console.log('Números ímpares: ', flag);
}

//Exercicio 7 - Descubra o menor valor do array com for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}

console.log('Maior número: ', smallestNumber);

//Exercicio 8 - Crie um array de 1 a 25 usando for
let numbers = [];

for (let index = 1; index < 26; index += 1) {
    numbers.push(index);
}

console.log(numbers);

//Exercicio 9 - Imprima a divisao por 2 de cada elemento do array anterior
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]/2);
}
