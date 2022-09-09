"use strict";
// Crie uma enum que represente as estações climáticas do ano.
Object.defineProperty(exports, "__esModule", { value: true });
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Spring"] = 1] = "Spring";
    Seasons[Seasons["Summer"] = 2] = "Summer";
    Seasons[Seasons["Autumn"] = 3] = "Autumn";
    Seasons[Seasons["Winter"] = 4] = "Winter";
})(Seasons || (Seasons = {}));
const lengthSeasons = Object.keys(Seasons).length / 2;
for (let i = 1; i <= lengthSeasons; i++) {
    console.log(`${i}: ${Seasons[i]}`);
}
exports.default = Seasons;
