import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get('/', booksController.getAll);
booksRouter.get('/:id', booksController.getById);
booksRouter.post('/', validationBook, booksController.create);
booksRouter.put('/:id', validationBook, booksController.update);
booksRouter.delete('/:id', booksController.remove);

export default booksRouter;