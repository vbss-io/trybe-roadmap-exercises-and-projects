const express = require('express');
const app = express();
const PORT = 3000;

const author = require('./models/author');

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();
  res.status(200).send(authors);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
