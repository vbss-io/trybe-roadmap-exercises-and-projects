// Crie uma enum que represente os meses do ano.

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

const length: number = Object.keys(Months).length / 2;

for (let i = 1; i <= length; i++) {
  console.log(`${i}: ${Months[i]}`);
}

export default Months;