import { ModelStatic } from 'sequelize';
import UserModel from '../../database/models/UserModel';
import IUserService from '../interfaces/IUserService';

export default class UserService implements IUserService {
  protected userModel: ModelStatic<UserModel> = UserModel;

  public async findAll(): Promise<UserModel[]> {
    const users = await UserModel.findAll();
    return users;
  }
}
