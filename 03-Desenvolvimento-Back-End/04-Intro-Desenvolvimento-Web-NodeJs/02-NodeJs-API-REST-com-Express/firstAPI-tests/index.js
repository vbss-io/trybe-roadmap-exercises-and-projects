const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/drinks', function (req, res) {
  res.json(drinks);
});

app.get('/drinks/sort', function (req, res) {
  res.json(drinks.sort((a, b) => a.name.localeCompare(b.name)));
});

app.get('/recipes/sort', function (req, res) {
  res.json(recipes.sort((a, b) => a.name.localeCompare(b.name)));
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  let filteredRecipe = [];

  if (name && maxPrice) {
    filteredRecipe = recipes.filter(recipe => recipe.name.includes(name) && recipe.price <= maxPrice);
  } else if (name) {
    filteredRecipe = recipes.filter(recipe => recipe.name.includes(name));
  } else if (maxPrice) {
    filteredRecipe = recipes.filter(recipe => recipe.price <= maxPrice);
  }

  if (!filteredRecipe || filteredRecipe.length === 0) return res.status(404).json({ message: 'Receita não encontrada!'});

  return res.status(200).json(filteredRecipe);
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

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Receita não encontrada!'});

  return res.status(200).json(recipe);
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Receita não encontrada!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Receita não encontrada!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Bebida não encontrada!'});

  return res.status(200).json(drink);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Receita criada com sucesso!' });
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
