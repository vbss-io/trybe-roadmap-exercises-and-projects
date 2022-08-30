const { Book, User } = require('../models');

const findOne = async (id) => User.findOne({
  where: { userId: id },
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

module.exports = {
  findOne,
};
