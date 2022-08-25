const express = require('express');
const userBooksRoute = express.Router();

const userBooksController = require('../controllers/userBooksController');

userBooksRoute.get('/:id', userBooksController.findOne);

module.exports = userBooksRoute;
