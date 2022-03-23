// 1 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

// imprime Marte depois de 4 segundos
// getPlanet();

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// 2 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte,
// gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
// imprime "Mars temperature is: 20 degree Celsius", por exemplo

const sendMarsTemperature = () => {
  const message = `Mars temperature is: ${getMarsTemperature()} degree Celsius`;
  setTimeout(() => console.log(message), messageDelay());
}

// sendMarsTemperature();

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// 3 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida
// com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature2 = (callback) => {
  setTimeout(() => callback(getMarsTemperature()), messageDelay());
};

// definição da função sendMarsTemperature..
// sendMarsTemperature2(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature2(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// 4 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo,
// adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature3 = (callback, error) => {
  const succeed = Math.random() <= 0.6;
  setTimeout(() => {
    if (succeed) {
      callback(getMarsTemperature());
    } else {
      error('Robot is busy!');
    }
  }, messageDelay());
};

// definição da função sendMarsTemperature...
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(greet, handleError);
