## Hard Skills Desenvolvidas

### SOLID - Introdução e Princípios S, O e D

- [X] _Escrever funções e classes que tenham uma única responsabilidade no escopo da sua aplicação_
- [X] _Escrever classes com funções que estão abertas para extensão e fechadas para modificação_
- [X] _Inverter dependências para dar a quem chama o controle sobre como uma função faz o que precisa_

### **Resumo - Mais Importante**

  - **Single responsibility principle** (Princípio da responsabilidade única): uma entidade (classe, método, função, etc) deve ter apenas uma única responsabilidade;
  - **Open/Closed principle** (Princípio aberto/fechado): entidades de software devem ser abertas para extensão, mas fechadas para modificação;
  - **Liskov substitution principle** (Princípio de substituição de Liskov): objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa; (Ah, não se assuste com esse nome, ele faz apenas uma referência à autora do paper que o descreveu pela primeira vez em 1994, Barbara Liskov)
  - **Interface segregation principle** (Princípio da segregação da interface): interfaces específicas são melhores do que uma única interface para todos os propósitos;
  - **Dependency inversion principle** (Princípio da inversão da dependência): entidades de alto nível não devem depender de entidades de baixo nível. Ambos devem depender de abstrações.


#### S, O e D

Scripts para auxiliar:
````JSON
  "scripts": {
    "test": "mocha -r ts-node/register ./tests/**/*.{test,spec}.[t,j]s",
    "lint": "eslint  -c .eslintrc.json src/**/*.[t,j]s"
  },
````

Descendências:
````JSON
"devDependencies": {
    "typescript": "4.4.2",
    "ts-node": "10.2.1",
    "eslint": "7.32.0",
    "eslint-config-trybe-backend": "1.0.4",
    "eslint-plugin-import": "2.26.0",
    "eslint-plugin-mocha": "10.0.4",
    "eslint-plugin-sonarjs": "0.13.0",
    "chai": "4.3.4",
    "mocha": "9.1.1",
    "sinon": "11.1.2",
    "@typescript-eslint/eslint-plugin": "4.30.0",
    "@typescript-eslint/parser": "4.30.0",
    "@types/chai": "4.2.21",
    "@types/mocha": "9.0.0",
    "@types/node": "17.0.35",
    "@types/sinon": "10.0.2"
  },
````

ESLint (.eslintrc.json)
````JSON
{
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "trybe-backend"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "ignorePatterns": ["tests/", "node_modules/"],
    "env": { "es2021": true },
    "plugins": ["@typescript-eslint"],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }]
    }
}
````