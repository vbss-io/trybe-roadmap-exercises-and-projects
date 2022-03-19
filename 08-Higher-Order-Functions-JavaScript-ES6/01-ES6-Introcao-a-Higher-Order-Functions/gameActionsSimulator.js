const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = (dragonStats) => {
  const min = 15;
  return Math.floor(Math.random() * (dragonStats.strength - min + 1)) + min;
}

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = (warriorStats) => {
  const max = (warriorStats.strength * warriorStats.weaponDmg);
  return Math.floor(Math.random() * (max - warriorStats.strength + 1)) + warriorStats.strength;
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano
// recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamage = (mageStats) => {
  const mageMana = mageStats.mana;
  const intelligence = mageStats.intelligence;
  if (mageMana < 15) {
    const mageResults = {
      damage: 'Não possui mana suficiente',
      mana: 0,
    }
    return mageResults;
  }
  const max = intelligence * 2;
  const mageResults = {
    damage: Math.floor(Math.random() * (max - intelligence + 1)) + intelligence,
    mana: 15,
  }
  return mageResults;
}

// console.log(mageDamage(mage));
// console.log(dragonDamage(dragon));
// console.log(warriorDamage(warrior));

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá
// como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon .
// Além disto ela também deve atualizar o valor da chave damage do warrior .

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá
// como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela
// também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como
// parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior .
// Além disto ela também deve atualizar o valor da chave damage do monstro.

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage(warrior);
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (mageDamage) => {
    const action = mageDamage(mage);
    dragon.healthPoints -= action.damage;
    mage.damage = action.damage;
    mage.mana -= action.mana;
  },
  dragonTurn: (dragonDamage) => {
    const damage = dragonDamage(dragon);
    dragon.damage = damage;
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
  },
  result: () => battleMembers,
};

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.result());
