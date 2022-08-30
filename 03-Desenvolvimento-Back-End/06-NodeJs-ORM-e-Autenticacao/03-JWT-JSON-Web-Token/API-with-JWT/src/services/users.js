const { User } = require('../models');

const findAll = async () => User.findAll();

const create = async (username, password) => User.create({ username, password });

module.exports = { 
  findAll,
  create,
};