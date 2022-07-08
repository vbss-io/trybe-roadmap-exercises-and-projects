const { professionalBoard, searchEmployee } = require('../src/searchEmployee');

describe('Testando função de searchEmployee', () => {
  it('Testando se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testando se searchEmployee retorna uma mensagem caso o id não exista', () => {
    expect(typeof searchEmployee('12345', 'firstName')).toBe('string');
    expect(searchEmployee('12345', 'firstName')).toBe('Informação indisponível');
    expect(searchEmployee('124', 'lastName')).toBe('Informação indisponível');
    expect(searchEmployee(1234, 'specialities')).toBe('Informação indisponível');
  });
  it('Testando se searchEmployee retorna uma mensagem caso a informação não exista', () => {
    expect(typeof searchEmployee('8579-6', 'primeiroNome')).toBe('string');
    expect(searchEmployee('8579-6', 'primeiroNome')).toBe('Informação indisponível');
    expect(searchEmployee('5569-4', 'ultimoNome')).toBe('Informação indisponível');
    expect(searchEmployee('4456-4', 'especialidade')).toBe('Informação indisponível');
  });
  it('Testando se searchEmployee retorna o primeiro nome do funcionário e que nome é uma string', () => {
    expect(typeof searchEmployee('8579-6', 'firstName')).toBe('string');
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
  });
  it('Testando se searchEmployee retorna o último nome do funcionário e que último nome é uma string', () => {
    expect(typeof searchEmployee('8579-6', 'lastName')).toBe('string');
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
  });
  it('Testando se searchEmployee retorna a especialidade do funcionário e que especialidade é um objeto', () => {
    expect(typeof searchEmployee('8579-6', 'specialities')).toBe('object');
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
});
