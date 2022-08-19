const express = require('express');
const authMiddleware = require('./auth-middleware');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/open', function (req, res) {
  res.send('Aberto!')
});

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use(authMiddleware);

const recipesRouter = require('./recipesRouter');
app.use('/recipes', recipesRouter);

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (req, res) {
  res.json(drinks);
});

app.get('/drinks/sort', function (req, res) {
  res.json(drinks.sort((a, b) => a.name.localeCompare(b.name)));
});

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice } = req.query;
  let filteredDrink = [];

  if (name && maxPrice) {
    filteredDrink = drinks.filter(drink => drink.name.includes(name) && drink.price <= maxPrice);
  } else if (name) {
    filteredDrink = drinks.filter(drink => drink.name.includes(name));
  } else if (maxPrice) {
    filteredDrink = drinks.filter(drink => drink.price <= maxPrice);
  }

  if (!filteredDrink || filteredDrink.length === 0) return res.status(404).json({ message: 'Bebida não encontrada!'});

  return res.status(200).json(filteredDrink);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Bebida não encontrada!'});

  return res.status(200).json(drink);
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Bebida não encontrada!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Bebida não encontrada!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Bebida criada com sucesso!' });
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
