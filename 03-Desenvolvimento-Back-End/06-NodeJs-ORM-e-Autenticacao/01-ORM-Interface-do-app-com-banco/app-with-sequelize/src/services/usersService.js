const { User } = require('../models');

const findAll = async () => User.findAll();

const findByPk = async (id) => User.findByPk(id);

const findOne = async (id, email) => User.findOne({ where: { id, email } });

const create = async (fullName, email) => User.create({ fullName, email });

const update = async (id, fullName, email) =>  User.update({ fullName, email }, { where: { id } });

const remove = async (id) => User.destroy({ where: { id } });

module.exports = {
  findAll,
  findByPk,
  findOne,
  create,
  update,
  remove,
};
