const express = require('express');

const app = express();

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/hello', handleHelloWorldRequest);

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Opá, tudo bem?');
}