// Crie uma interface cujo objeto represente um Automóvel.

interface Car {
  color: string;
  brand: string;
  model: string;
  year: number;
  age(): number;
}

let car1: Car = {
  color: "Preto",
  brand: "Ford",
  model: "F400",
  year: 2010,
  age() {
    return new Date().getFullYear() - this.year;
  }
};

console.log(car1.age());