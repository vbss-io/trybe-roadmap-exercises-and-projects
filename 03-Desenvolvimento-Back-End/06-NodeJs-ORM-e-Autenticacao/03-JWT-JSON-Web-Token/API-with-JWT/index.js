const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

const validateJWT = require('./src/middlewares/validateJWT');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
apiRoutes.post('/api/users', routes.users.create);
apiRoutes.get('/api/users', routes.users.findAll);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));