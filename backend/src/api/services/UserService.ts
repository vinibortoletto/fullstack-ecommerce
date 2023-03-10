import { ModelStatic } from 'sequelize';
import UserModel from '../../database/models/UserModel';
import Conflict from '../errors/Conflict';
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
    const hasUser = await this._userModel.findOne({
      where: { email: user.email },
    });

    if (hasUser) throw new Conflict('Já existe um usuário com esse email');

    const newUser = await this._userModel.create({ ...user });
    return newUser;
  }
}
