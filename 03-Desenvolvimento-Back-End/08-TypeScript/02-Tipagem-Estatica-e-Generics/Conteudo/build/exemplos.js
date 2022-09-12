"use strict";
// Arrays
let names = ['João', 'Maria', 'José'];
let numbers = [1, 2, 3, 4, 5];
// Tuplas
let fullName = ["Jane", "Doe"];
let person = ["Jane Doe", 35];
let car = ["Ford", "F400", 10];
function printCoord(pt) {
    console.log("O valor da coordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}
// printCoord({ x: 100, y: 100 });
// Type Unions
function printCPF(cpf) {
    console.log("O CPF é: " + cpf);
}
// printCPF("123.456.789-00");
// printCPF(12345678900);
// Classes
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
class Person {
    // ? - Optional
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    printName() {
        console.log(`O nome da pessoa é: ${this.name}`);
    }
    printAge() {
        let today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        console.log(`A idade da pessoa é: ${age}`);
    }
    printEyeColor() {
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
let employee = {
    firstName: "Vitor",
    lastName: "Bastos",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(employee.fullName());
let teacher = {
    firstName: "Vitor",
    lastName: "Bastos",
    subject: "Matemática",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    sayHello() {
        return `Olá, meu nome é ${this.fullName()} e eu leciono ${this.subject}`;
    }
};
console.log(teacher.sayHello());
console.log(teacher.fullName());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// Mais de um tipo
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, "Olá");
let returnString = identity("100", "Mundo");
let returnBoolean = identity(true, "Olá, Mundo!");
// Generics podem ser usados em interfaces e classes
