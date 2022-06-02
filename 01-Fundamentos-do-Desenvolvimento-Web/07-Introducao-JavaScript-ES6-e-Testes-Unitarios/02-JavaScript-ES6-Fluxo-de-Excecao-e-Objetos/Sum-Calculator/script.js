// 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
// 2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
// 3 - Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?

const cleanImputs = () => {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
};

const onlyOneNumber = (value1, value2) => {
  if (value1 === "" || value2 === "") {
    throw new Error("Ambos os valores devem ser preenchidos!");
  }
};

const notANumber = (value) => {
  if (isNaN(value)) {
    throw new Error("Os valores devem ser numéricos!");
  }
};

function sum() {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;
  try {
    onlyOneNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    notANumber(result);
    document.getElementById("result").innerHTML = `${result}`;
  } catch (error) {
    document.getElementById("result").innerHTML = `${error.message}`;
    throw error.message;
  } finally {
    cleanImputs();
  }
}

window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};
