// 1) Crie uma função que receba três parâmetros e retorna uma Promise.
// - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const numbers = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      reject(new Error('Não são números'));
    }
    const result = ((num1 + num2) * num3);
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
    });
}

// 2) Escreva um código para consumir a função construída no exercício anterior.
// - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe.
// - Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
// - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

numbers(num1, num2, num3)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));

// 3) Reescreva o código do exercício anterior para que utilize async/await.
// - Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.

const callNumbers = async (num1, num2, num3) => {
  try {
    const result = await numbers(num1, num2, num3);
    console.log(`async/await - ${result}`);
  } catch (err) {
    console.log(err.message);
  }
}

callNumbers(num1, num2, num3);
