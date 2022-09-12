import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';

class Books extends Model {
  id!: number;
  title!: string;
  price!: number;
  author!: string;
  isbn!: string;
}

Books.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(30),
    allowNull: false,
  },
  price: {
    type: DECIMAL(10,2),
    allowNull: false,
  },
  author: {
    type: STRING(100),
    allowNull: false,
  },
  isbn: {
    type: STRING(100),
  },
}, {
  sequelize: db,
  modelName: 'books',
  timestamps: false,
});

export default Books;

// Associations

// import { Model } from 'sequelize';
// import db from '.';

// import OtherModel from './OtherModel'; // Nossa outra entidade

// class Example extends Model {
//   // public <campo>!: <tipo>;
// }

// Example.init({
//   // ... Campos
// }, {
//   // ... Outras configs
//   underscored: true,
//   sequelize: db,
//   // modelName: 'example',
//   timestamps: false,
// });

// /**
//   * `Workaround` para aplicar as associations em TS:
//   * Associations 1:N devem ficar em uma das instâncias de modelo
//   * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

// export default Example;