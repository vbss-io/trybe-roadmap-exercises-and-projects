// Comente a criação da instância da Superclass.
// Comente a chamada da função que recebe o objeto do tipo Superclass como argumento.
// Faça a função receber não mais um objeto da Superclass, mas sim da Subclass.
// Crie, na Subclass, um método público chamado sayHello2.
// Chame o método sayHello dentro do método sayHello2.
// Mude a visibilidade do método sayHello de public para protected.
// Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método sayHello2.
// Mude a visibilidade do método sayHello de protected para private. O que acontece?

class SuperClass2 {
  public isSuper = true;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello(): void {
    console.log('Olá mundo!');
  }
}

class SubClass2 extends SuperClass2 { 
  sayHello2(): void {
    this.sayHello();
  }
}

const myFunc2 = (obj: SuperClass): void => {
  obj.sayHello();
}

// const superObj2 = new SuperClass();
const subObj2 = new SubClass();

// myFunc2(superObj);
myFunc2(subObj);