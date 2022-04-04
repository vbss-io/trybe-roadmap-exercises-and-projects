// Desafio 1 - Dado valor n, seja n > 1, imprima um quadrado de lado n

let n = 5;
let line = [];

for (let currentLine = 0; currentLine < n; currentLine += 1) {
 line[currentLine] = '';
 for (let lineCaracter = 0; lineCaracter < n; lineCaracter += 1) {
  line[currentLine] += '*'
 }
 console.log(line[currentLine]);
}

// Desafio 2 - Triangulo retangulo de base n

let n = 5;
let line = [];

for (let currentLine = 0; currentLine < n; currentLine += 1) {
 line[currentLine] = '';
 for (let lineCaracter = 0; lineCaracter <= currentLine; lineCaracter += 1) {
  line[currentLine] += '*'
 }
 console.log(line[currentLine]);
}

// Desafio 3 - Inverter o lado do retangulo

let n = 5;
let line = [];
let spaces = n;

for (let currentLine = 0; currentLine < n; currentLine += 1) {
 spaces -= 1;
 line[currentLine] = '';
 for (let lineCaracter = 0; lineCaracter < n; lineCaracter += 1) {
  if (lineCaracter >= spaces) {
   line[currentLine] += '*';
  } else {
   line[currentLine] += ' ';
  }
 }
 console.log(line[currentLine]);
}

// Desafio 4 - Retorne uma piramide com base n

let n = 11;
let line = [];
let linesNumber = Math.ceil(n / 2)
let spaces = linesNumber;
let rigth = linesNumber;
let left = linesNumber;

for (let currentLine = 0; currentLine < linesNumber; currentLine += 1) {
 rigth += 1;
 left -= 1;
 line[currentLine] = '';
 for (let lineCaracter = 1; lineCaracter <= n; lineCaracter += 1) {
  if (lineCaracter > left && lineCaracter < rigth) {
   line[currentLine] += '*';
  } else {
   line[currentLine] += ' ';
  }
 }
 console.log(line[currentLine]);
}


// Desafio 5 - Retorne uma piramide com base n e vazio no meio (considerando apenas impares)

let n = 11;
let line = [];
let linesNumber = Math.ceil(n / 2)
let spaces = linesNumber;
let rigth = linesNumber;
let left = linesNumber;

for (let currentLine = 0; currentLine < linesNumber; currentLine += 1) {

 line[currentLine] = '';
 for (let lineCaracter = 1; lineCaracter <= n; lineCaracter += 1) {
  if (lineCaracter === left && lineCaracter === rigth) {
   line[currentLine] += '*';
  } else if (lineCaracter === left || lineCaracter === rigth) {
   line[currentLine] += '*';
  } else if (currentLine === (linesNumber - 1)) {
   line[currentLine] += '*';
  } else {
   line[currentLine] += ' ';
  }
 }
 rigth += 1;
 left -= 1;

 console.log(line[currentLine]);
}

// Desafio 6 - Retorna se o numero e primo ou nao

let number = 10;
let prime = true;

for (let index = 2; index < number; index += 1) {
 if (number % index === 0) {
  prime = false;
 }
}


if (number === 1) {
 console.log('O numero ' + number + ' nao e primo.')
} else if (prime === true) {
 console.log('O numero ' + number + ' e primo.')
} else {
 console.log('O numero ' + number + ' nao e primo.')
}