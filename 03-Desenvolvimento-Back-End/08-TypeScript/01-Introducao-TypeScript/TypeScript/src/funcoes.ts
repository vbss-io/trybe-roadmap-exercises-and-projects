export function greeter(name: string):string {
    return "Hello, " + name;
}

export function personAge(name: string, age: number):string {
  return `${name} has ${age} years old`;
}

export function add(x: number, y: number):number {
  return x + y;
}

export function sumArray(numbers: number[]):number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number):number {
  return (base * height) / 2;
}

export function square(side: number):number {
  return side ** 2;
}

export function rectangle(base: number, height: number):number {
  return base * height;
}

// Crie uma nova função para calcular a área de um losango.
// A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. (D * d) / 2
export function rhombus(d1: number, d2: number):number {
  return (d1 * d2) / 2;
}

// Crie uma nova função para calcular a área de um trapézio.
// A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
export function trapeze(height: number, base1: number, base2: number):number {
  return ((base1 + base2) * height) / 2;
}

// Crie uma nova função para calcular a área de um círculo.
// A área do círculo de raio r é encontrada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). ℼ * r²
export function circle(radius: number):number {
  return Math.PI * (radius ** 2);
}
