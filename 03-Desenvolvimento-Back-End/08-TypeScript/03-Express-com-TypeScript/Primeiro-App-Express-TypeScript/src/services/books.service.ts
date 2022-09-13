import connection from '../models/connection';
import BookModel from '../models/book.model';
import IBook from '../interfaces/book.interface';
import { NotFoundError } from 'restify-errors';

// Funcional Exemplo -> usando o HttpException
// import HttpException from "../shared/http.exception";
// const isValid = (movie: IMovie) => {
//   if (!movie.title || typeof movie.title !== "string") return false;
//   if (!movie.releaseYear || typeof movie.releaseYear !== "number") return false;
//   if (!movie.directedBy || typeof movie.directedBy !== "string") return false;

//   return true;
// };

// const newMovie = async (movie: IMovie) => {
//   if (!isValid(movie)) {
//       throw new HttpException(400, 'Dados inválidos!');
//   }

//   const { insertId } = await movieModel.create(movie);
//   movie.id = insertId;

//   return movie;
// }

// export default { newMovie };

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<IBook[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<IBook> {
    const book = await this.model.getById(id);
    return book;
  }

  public create(book: IBook): Promise<IBook> {
    return this.model.create(book);
  }

  public async update(id: number, book: IBook): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, book);
  }

  public async remove(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }

    this.model.remove(id);
  }
}

export default BookService;