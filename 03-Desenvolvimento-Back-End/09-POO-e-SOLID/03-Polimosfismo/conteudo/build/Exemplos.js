"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
}
const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');
const myMove = (animal) => {
    animal.move();
};
myMove(a);
myMove(b);
myMove(m);
/*
Saída:
Tubarão está se movendo.
Papagaio está voando.
Tatu está andando.
*/
// Uso do super:
// class Animal {
//   constructor(public name: string) { }
//   move() { console.log(`${this.name} está se movendo.`); }
// }
// class Bird extends Animal {
//   move() {
//     super.move();
//     console.log(`${this.name} está voando.`);
//   }
// }
// class Mammal extends Animal {
//   move() { console.log(`${this.name} está andando.`); }
// }
// const a = new Animal('Tubarão');
// const b = new Bird('Papagaio');
// const m = new Mammal('Tatu');
// const myMove = (animal: Animal) => {
//   animal.move();
// }
// myMove(a);
// myMove(b);
// myMove(m);
/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/
// Classes Abstratas e Métodos Abstratos:
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
class Bird2 extends Animal2 {
    move() { console.log(`${this.name} está voando.`); }
}
class Mammal2 extends Animal2 {
    move() { console.log(`${this.name} está andando.`); }
}
class Fish2 extends Animal2 {
    move() { console.log(`${this.name} está nadando.`); }
}
const a2 = new Fish2('Tubarão');
const b2 = new Bird2('Papagaio');
const m2 = new Mammal('Tatu');
const myMove2 = (animal) => {
    animal.move();
};
myMove2(a2);
myMove2(b2);
myMove2(m2);
/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/
// Métodos estáticos:
// Um método estático nada mais é do que uma função que não precisa acessar nenhum atributo do objeto.
