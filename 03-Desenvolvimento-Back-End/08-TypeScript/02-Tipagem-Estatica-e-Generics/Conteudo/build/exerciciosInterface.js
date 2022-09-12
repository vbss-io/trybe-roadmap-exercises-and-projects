"use strict";
// Crie uma interface cujo objeto represente um Automóvel.
let car1 = {
    color: "Preto",
    brand: "Ford",
    model: "F400",
    year: 2010,
    age() {
        return new Date().getFullYear() - this.year;
    }
};
console.log(car1.age());
