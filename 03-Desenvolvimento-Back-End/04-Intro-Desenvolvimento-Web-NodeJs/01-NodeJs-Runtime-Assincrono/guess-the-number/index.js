const readline = require('readline-sync');

const randomNumber = () => Math.floor(Math.random() * 10) + 1;

while (true) {
  const number = randomNumber();
  const guess = readline.questionInt('Digite um numero: ');

  if (guess === number) {
    console.log('Você acertou!');
  } else {
    console.log(`Você errou! O numero era ${number}`);
  }

  const playAgain = readline.question('Deseja jogar novamente? (s/n) ');
  if (playAgain === 'n') {
    break;
  }
}
