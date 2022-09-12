// Crie uma classe cujo objeto represente um Cachorro.

interface Dog {
  name: string;
  age: number;
  breed: string;
  color: string;
}

class Dog {
  constructor(name: string, age: number, breed: string, color: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
  }

  bark(): void {
    console.log("Au Au");
  }

  growl(): void {
    console.log("Grrrr");
  }

  run(): void {
    console.log("Correndo...");
  }
}

const Dog1 = new Dog("Rex", 2, "Vira-lata", "Preto");

Dog1.bark();
Dog1.growl();
Dog1.run();

// Crie uma classe cujo objeto represente uma Casa.

interface House {
  color: string;
  rooms: number;
  floors: number;
  hasGarage: boolean;
}

class House {
  constructor(color: string, rooms: number, floors: number, hasGarage: boolean) {
    this.color = color;
    this.rooms = rooms;
    this.floors = floors;
    this.hasGarage = hasGarage;
  }

  paint(color: string): void {
    this.color = color;
  }

  addRoom(): void {
    this.rooms += 1;
  }

  addFloor(): void {
    this.floors += 1;
  }

  addGarage(): void {
    this.hasGarage = true;
  }
}

const House1 = new House("Branco", 3, 2, false);

console.log(House1);
House1.paint("Azul");
House1.addRoom();
House1.addFloor();
House1.addGarage();
console.log(House1);

// Crie uma classe cujo objeto represente um Voo.

interface Flight {
  origin: string;
  destination: string;
  arrivalTime: string;
}

class Flight {
  constructor(origin: string, destination: string, arrivalTime: string) {
    this.origin = origin;
    this.destination = destination;
    this.arrivalTime = arrivalTime;
  }

  changeOrigin(origin: string): void {
    this.origin = origin;
  }

  changeDestination(destination: string): void {
    this.destination = destination;
  }

  changeArrivalTime(arrivalTime: string): void {
    this.arrivalTime = arrivalTime;
  }
}

const Flight1 = new Flight("São Paulo", "Rio de Janeiro", "12:00");

console.log(Flight1);
Flight1.changeOrigin("Rio de Janeiro");
Flight1.changeDestination("São Paulo");
Flight1.changeArrivalTime("13:00");
console.log(Flight1);