import { Model, DataTypes } from 'sequelize';
import db from '.';
import OrderModel from './OrderModel';
import ProductModel from './ProductModel';

export default class OrderProductModel extends Model {
  declare readonly orderId: number;
  declare readonly productId: number;
}

OrderProductModel.init(
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

OrderModel.belongsToMany(ProductModel, {
  as: 'products',
  through: ProductModel,
  foreignKey: 'order_id',
  otherKey: 'product_id',
});

ProductModel.belongsToMany(OrderModel, {
  as: 'orders',
  through: OrderModel,
  foreignKey: 'product_id',
  otherKey: 'order_id',
});
