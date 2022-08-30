const users = require('../services/users');

const findAll = async (req, res) => {
  try {
    const allUsers = await users.findAll();

    if (!allUsers) throw Error;

    return res.status(200).json(allUsers);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

const create = async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUser = await users.create(username, password);

    if (!newUser) throw Error;

    res.status(201).json({ message: 'Success', user: username });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { 
  findAll,
  create,
};