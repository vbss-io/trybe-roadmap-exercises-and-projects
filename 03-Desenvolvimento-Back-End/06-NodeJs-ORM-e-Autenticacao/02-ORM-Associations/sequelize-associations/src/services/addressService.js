const { Address } = require('../models');

const findAllByEmployee = async (id) => Address.findAll({
  where: { employeeId: id },
});

module.exports = {
  findAllByEmployee,
};
