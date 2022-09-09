"use strict";
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
let newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
// console.log(newStudentStatus); //saída: 2
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
// console.log(ok); //saída: 200
// console.log(indiceOk); //saída: 200
// console.log(stringBadRequest); //saída: BadRequest
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGHT"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 1] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 2] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 3] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 4] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 5] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 6] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 7] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek.Sunday); //saída: 1
console.log(DaysOfWeek[5]); //saída: Thursday
// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
var Colors;
(function (Colors) {
    Colors["Red"] = "Vermelho";
    Colors["Orange"] = "Laranja";
    Colors["Yellow"] = "Amarelo";
    Colors["Green"] = "Verde";
    Colors["Blue"] = "Azul";
    Colors["Indigo"] = "Anil";
    Colors["Violet"] = "Violeta";
})(Colors || (Colors = {}));
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var Actions;
(function (Actions) {
    Actions[Actions["Save"] = 1] = "Save";
    Actions[Actions["Print"] = 2] = "Print";
    Actions[Actions["Open"] = 3] = "Open";
    Actions[Actions["View"] = 4] = "View";
    Actions[Actions["Close"] = 5] = "Close";
})(Actions || (Actions = {}));
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var CardinalPoints;
(function (CardinalPoints) {
    CardinalPoints["North"] = "N";
    CardinalPoints["East"] = "E";
    CardinalPoints["South"] = "S";
    CardinalPoints["West"] = "W";
})(CardinalPoints || (CardinalPoints = {}));
