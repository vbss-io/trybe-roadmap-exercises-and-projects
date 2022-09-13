import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import booksRouter from './routes/books.routes';
import httpErrorMiddleware from './middlewares/http.erro.middleware';

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.use(httpErrorMiddleware);

// opção middleware de erro
// app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
//   const { name, message, details } = err as any;
//   console.log(`name: ${name}`);
//   switch (name) {
//     case 'ValidationError':
//       res.status(400).json({ message: details[0].message });
//       break;
//     case 'NotFoundError':
//       res.status(404).json({ message });
//       break;
//     case 'ConflictError':
//       res.status(409).json({ message });
//       break;
//     default:
//       console.error(err);
//       res.sendStatus(500);
//   }

//   next();
// });

export default app;
