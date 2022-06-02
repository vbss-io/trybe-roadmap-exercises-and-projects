// Exercício 1 - Retornar o fatorial

let number = 10;
let factorial = 1;

for (let index = 1; index <= number; index += 1) {
  factorial *= index;
}

console.log(factorial);

// Exercício 2 - Inverter a palavra

let word = "banana";
let wordInv = "";

for (let index = word.length - 1; index >= 0; index -= 1) {
  wordInv += word[index];
}

console.log("Original: " + word);
console.log("Invertida: " + wordInv);

// Exercício 3 - Retorne a maior e menor palavra do array

let array = ["java", "javascript", "python", "html", "css"];
let wordBig = array[0];
let wordSmall = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > wordBig.length) {
    wordBig = array[index];
  } else if (array[index].length < wordSmall.length) {
    wordSmall = array[index];
  }
}

console.log("Maior palavra do array: " + wordBig);
console.log("Menor palavra do array: " + wordSmall);

// Exercício 4 - Retorne o maior numero primo entre 0 e 50
// Dividido por 1 e ele mesmo

let numberBig = 2;

for (let index = 0; index <= 50; index += 1) {
  let prime = true;
  for (let index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 === 0) {
      prime = false;
    }
  }
  if (prime === true) {
    numberBig = index;
  }
}

console.log(numberBig);
