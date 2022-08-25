const { Employee, Address } = require('../models');
const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);

const findAll = async () => Employee.findAll({
  include: { model: Address, as: 'addresses' },
});

const findOne = async (id) => Employee.findOne({
  // Eager Loading:
  // where: { id },
  // include: [{ model: Address, as: 'addresses', attributes: { exclude: ['id', 'employeeId']} }],
  // Lazy Loading:
  where: { id },
  // findAllAddress -> addressService 
});

// Unmanaged transactions:
// const create = async (employee, address) => {
//   const t = await sequelize.transaction();

//   try {
//     const { firstName, lastName, age } = employee;
//     const { city, street, number } = address;

//     const employeeAdded = await Employee.create(
//       { firstName, lastName, age },
//       { transaction : t},
//     );

//     await Address.create(
//       { city, street, number, employeeId: employeeAdded.id },
//       { transaction : t},
//     );

//     await t.commit();
//   } catch (err) {
//     await t.rollback();
//     throw err;
//   }
// }

// Managed transactions:
const create = async (employee, address) => {
  const { firstName, lastName, age } = employee;
  const { city, street, number } = address;

  const result = await sequelize.transaction(async (t) => {
    const employeeAdded = await Employee.create(
      { firstName, lastName, age },
      { transaction : t});

    await Address.create(
      { city, street, number, employeeId: employeeAdded.id },
      { transaction : t});

    return employeeAdded.id;
  });

  return result;
};

module.exports = {
  findAll,
  findOne,
  create,
};
