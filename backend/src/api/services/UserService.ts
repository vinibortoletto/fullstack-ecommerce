import { ModelStatic } from 'sequelize';
import UserModel from '../../database/models/UserModel';
import NotFound from '../errors/NotFound';
import IUserService from '../interfaces/IUserService';

export default class UserService implements IUserService {
  private _userModel: ModelStatic<UserModel> = UserModel;

  public async findAll(): Promise<UserModel[]> {
    const users = await this._userModel.findAll();
    return users;
  }

  public async findById(id: number): Promise<UserModel> {
    const user = await this._userModel.findByPk(id);
    if (!user) throw new NotFound('User not found');
    return user;
  }

  public async create(user: UserModel): Promise<UserModel> {
    const newUser = await this._userModel.create({ ...user });
    return newUser;
  }
}
