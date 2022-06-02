//Exercícios 1 - Imprimir valores array usando for
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//Exercícios 2 - Some todos os valores contidos
let numbersTwo = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result = result + numbers[index];
}

console.log("Resultado soma: ", result);

//Exercícios 3 - Media aritmética do array
let numbersThree = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultThree = 0;

for (let index = 0; index < numbersThree.length; index += 1) {
  resultThree = resultThree + numbersThree[index];
}

average = resultThree / numbersThree.length;
console.log("Média: ", average);

//Exercícios 4 - Media maior ou menos ue 20
if (average > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}

//Exercícios 5 - Descubra o maior valor do array com for
let numbersFour = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;

for (let index = 0; index < numbersFour.length; index += 1) {
  if (numbersFour[index] > higherNumber) {
    higherNumber = numbersFour[index];
  }
}

console.log("Maior número: ", higherNumber);

//Exercícios 6 - Quantos valores impares existem no array
let numbersSix = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let flag = 0;

for (let index = 0; index < numbersSix.length; index += 1) {
  if (numbersSix[index] % 2 === 1) {
    flag += 1;
  }
}

if (flag === 0) {
  console.log("Nenhum número ímpar");
} else {
  console.log("Números ímpares: ", flag);
}

//Exercícios 7 - Descubra o menor valor do array com for
let numbersSeven = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbersSeven[0];

for (let index = 0; index < numbersSeven.length; index += 1) {
  if (numbersSeven[index] < smallestNumber) {
    smallestNumber = numbersSeven[index];
  }
}

console.log("Maior número: ", smallestNumber);

//Exercícios 8 - Crie um array de 1 a 25 usando for
let numbersEight = [];

for (let index = 1; index < 26; index += 1) {
  numbersEight.push(index);
}

console.log(numbersEight);

//Exercícios 9 - Imprima a divisão por 2 de cada elemento do array anterior
for (let index = 0; index < numbersNine.length; index += 1) {
  console.log(numbersNine[index] / 2);
}
