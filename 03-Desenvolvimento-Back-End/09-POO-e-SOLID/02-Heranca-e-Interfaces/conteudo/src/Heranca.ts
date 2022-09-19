// Crie uma classe chamada Superclass.
// A Superclass deve possuir um atributo público isSuper
// isSuper deve ser setado como true na inicialização.
// A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.
// Crie uma classe chamada Subclass que herda da Superclass.
// Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.
// Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass.
// Chame a função myFunc 2 vezes, passando os objetos criados.

class SuperClass {
  public isSuper = true;

  sayHello(): void {
    console.log('Olá mundo!');
  }
}

class SubClass extends SuperClass { }

const myFunc = (obj: SuperClass): void => {
  obj.sayHello();
}

const superObj = new SuperClass();
const subObj = new SubClass();

myFunc(superObj);
myFunc(subObj);