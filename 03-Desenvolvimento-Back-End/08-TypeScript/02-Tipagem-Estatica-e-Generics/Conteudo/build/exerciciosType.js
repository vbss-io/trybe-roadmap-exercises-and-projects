"use strict";
function printBird(bd) {
    console.log("O nome do pássaro é: " + bd.name);
    console.log("A idade do pássaro é: " + bd.age);
    console.log("A cor do pássaro é: " + bd.color);
}
printBird({ name: "Pardal", age: 2, color: "Branco" });
const sum = (a, b) => a + b;
console.log(sum(2, 2));
function printAddress(ad) {
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
function printState(st) {
    console.log("O estado é: " + st);
}
printState("solid");
printState("liquid");
printState("gas");
function printId(id) {
    console.log("O id é: " + id);
}
printId("123.567.890-12");
printId(123456789012);
function printOs(os) {
    console.log("O sistema operacional é: " + os);
}
printOs("linux");
printOs("mac os");
printOs("windows");
function printVowel(vw) {
    console.log("A vogal é: " + vw);
}
printVowel("a");
printVowel("e");
