import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class ProductModel extends Model {
  declare readonly id: number;
  declare title: string;
  declare description: string;
  declare price: number;
  declare quantity: number;
}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'products',
    timestamps: false,
  }
);
