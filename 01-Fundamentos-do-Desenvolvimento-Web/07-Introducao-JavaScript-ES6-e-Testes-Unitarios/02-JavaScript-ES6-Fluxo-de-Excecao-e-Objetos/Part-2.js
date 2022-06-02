const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a
// chave que deverá ser adicionada e o valor dela.
const addInfoObject = (object, key, value) => {
  const newObject = {
    [key]: value,
  };

  return Object.assign(object, newObject);
};

addInfoObject(lesson2, "turno", "noite");

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objectKeys = (object) => {
  return Object.keys(object);
};

// console.log(objectKeys(lesson3));

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (object) => {
  return Object.entries(object).length;
};

// console.log(objectLength(lesson3));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objectValues = (object) => {
  return Object.values(object);
};

// console.log(objectValues(lesson1));

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
const allLessonsObj = (lesson1, lesson2, lesson3) => {
  const allLessons = {};
  return Object.assign(
    allLessons,
    { lesson1: lesson1 },
    { lesson2: lesson2 },
    { lesson3: lesson3 }
  );
};

console.log(allLessonsObj(lesson1, lesson2, lesson3));
