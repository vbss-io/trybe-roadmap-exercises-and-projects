import { connect } from 'mongoose';

// const options = {
//   user: 'user', // Usuário do banco de dados.
//   pass: 'password' // senha do usuário do banco de dados.
//   autoIndex: false, // Não cria index para cada inserção de dado no banco.
//   dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
// };

// connect('mongodb://localhost:27017/', options);

connect('mongodb://localhost:27017/studyDatabase');

// Aviso: Se a conexão falhar em sua máquina, tente usar 127.0.0.1 em vez de localhost.

// connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', options);
// connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', { user: 'user', pass: 'password' });