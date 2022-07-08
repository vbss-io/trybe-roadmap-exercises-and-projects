const { encode, decode } = require('../src/encodeDecode');

describe('Testando função de encode', () => {
  it('Testando se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Deve retornar "12345" quando receber "aeiou"', () => {
    // expect(encodeDecode('abcde')).toBe('1a2b3c4d5e');
    expect(encode('aeiou')).toBe('12345');
  });
  it('Deve retornar "1b2c3d4f5g" quando receber "abecidofug"', () => {
    expect(encode('abecidofug')).toBe('1b2c3d4f5g');
  });
  it('O tamanho da string deve ser igual ao tamanho do array de caracteres', () => {
    expect(encode('abcde').length).toBe(5);
    const str = 'abcdefghijklmnopqrstuvwxyz';
    expect(encode(str).length).toBe(str.length);
  });
});

describe('Testando função de decode', () => {
  it('Testando se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  it('Deve retornar "aeiou" quando receber "12345"', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Deve retornar "abecidofug" quando receber "1b2c3d4f5g"', () => {
    expect(decode('1b2c3d4f5g')).toBe('abecidofug');
  });
  it('O tamanho da string deve ser igual ao tamanho do array de caracteres', () => {
    expect(decode('12345').length).toBe(5);
    const str = 'abcdefghijklmnopqrstuvwxyz';
    expect(decode(str).length).toBe(str.length);
  });
});