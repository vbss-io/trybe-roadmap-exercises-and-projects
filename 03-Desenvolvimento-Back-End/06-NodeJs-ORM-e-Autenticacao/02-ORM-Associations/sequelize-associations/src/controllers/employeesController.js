const employeesService = require('../services/employeesService');
const addressService = require('../services/addressService');

const findAll = async (_req, res) => {
  try {
    const employees = await employeesService.findAll();
    return res.status(200).json(employees);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Eager Loading:
// const findOne = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await employeesService.findOne(id);
//     if (!employee) return res.status(404).json({ error: 'Employee not found' });
//     return res.status(200).json(employee); 
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// Lazzy Loading:
const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const { includeAddresses } = req.query;
    console.log(includeAddresses);

    const employee = await employeesService.findOne(id);

    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    if (includeAddresses) {
      const addresses = await addressService.findAllByEmployee(id);
      return res.status(200).json({ employee, addresses });
    };

    return res.status(200).json(employee); 
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Unmanaged transactions:
const create = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = { firstName, lastName, age };
    const address = { city, street, number };

    const employeeId = await employeesService.create(employee, address);

    return res.status(201).json({ id: employeeId, message: 'Employee created' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  findAll,
  findOne,
  create,
};
