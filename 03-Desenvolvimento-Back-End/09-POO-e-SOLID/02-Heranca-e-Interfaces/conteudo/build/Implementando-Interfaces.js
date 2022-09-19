"use strict";
// Crie uma interface chamada MyInterface.
// MyInterface deve possuir um atributo myNumber do tipo number.
// MyInterface deve possuir um método myFunc, que recebe um parâmetro myParam do tipo number e retorna uma string.
// Crie uma classe MyClass que implementa MyInterface.
// Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass.
// Faça o método myFunc somar o myNumber com o myParam e retornar uma string qualquer que contenha a soma.
// Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc.
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `Soma: ${this.myNumber + myParam}`;
    }
}
const myObj = new MyClass(10);
console.log(myObj.myNumber);
console.log(myObj.myFunc(5));
