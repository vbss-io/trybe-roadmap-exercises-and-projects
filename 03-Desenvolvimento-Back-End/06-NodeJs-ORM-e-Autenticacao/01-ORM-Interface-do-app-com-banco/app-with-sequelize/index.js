const express = require('express');
const usersRoute = require('./src/routes/usersRoute');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
