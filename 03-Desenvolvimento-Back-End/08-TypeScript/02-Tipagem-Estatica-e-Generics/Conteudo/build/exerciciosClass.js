"use strict";
// Crie uma classe cujo objeto represente um Cachorro.
class Dog {
    constructor(name, age, breed, color) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.color = color;
    }
    bark() {
        console.log("Au Au");
    }
    growl() {
        console.log("Grrrr");
    }
    run() {
        console.log("Correndo...");
    }
}
const Dog1 = new Dog("Rex", 2, "Vira-lata", "Preto");
Dog1.bark();
Dog1.growl();
Dog1.run();
class House {
    constructor(color, rooms, floors, hasGarage) {
        this.color = color;
        this.rooms = rooms;
        this.floors = floors;
        this.hasGarage = hasGarage;
    }
    paint(color) {
        this.color = color;
    }
    addRoom() {
        this.rooms += 1;
    }
    addFloor() {
        this.floors += 1;
    }
    addGarage() {
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
class Flight {
    constructor(origin, destination, arrivalTime) {
        this.origin = origin;
        this.destination = destination;
        this.arrivalTime = arrivalTime;
    }
    changeOrigin(origin) {
        this.origin = origin;
    }
    changeDestination(destination) {
        this.destination = destination;
    }
    changeArrivalTime(arrivalTime) {
        this.arrivalTime = arrivalTime;
    }
}
const Flight1 = new Flight("São Paulo", "Rio de Janeiro", "12:00");
console.log(Flight1);
Flight1.changeOrigin("Rio de Janeiro");
Flight1.changeDestination("São Paulo");
Flight1.changeArrivalTime("13:00");
console.log(Flight1);
