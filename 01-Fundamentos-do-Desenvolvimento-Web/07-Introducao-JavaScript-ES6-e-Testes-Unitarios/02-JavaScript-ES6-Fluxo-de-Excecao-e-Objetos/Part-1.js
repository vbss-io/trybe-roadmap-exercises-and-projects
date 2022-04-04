const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// 1 - Complete a função customerInfo() para que seu retorno seja similar a
// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  const message = `Olá ${order.order.delivery.deliveryPerson}, entrega para:
${order.name}, Tel. ${order.phoneNumber}, ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}.`;
  return console.log(message);
}

customerInfo(order);

// 2 - Complete a função orderModifier() para que seu retorno seja similar a
// "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const message = `Olá ${order.name}, 
o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment.total}.`;
  return console.log(message);
}

orderModifier(order);
