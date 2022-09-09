## Hard Skills Desenvolvidas

### Introdução ao TypeScript

- [X] _Definir o que é a linguagem TypeScript_
- [X] _Compreender a relação entre a linguagem TypeScript e a linguagem JavaScript_
- [X] _Compreender o que é Tipagem_
- [X] _Compreender a diferença entre Compilador e Transpilador_
- [X] _Compilar o código TypeScript em código JavaScript_
- [X] _Compreender o sistema de tipos do TypeScript_
- [X] _Declarar variáveis de tipos primitivos do TypeScript_

### **Resumo - Mais Importante**

#### Tipagem:
  - **Tipagem estática:** Não permite que a pessoa desenvolvedora altere o tipo após ele ser declarado.
  - **Tipagem dinâmica:** A linguagem de programação “escolhe” o tipo de dado a partir do valor atribuído à variável em tempo de execução.
  - **Tipagem Forte:** Tipagem fraca tem a característica da linguagem realizar conversões automáticas entre tipos diferentes de dados.
  - **Tipagem Fraca:** Linguagens fortemente tipadas não realizam conversões automaticamente.

#### Transpilador - TSC - TypeScript Compiler:
  - **Transpilador:** É um programa que converte o código de uma linguagem de programação para outra linguagem de programação.
  - **Compilador:** É um programa que converte o código de uma linguagem de programação para linguagem de máquina.
  - **TSC:** É o compilador do TypeScript, que converte o código TypeScript para JavaScript.

Instalação global:
```bash
npm install -g typescript

# Execução
tsc nome-do-arquivo.ts

# ou
npx tsc nome-do-arquivo.ts
```

Instalação local:
```bash
npm install -D typescript

# ou (node 16)
npm i -D @tsconfig/node16
touch tsconfig.json

# TSConfig
tsc --init

# ou
npx tsc --init
```

Definições de tipos:
```bash
npm install -D @types/node
```

Watch:
```bash
tsc --watch

# ou

npx tsc -w
```

tsconfig.json node16:
````json
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
````

readline-sync:
```bash
npm install -D @types/readline-sync
```