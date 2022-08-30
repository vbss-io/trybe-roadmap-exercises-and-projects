require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE_DEV,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE_TEST,
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE_PROD,
    "host": "localhost",
    "dialect": "mysql"
  }
}
