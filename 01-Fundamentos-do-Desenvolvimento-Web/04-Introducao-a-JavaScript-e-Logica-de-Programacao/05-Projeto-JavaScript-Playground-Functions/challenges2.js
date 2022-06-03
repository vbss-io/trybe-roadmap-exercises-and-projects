// Desafio 11 - Função que recebe um array de 11 números e retorna um numero de telefone
function generatePhoneNumber(array) {
  let numberCount = 0;
  let phoneNumber = '';

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        numberCount += 1;
        if (numberCount >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    numberCount = 0;
    if (index === 0) {
      phoneNumber += '(';
    } else if (index === 2) {
      phoneNumber += ') ';
    } else if (index === 7) {
      phoneNumber += '-';
    }
    phoneNumber += array[index];
  }

  return phoneNumber;
}

// Desafio 12 - Função de condição da existência de um triângulo
function triangleCheck(lineA, lineB, lineC) {
  let diferenceBC = Math.abs(lineB - lineC);
  let diferenceAC = Math.abs(lineA - lineC);
  let diferenceAB = Math.abs(lineA - lineB);

  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  if (lineA < diferenceBC || lineB < diferenceAC || lineC < diferenceAB) {
    return false;
  }
  return true;
}

// Desafio 13 - Função de boas vindas ao Bar da Trybe
function hydrate(string) {
  let numbersInString = [];
  let sumNumbers = 0;
  let message = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
    // isNaN() consultado no google e baseado: developer.mozilla.org
    } else if (!Number.isNaN(Number(string[index]))) {
      numbersInString.push(parseInt(string[index], 10));
    }
  }
  for (let index = 0; index < numbersInString.length; index += 1) {
    sumNumbers += numbersInString[index];
  }
  if (sumNumbers > 1) {
    return message.concat(sumNumbers, ' copos de água');
  }
  return message.concat(sumNumbers, ' copo de água');
}

export default {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
