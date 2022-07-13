const vqv = require('../src/vqv');

/*
  Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

const message = `Tenho 29 anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

describe('3 - Testes para a função `vqv`', () => {
  it('Verifica se `vqv` é uma função', () => {
    expect(typeof vqv).toBe('function');
  });

  it('Verifica se a função `vqv` retorna dados do tipo string', () => {
    expect(typeof vqv('Tunico', 30)).toBe('string');
  });

  it('Verifica se a função `vqv` retorna a frase esperada com nome e idade', () => {
    expect(
      vqv('Tunico', 29),
).toBe(
      `Oi, meu nome é Tunico!\n${
        message}`,
    );
    expect(
      vqv('Alberto', 30),
).toBe(
      'Oi, meu nome é Alberto!\n'
        + 'Tenho 30 anos,\n'
        + 'trabalho na Trybe e mando muito em programação!\n'
        + '#VQV!',
    );
    expect(
      vqv('Hamaji', 29),
).toBe(
      `Oi, meu nome é Hamaji!\n${
        message}`,
    );
  });

  it('Verifica se a função `vqv`, sem parâmetro retorna undefined', () => {
    expect(vqv()).toBeUndefined();
  });
});
