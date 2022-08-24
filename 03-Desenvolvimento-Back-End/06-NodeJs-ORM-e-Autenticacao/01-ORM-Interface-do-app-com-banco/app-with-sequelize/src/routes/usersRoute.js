const express = require('express');
const usersRoute = express.Router();

const usersController = require('../controllers/usersController');

usersRoute.get('/', usersController.findAll);
usersRoute.get('/:id', usersController.findByPk);
usersRoute.get('/search/:id', usersController.findOne);
usersRoute.post('/', usersController.create);
usersRoute.put('/:id', usersController.update);
usersRoute.delete('/:id', usersController.remove);

module.exports = usersRoute;
