## Hard Skills Desenvolvidas

### MongoDB - Introdução

- [X] _Instalar e conectar ao MongoDB_
- [X] _Listar bancos de dados e coleções_
- [X] _Inserir documentos no banco de dados usando o `insert()`_
- [X] _Pesquisar documentos no banco de dados usando `find()`_
- [X] _Contar a quantidade de documentos retornados usando o `countDocuments()`_
- [X] _Filtrar o resultado das suas pesquisas_
- [X] _Limitar e pular os documentos retornados_
- [X] _Fazer uma paginação simples combinados métodos `limit()` e o `skip()`_
- [X] _Entender o que é uma projeção e como utilizá-la_

#### MongoDb com Docker
````bash
docker run --name mongodb -p 27017:27017 -d
````

#### Importando arquivos locais para dentro do container utilizando mongoimport
````bash
docker cp nome-do-arquivo.json <nome-do-container-ou-id>:/tmp/nome-do-arquivo.json.json
````
````bash
docker exec <nome-do-container-ou-id> mongoimport -d <nome-do-banco> -c <nome-da-coleção> --file /tmp/nome-do-arquivo.json
````