"use strict";
// Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync,
// que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação),
// crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio2_1 = __importDefault(require("./exercicio2"));
const monthsNames = Object.values(exercicio2_1.default);
console.log(monthsNames);
// const choiceMonth = readline.keyInSelect(monthsNames, "Choose a month: (1...12)");
// const seasonsSouth = {
//   [Seasons.Autumn]: [Months.March, Months.April, Months.May, Months.June],
//   [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
//   [Seasons.Spring]: [Months.September, Months.October, Months.November, Months.December],
//   [Seasons.Summer]: [Months.December, Months.January, Months.February, Months.March],
// }
// const seasonsNorth = {
//   [Seasons.Autumn]: [Months.September, Months.October, Months.November, Months.December],
//   [Seasons.Winter]: [Months.December, Months.January, Months.February, Months.March],
//   [Seasons.Spring]: [Months.March, Months.April, Months.May, Months.June],
//   [Seasons.Summer]: [Months.June, Months.July, Months.August, Months.September],
// }
// const hemispheres = {
//   "N": seasonsNorth,
//   "S": seasonsSouth
// }
// const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Choose a hemisphere: (N/S)");
// const month = Object.values(Months)[choiceMonth];
// const hemisphere = Object.values(hemispheres)[choiceHemisphere];
// console.log(`Month: \n${month}`);
// console.log(`Hemisphere: \n${hemisphere}`);
// console.log('Seasons:');
// const chosenHemisphere = Object.values(hemisphere)[choiceHemisphere];
// Object.entries(chosenHemisphere).map((entry) => {
//   const season = entry[0];
//   const months = entry[1];
//   if (months.includes(month)) {
//     console.log(season);
//   }
// });
