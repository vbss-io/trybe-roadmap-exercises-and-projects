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

module.exports = {
  encode,
  decode
}
