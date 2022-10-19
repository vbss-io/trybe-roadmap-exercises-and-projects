// Exercício 3: 🚀 Crie o método read na model de sua aplicação.
// Exercício 6: 🚀 Crie o método destroy na model de sua aplicação.

interface IModel<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
  read():Promise<T[]>,
  destroy(_id:string):Promise<T | null>,
}

export default IModel;