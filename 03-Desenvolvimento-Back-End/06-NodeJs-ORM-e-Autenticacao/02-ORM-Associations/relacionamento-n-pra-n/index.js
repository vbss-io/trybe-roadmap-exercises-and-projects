const express = require('express');
const userBooksRoute = require('./src/routes/userBooksRoute');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/usersbooks', userBooksRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
