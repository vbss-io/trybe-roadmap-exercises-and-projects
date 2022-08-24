const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'Users',
  });

// }, {
//   freezeTableName: true,
//   tableName: 'users',
// }

  return User;
};

module.exports = User;