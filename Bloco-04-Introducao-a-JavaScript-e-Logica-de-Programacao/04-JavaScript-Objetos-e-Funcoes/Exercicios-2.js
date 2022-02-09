//Exercicio 1 -Retorne se a palavra e uum palindromo
function palindromoOrNot (string) {
    let stringReverse = '';
    for (let index = string.length-1; index >= 0; index -= 1) {
        stringReverse += string[index];
    }
    if (string === stringReverse) {
        return true;
    } else {
        return false;
    }
}

function palindromoOrNotSplitReverseJoin (string) {
    if (string === string.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

//let word = 'arara';

//console.log(palindromoOrNot(word))
//console.log(palindromoOrNotSplitReverseJoin(word));

//Exercicio 2 - Funcao que retorna o indice do maior vallor no array
function biggerIndex (array) {
    let bigger = array[0];
    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > bigger) {
            bigger = array[index];
        }
    }
    return array.indexOf(bigger);
}

//let array = [2, 3, 6, 7, 10, 1];

//console.log(biggerIndex(array));

//Exercicio 3 - Funcao que retorna o indice de menor vallor no array
function smallestIndex (array) {
    let smallest = array[0];
    for (let index = 1; index < array.length; index += 1) {
        if (array[index] < smallest) {
            smallest = array[index];
        }
    }
    return array.indexOf(smallest);
}

//let array = [2, 4, 6, 7, 10, 0, -3];

//console.log(smallestIndex(array));

//Exercicio 4 - Retorne a string com mais caracteres
function biggerWord (array) {

    let bigger = array[0];

    for (let index = 1; index < array.length; index += 1) {
        if (array[index].length > bigger.length) {
            bigger = array[index];
        }
    }

    return bigger;
}

//let array = ['jose', 'lucas', 'nadia', 'fernanda', 'cairo', 'joana'];

//console.log(biggerWord(array));

//Exercicio 5 - Retorne o inteiro que mais se repete no array
function countInt (array) {

    let biggerCount = 0;
    let currentCount;
    let number;
    for (let index = 0; index < array.length; index += 1) {
        currentCount = 0;
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index] === array[index2]) {
                currentCount += 1;
                if (currentCount > biggerCount) {
                    number = array[index];
                    biggerCount = currentCount;
                }
            }
        }
    }
    return number;
}


//let array = [2, 3, 2, 5, 8, 2, 3];

//console.log(countInt(array));

//Exercicio 6 - Receba numero natural N e retorne o somatorio de 1 ate N.
function sumNumber (N) {

    let sum = 0;
    for (let index = 0; index <= N; index += 1) {
        sum += index;
    }
    return sum;
}

//let N = 10;

//console.log(sumNumber(N));

//Exercicio 7 - Verificar se a string ending e o final da string word - considere string end sempre menor que a string word

function endStringVerification (word, ending) {
    let compare = true;
    let wordVerification = word.length - 1;

    for (let index = ending.length-1; index >= 0; index -= 1, wordVerification -= 1) {
            for (let index2 = wordVerification; index2 > wordVerification - 1; index2 -= 1) {
                if (ending[index] === word[index2]) {
                    compare = true;
                } else {
                    return false;
                }
            }

    }

    return compare;
}

//let word = 'joaofernando';
//let ending = 'nando';

//console.log(endStringVerification(word, ending));












