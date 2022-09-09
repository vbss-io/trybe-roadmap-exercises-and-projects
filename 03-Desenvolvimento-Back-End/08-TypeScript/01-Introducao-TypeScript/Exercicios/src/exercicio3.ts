// Crie uma enum que represente as estações climáticas do ano.

enum Seasons {
  Spring = 1,
  Summer,
  Autumn,
  Winter
}

const lengthSeasons: number = Object.keys(Seasons).length / 2;

for (let i = 1; i <= lengthSeasons; i++) {
  console.log(`${i}: ${Seasons[i]}`);
}

export default Seasons;