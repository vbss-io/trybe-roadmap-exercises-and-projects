// Repare que aqui importamos a função 'model' do Mongoose:
import { Schema, model } from 'mongoose';

interface IBook {
  title: string,
  author: string,
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

// Para acessarmos os métodos disponibilizados pelo Mongoose(create, find, update...) e
// implementarmos nossa API, criamos um model

const bookModel = model<IBook>('Book', bookSchema);