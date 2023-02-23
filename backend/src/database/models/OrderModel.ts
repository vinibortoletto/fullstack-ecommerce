import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class OrderModel extends Model {
  declare readonly id: number;
  declare status: string;
  declare readonly userId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

OrderModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'orders',
    timestamps: true,
  }
);
