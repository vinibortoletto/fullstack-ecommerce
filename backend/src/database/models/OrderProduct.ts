import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class OrderProduct extends Model {
  declare readonly orderId: number;
  declare readonly productId: number;
}

OrderProduct.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'orders_products',
    timestamps: false,
  }
);
