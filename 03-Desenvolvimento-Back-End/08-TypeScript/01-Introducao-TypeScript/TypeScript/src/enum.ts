enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
// console.log(newStudentStatus); //saída: 2

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

// console.log(ok); //saída: 200
// console.log(indiceOk); //saída: 200
// console.log(stringBadRequest); //saída: BadRequest

enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
enum DaysOfWeek {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

console.log(DaysOfWeek.Sunday); //saída: 1
console.log(DaysOfWeek[5]); //saída: Thursday

// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
enum Colors {
  Red = "Vermelho",
  Orange = "Laranja",
  Yellow = "Amarelo",
  Green = "Verde",
  Blue = "Azul",
  Indigo = "Anil",
  Violet = "Violeta",
}

// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
enum Actions {
  Save = 1,
  Print,
  Open,
  View,
  Close,
}

// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
enum CardinalPoints {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}
