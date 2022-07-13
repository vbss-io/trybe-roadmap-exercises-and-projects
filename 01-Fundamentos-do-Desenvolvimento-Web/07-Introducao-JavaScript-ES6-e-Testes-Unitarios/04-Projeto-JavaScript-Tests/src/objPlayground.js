/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.
  Os resultados das divisões devem sempre ser arredondados para baixo.
  
  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 1, sub: 0 }
  
  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
*/

const calculator = (number1, number2) => {
  const n1 = number1;
  const n2 = number2;

  let result = {
    sum: 0,
    mult: 0,
    div: 0,
    sub: 0,
  };

  result.sum = n1 + n2;
  result.mult = n1 * n2;
  result.div = Math.floor(n1 / n2);
  result.sub = n1 - n2;

  return result;
};

const entriesConverter = (object) => {
  const obj = object;
  const result = Object.entries(obj);

  return result;
};

const valuesConverter = (object) => {
  const obj = object;
  const result = Object.values(obj);

  return result;
};

const keysConverter = (object) => {
  const obj = object;
  const result = Object.keys(obj);

  return result;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return keysConverter(object);
  }
  if (type === 'values') {
    return valuesConverter(object);
  }
  return entriesConverter(object);
};

module.exports = { calculator, arrayGenerator };
