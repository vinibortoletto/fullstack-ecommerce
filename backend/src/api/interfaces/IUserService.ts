import UserModel from '../../database/models/UserModel';
import IUser from './IUser';

export default interface IUserService {
  findAll(): Promise<UserModel[]>;
}
