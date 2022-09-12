// Arrays

let names: string[] = ['João', 'Maria', 'José'];
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuplas

let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

// Type Alias

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("O valor da coordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

// printCoord({ x: 100, y: 100 });

// Type Unions

function printCPF(cpf: string | number) {
  console.log("O CPF é: " + cpf);
}

// printCPF("123.456.789-00");
// printCPF(12345678900);

// Classes

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  // Pode ser uma interface
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  // ? - Optional
  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  printName(): void {
    console.log(`O nome da pessoa é: ${this.name}`);
  }

  printAge(): void {
    let today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    console.log(`A idade da pessoa é: ${age}`);
  }

  printEyeColor(): void {
    console.log(`A cor dos olhos da pessoa é: ${this.eyeColor}`);
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"));

person1.printName();
person1.printAge();
person1.printEyeColor();

person2.printName();
person2.printAge();
person2.printEyeColor();

person2.eyeColor = EyeColor.Blue;

person2.printEyeColor();

// Interfaces

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "Vitor",
  lastName: "Bastos",
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(employee.fullName());

interface Teacher extends Employee {
  // Pode herdar de outras interfaces (firstName, lastName, fullName)
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "Vitor",
  lastName: "Bastos",
  subject: "Matemática",
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello(): string {
    return `Olá, meu nome é ${this.fullName()} e eu leciono ${this.subject}`;
  }
}

console.log(teacher.sayHello());
console.log(teacher.fullName());

// Generics

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");

// Mais de um tipo
function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

// Generics podem ser usados em interfaces e classes