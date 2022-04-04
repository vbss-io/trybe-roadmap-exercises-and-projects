// Conversor de numeros romanos
let romanNumbers = {
 I: 1,
 V: 5,
 X: 10,
 L: 50,
 C: 100,
 D: 500,
 M: 1000
}

function romanSum(romanConverted) {
 let romanSum = 0;

 for (let index = 0; index < romanConverted.length; index += 1) {
  romanSum += romanConverted[index];
 }

 return romanSum;
}

function romanCheckSignal(romanSignalConverted) {
 for (let index = 1; index <= romanSignalConverted.length; index += 1) {
  if (romanSignalConverted[index] > romanSignalConverted[index - 1]) {
   romanSignalConverted[index - 1] *= -1;
  }
 }
 return romanSignalConverted;
}

function romanConverter(string) {
 let romanConverted = [];
 let romanSignalConverted;

 for (let index = 0; index < string.length; index += 1) {
  for (let key in romanNumbers) {
   if (string[index] === key) {
    romanConverted.push(romanNumbers[key]);
   }
  }
 }

 romanSignalConverted = romanCheckSignal(romanConverted);
 return romanSum(romanSignalConverted);

}

// let string = 'LXXXVIII';

// console.log(romanConverter(string));

// Percorra o vetor e retorne apenas os numeros pares
function arrayOfNumbers(vector) {
 let pairs = [];

 for (let index = 0; index < vector.length; index += 1) {
  if (vector[index].length > 0) {
   for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
    if (vector[index][index2] % 2 === 0) {
     pairs.push(vector[index][index2]);
    }
   }
  } else {
   if (vector[index] % 2 === 0) {
    pairs.push(vector[index]);
   }
  }
 }
 return 'pares: ' + pairs;

}

// let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// console.log(arrayOfNumbers(vector));

// Contar quantas frutas de cada existe na cesta
function basketCounter(basket) {
 let currentFruit;
 let fruitObject = {};
 let fruitCounter;


 for (let index = 0; index < basket.length; index += 1) {
  fruitCounter = 0;
  for (let index2 = 0; index2 <= basket.length; index2 += 1) {
   if (basket[index2] === basket[index]) {
    fruitCounter += 1;
    currentFruit = basket[index];
   }
  }
  fruitObject[currentFruit] = fruitCounter;
 }

 return fruitObject;
}

const basket = [
 'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
 'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
 'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
 'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
 'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
 'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
 'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
 'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
 'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
 'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
 'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
 'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
 'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
 'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
 'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
 'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
 'Banana', 'Pera', 'Abacate', 'Uva',
];

// console.log(basketCounter(basket));

// Usando o objeto abaixo
let moradores = {
 blocoUm: [{
   nome: 'Luiza',
   sobrenome: 'Guimarães',
   andar: 10,
   apartamento: 1005,
  },
  {
   nome: 'William',
   sobrenome: 'Albuquerque',
   andar: 5,
   apartamento: 502,
  },
 ],
 blocoDois: [{
   nome: 'Murilo',
   sobrenome: 'Ferraz',
   andar: 8,
   apartamento: 804,
  },
  {
   nome: 'Zoey',
   sobrenome: 'Brooks',
   andar: 1,
   apartamento: 101,
  },
 ],
};

// Acessar chaves nome, sobrenome, andar e apartamento do ultimo morador do bloco dois

function lastResidentBlock2(moradores) {
 let nome;
 let sobrenome;
 let andar;
 let apartamento;

 for (let key in moradores) {
  for (let index = 0; index < moradores[key].length; index += 1) {
   if (index === moradores[key].length - 1) {
    nome = moradores[key][index]['nome'];
    sobrenome = moradores[key][index]['sobrenome'];
    andar = moradores[key][index]['andar'];
    apartamento = moradores[key][index]['apartamento'];
   }
  }
 }

 return `O morador do bloco 2 de nome ${nome} ${sobrenome} mora no ${andar} andar, apartamento ${apartamento}.`;
}

// console.log(lastResidentBlock2(moradores));

// Acessar nome e sobrenome dos moradores do bloco 1 e 2


function nameResidents(moradores) {

 for (let key in moradores) {

  if (key === 'blocoUm') {
   console.log('Bloco 1:');
  } else {
   console.log('Bloco 2:');
  }

  for (let index = 0; index < moradores[key].length; index += 1) {
   console.log(moradores[key][index]['nome'] + ' ' + moradores[key][index]['sobrenome']);
  }
 }

 return true;
}

//nameResidents(moradores);