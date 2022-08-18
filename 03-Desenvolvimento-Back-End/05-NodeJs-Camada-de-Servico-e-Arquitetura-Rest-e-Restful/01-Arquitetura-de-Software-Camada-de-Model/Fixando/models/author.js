const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter(name => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  };
}

const serialize = (author) => ({
  id: author.id,
  firstName: author.first_name,
  middleName: author.middle_name,
  lastName: author.last_name});

const getAll = async () => {
  const [authors] = await connection.query('SELECT id, first_name, middle_name, last_name FROM authors;');

  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
};
