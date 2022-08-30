const express = require('express');
const employeesRoute = express.Router();

const employeesController = require('../controllers/employeesController');

employeesRoute.get('/', employeesController.findAll);
employeesRoute.get('/:id', employeesController.findOne);
employeesRoute.post('/', employeesController.create);

module.exports = employeesRoute;
