import UserModel from '../../database/models/UserModel';
import IUserService from '../interfaces/IUserService';

export default class UserService implements IUserService {
  public async findAll(): Promise<UserModel[]> {
    const users = await UserModel.findAll();
    return users;
  }
}
