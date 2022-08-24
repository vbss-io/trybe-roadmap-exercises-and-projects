const usersService = require('../services/usersService');

const findAll = async (_req, res) => {
  try {
    const users = await usersService.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const findByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersService.findByPk(id);

    if(!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await usersService.findOne(id, email);

    if(!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await usersService.create(fullName, email);

    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email } = req.body;
    const [user] = await usersService.update(id, fullName, email);

    if(!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersService.remove(id);

    if(!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  findAll,
  findByPk,
  findOne,
  create,
  update,
  remove,
};
