// //Bubble Sort
// //Ordem crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
 for (let index2 = 0; index2 < index; index2 += 1) {
  if (numbers[index] < numbers[index2]) {
   let position = numbers[index];
   numbers[index] = numbers[index2];
   numbers[index2] = position;
  }
 }
}

console.log(numbers);

// //Ordem decrescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
 for (let index2 = 0; index2 < index; index2 += 1) {
  if (numbers[index] > numbers[index2]) {
   let position = numbers[index];
   numbers[index] = numbers[index2];
   numbers[index2] = position;
  }
 }
}

console.log(numbers);

//Multiplicando o o valor atual pelo proximo
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 2];
let newNumbers = [];

for (let index = 1; index <= numbers.length; index += 1) {
 for (let index2 = 0; index2 < index; index2 += 1) {
  if (index === numbers.length && index2 === numbers.length - 1) {
   newNumbers.push(numbers[index2] * 2);
  } else if (index === index2 + 1) {
   newNumbers.push(numbers[index2] * numbers[index]);
  }
 }
}

console.log(newNumbers);