// 1) Utilize o arquivo simpsons.json para realizar os requisitos abaixo.
// -Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const { readFile, writeFile } = require('fs').promises;

const readAll = () => {
  readFile('simpsons.json', 'utf8')
    .then(data => {
      const fileContent = JSON.parse(data);
      const strings = fileContent.map(person => `${person.id} - ${person.name}`);
      strings.forEach(string => console.log(string));
    })
    .catch(err => {
      const error = `Não foi possível ler o arquivo\n ${err.message}`;
      console.log(error);
    })
}

// readAll();

// -Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado.
//  Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const characterById = (id) => {
    return new Promise((resolve, reject) => {
      readFile('simpsons.json', 'utf8')
        .then(data => {
          const fileContent = JSON.parse(data);
          const person = fileContent.find(person => Number(person.id) === id);
          if (!person) reject(new Error('id não encontrado'));
          resolve(person);
      })
        .catch(err => {
          reject(new Error(`Não foi possível ler o arquivo\n ${err.message}`));
        })
  })
}

// characterById(1)
//   .then(person => console.log(person))
//   .catch(err => console.log(err.message));

// -Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const removeCharacters = () => {
  readFile('simpsons.json', 'utf8')
    .then(data => {
      const fileContent = JSON.parse(data);
      const newFileContent = fileContent.filter(person => Number(person.id) !== 10 && Number(person.id) !== 6);
      writeFile('simpsons.json', JSON.stringify(newFileContent))
    })
    .catch(err => {
      console.log(`Não foi possível ler o arquivo\n ${err.message}`);
    })
}

// removeCharacters()

// -Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const newSimpsonsFile = (maxId) => {
  readFile('simpsons.json', 'utf8')
    .then(data => {
      const fileContent = JSON.parse(data);
      const person = fileContent.filter(person => Number(person.id) <= maxId);
      writeFile('simpsonsFamily.json', JSON.stringify(person))
    })
}

// newSimpsonsFile(4)