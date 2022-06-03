// Desafio 1 - Retorne true se ambos valores forem true, false se um deles for false
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Função que calcula a área de um triângulo
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3 - Função que divide a frase
function splitSentence(string) {
  let splitString = string.split('');
  let splitArray = [];
  let currentString = '';

  for (let index = 0; index <= splitString.length; index += 1) {
    if (splitString[index] === ' ' || index === splitString.length) {
      splitArray.push(currentString);
      currentString = '';
    } else {
      currentString += splitString[index];
    }
  }

  return splitArray;
}

// Desafio 4 - Função que retorna o [ultimo item, primeiro item] de um array
function concatName(stringArray) {
  let arrayFirstLast = [];
  let firstName;
  let lastName;
  let string = '';

  for (let index = stringArray.length - 1; index >= 0; index -= 1) {
    if (index === stringArray.length - 1 || index === 0) {
      arrayFirstLast.push(stringArray[index]);
    }
  }

  [firstName, lastName] = arrayFirstLast;
  return string.concat(firstName, ', ', lastName);
}

// Desafio 5 - Calcula a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  let score = (wins * 3) + (ties * 1);

  return score;
}

// Desafio 6 - Função que calcula a repetição do maior número
function highestVerification(currentIndexValue, bigger) {
  if (currentIndexValue > bigger) {
    return currentIndexValue;
  }

  return bigger;
}

function equalVerification(currentIndexValue, bigger, currentCount) {
  if (bigger === currentIndexValue) {
    currentCount += 1;
    return currentCount;
  }
  return currentCount;
}

function highestCount(array) {
  let bigger = array[0];
  let countBigger = 0;
  let currentCount;

  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      bigger = highestVerification(array[index], bigger);
      currentCount = equalVerification(array[index2], bigger, currentCount);
      countBigger = currentCount;
    }
    currentCount = 0;
  }

  return countBigger;
}

// Desafio 7 - Função de Caça Ratos, de acordo com a posição do rato e dos gatos, retorna o felino que alcançara o rato primeiro
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;

  distanceCat1 = Math.abs(cat1 - mouse);
  console.log(distanceCat1);

  distanceCat2 = Math.abs(cat2 - mouse);
  console.log(distanceCat2);

  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  }
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Função FizzBuzz
function fizzBuzzVerification(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'fizzBuzz';
  }
  if (value % 3 === 0) {
    return 'fizz';
  }
  if (value % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let fizzBuzzArray = [];

  for (let index = 0; index < array.length; index += 1) {
    fizzBuzzArray.push(fizzBuzzVerification(array[index]));
  }

  return fizzBuzzArray;
}

// Desafio 9 - Função que codifica e decodifica
function encode(string) {
  let message = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      message += '1';
    } else if (string[index] === 'e') {
      message += '2';
    } else if (string[index] === 'i') {
      message += '3';
    } else if (string[index] === 'o') {
      message += '4';
    } else if (string[index] === 'u') {
      message += '5';
    } else {
      message += string[index];
    }
  }
  return message;
}

function decode(string) {
  let message = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      message += 'a';
    } else if (string[index] === '2') {
      message += 'e';
    } else if (string[index] === '3') {
      message += 'i';
    } else if (string[index] === '4') {
      message += 'o';
    } else if (string[index] === '5') {
      message += 'u';
    } else {
      message += string[index];
    }
  }
  return message;
}

// Desafio 10 - Função de Lista de Tecnologias
function techList(array, name) {
  let orderedTechs = array.sort();
  let techObject;
  let techArray = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < array.length; index += 1) {
    techObject = {
      tech: orderedTechs[index],
      name,
    };
    techArray.push(techObject);
  }

  return techArray;
}

export default {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
