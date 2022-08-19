const express = require('express');
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Dados Inválidos!'});

  next();
};

router.get('/', function (req, res) {
  res.json(recipes);
});

router.get('/sort', function (req, res) {
  res.json(recipes.sort((a, b) => a.name.localeCompare(b.name)));
});

router.get('/search', function (req, res) {
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

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Receita não encontrada!'});

  return res.status(200).json(recipe);
});

router.post('/', validateName, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, waitTime, chef: username });
  res.status(201).json({ message: 'Receita criada com sucesso!' });
});

router.put('/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Receita não encontrada!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

router.delete('/:id', validateName, function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Receita não encontrada!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;
