import readline from 'readline-sync';
// import { ResultSetHeader } from "mysql2";
import connection  from './models/connection';
import BookModel, { Book } from './models/Book';

// const main = async () => {
//   const result = await connection.execute('SELECT * FROM books');
//   const [rows] = result;
//   console.log(rows);
// }

// const insert = async () => {
//   const title = readline.question('Digite o nome do livro: ');
//   const price = readline.questionFloat('Digite o preço do livro: ');
//   const author = readline.question('Digite o autor do livro: ');
//   const isbn = readline.question('Digite o isbn do livro: ');

//   const result = await connection.execute<ResultSetHeader>(
//     'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
//     [title, price, author, isbn]
//   );
//   const [dataInserted] = result;
//   const { insertId } = dataInserted;
//   console.log(insertId);
// }

const getAll = async () => {
  const bookModel = new BookModel(connection);

  const books = await bookModel.getAll();
  console.log(books)
}

const create = async () => {
  const bookModel = new BookModel(connection);

  const title = readline.question('Digite o título do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const newBook: Book = { title , price , author , isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook)
}

// getAll();
create();

// main();
// insert();