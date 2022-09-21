// import Flute from './Flute';

// export default class Musician {
//   // public flute: Flute;

//   // constructor(public name: string) {
//   //   this.flute = new Flute('minha flauta');
//   // }

//   // constructor(
//   //   public name: string,
//   //   public flute: Flute,
//   //   ) { }

//     // Agora o parâmetro da flauta tem um valor padrão caso nenhuma seja passada
//     constructor(
//       public name: string,
//       public flute: Flute = new Flute('Minha flauta'),
//     ) { }

//   play(): void {
//     this.flute.play();
//     console.log(
//       `"${this.name}" é quem está comandando a emissão das melodias`,
//     );
//   }
// }

// const flute = new Flute('Minha flauta');
// const musician = new Musician('Márcia', flute);
// const newMusician = new Musician('Márcia');

// musician.play();
// newMusician.play();

interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta')
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();