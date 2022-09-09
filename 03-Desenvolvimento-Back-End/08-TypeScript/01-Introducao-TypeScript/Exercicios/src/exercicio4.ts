// Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync,
// que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação),
// crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:

// Retorne em que estação aquele mês se encontra.
// Caso seja um mês que possua duas estações retorne ambas.
// Para referência:

// Estações do ano no Hemisfério Norte

// Estação	Início	Término
// Outono	23 de setembro	21 de dezembro
// Inverno	21 de dezembro	20 de março
// Primavera	20 de março	21 de junho
// Verão	21 de junho	23 de setembro
// Estações do ano no Hemisfério Sul

// Estação	Início	Término
// Outono	20 de março	21 de junho
// Inverno	21 de junho	22 de setembro
// Primavera	22 de setembro	21 de dezembro
// Verão	21 de dezembro	20 de março
// Fonte: https://brasilescola.uol.com.br/geografia/estacoes-ano.htm

// Agora vamos criar um pacote Node para converter unidades de medidas no Sistema Internacional:

import Seasons from "./exercicio3";
import Months from "./exercicio2";
import readline from "readline-sync";

const monthsNames = Object.values(Months);
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
