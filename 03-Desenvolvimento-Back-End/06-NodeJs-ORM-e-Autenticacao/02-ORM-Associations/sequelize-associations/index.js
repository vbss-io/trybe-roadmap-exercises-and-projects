const express = require('express');
const employeesRoute = require('./src/routes/employeesRoute');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/employees', employeesRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
