// Crie um type para um objeto que represente um pássaro.
type bird = {
  name: string;
  age: number;
  color: string;
};

function printBird(bd: bird) {
  console.log("O nome do pássaro é: " + bd.name);
  console.log("A idade do pássaro é: " + bd.age);
  console.log("A cor do pássaro é: " + bd.color);
}

printBird({ name: "Pardal", age: 2, color: "Branco" });

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.

type sum = (a: number, b: number) => number;

const sum: sum = (a: number, b: number) => a + b;

console.log(sum(2, 2));

// Crie um type para um objeto que represente um endereço.

type address = {
  street: string;
  number: number;
  city: string;
  state: string;
};

function printAddress(ad: address) {
  console.log("A rua é: " + ad.street);
  console.log("O número é: " + ad.number);
  console.log("A cidade é: " + ad.city);
  console.log("O estado é: " + ad.state);
}

printAddress({
  street: "Rua dos Bobos",
  number: 0,
  city: "São Paulo",
  state: "SP",
});

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.

type state = "solid" | "liquid" | "gas";

function printState(st: state) {
  console.log("O estado é: " + st);
}

printState("solid");
printState("liquid");
printState("gas");

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

type id = string | number;

function printId(id: id) {
  console.log("O id é: " + id);
}

printId("123.567.890-12");
printId(123456789012);

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type os = "linux" | "mac os" | "windows";

function printOs(os: os) {
  console.log("O sistema operacional é: " + os);
}

printOs("linux");
printOs("mac os");
printOs("windows");

// Crie um type union que represente as vogais do alfabeto.

type vowel = "a" | "e" | "i" | "o" | "u";

function printVowel(vw: vowel) {
  console.log("A vogal é: " + vw);
}

printVowel("a");
printVowel("e");
