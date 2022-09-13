## Hard Skills Desenvolvidas

### Express com TypeScript

- [X] _Configurar um projeto Node.js com TypeScript_
- [X] _Criar uma aplicação Express com TypeScript_

### **Resumo - Mais Importante**

#### Instalações e Configurações Iniciais:

TypeScript:
```bash 
npm install -D typescript
```

Definições de tipos:
```bash
npm install -D @types/node
```

Estrutura tsconfig.json:
```JSON
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```

Utilitário para execução do servidor de desenvolvimento:
```bash
npm install -D ts-node-dev
```

#### Instalação e configuração Express:

Express:
```bash	
npm install express
```

Declaração de tipos do Express:
```bash
npm install -D @types/express
```

Para lidar com status HTTP de forma mais simples:
```bash
npm install http-status-codes
```

### Scripts básicos package.json:

```JSON
"scripts": {
    "start": "npm run build && node ./dist/index.js",
    "dev": "tsnd index.ts",
    "build": "tsc"
 }
```

**start:** executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;
**dev**: executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;
**build:** executa a compilação do projeto utilizando o TSC.

### Captura de erros
Para capturar erros sem a utilização de try/catch:

```bash
npm install express-async-errors
```

````typescript
import 'express-async-errors';
````

Disparar erros específicos para o middleware de tratamento de erros:
```bash
npm install restify-errors @types/restify-errors
```

### Outras dependências

MySQL e dotenv:
```bash
npm install mysql dotenv
```

### Alguns Passos
  - Interfaces;
    - src/interfaces/book.interface.ts -> Convenção de nome: IBook
  - Rotas
    - src/routes/books.routes.ts
  - connection com o banco de dados
    - src/models/connection.ts
  - Models
    - src/models/book.model.ts
  - Services
    - src/services/book.service.ts
  - Controllers
    - src/controllers/book.controller.ts
  - Middlewares
    - src/middlewares/error.middleware.ts
    - src/middlewares/books.middleware.ts