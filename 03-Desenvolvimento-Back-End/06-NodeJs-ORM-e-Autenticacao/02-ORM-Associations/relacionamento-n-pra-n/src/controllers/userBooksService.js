const userBooksService = require('../services/userBooksService');

const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userBooksService.findOne(id);

    if (!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { findOne };
