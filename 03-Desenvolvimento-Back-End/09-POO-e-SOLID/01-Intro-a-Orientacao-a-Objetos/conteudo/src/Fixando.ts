// 1 - Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// 2 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
// 3 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(`Brand: ${this.brand}, Size: ${this.size}, Resolution: ${this.resolution}, Connections: ${this.connections}`);
  }
}

const tv = new Tv('Samsung', 55, '4K', ['HDMI', 'Ethernet']);
// tv.turnOn();

// 4 - Altere a visibilidade dos atributos definidos na classe Tv para private.
// 5 - Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
// O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
// Em caso positivo, definir este valor para o atributo _connectedTo;
// 7 - Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

class Tv2 {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn() {
    console.log(`Brand: ${this._brand}, Size: ${this._size}, Resolution: ${this._resolution}, Connections: ${this._connections}`);
  }

  get connectedTo() {
    if (this._connectedTo) {
      console.log(this._connectedTo);
      return this._connectedTo;
    } else {
      console.log('No connection');
    }
    return 'Not connected';
  }

  set connectedTo(newValue: string) {
    if (this._connections.includes(newValue)) {
      this._connectedTo = newValue;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv2 = new Tv2('Samsung', 55, '4K', ['HDMI', 'Ethernet']);

tv2.turnOn();
tv2.connectedTo;
tv2.connectedTo = 'Wi-fi';
tv2.connectedTo = 'HDMI';
tv2.connectedTo;