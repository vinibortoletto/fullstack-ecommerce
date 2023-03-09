import UserModel from '../../database/models/UserModel';
import IUser from './IUser';

export default interface IUserService {
  findAll(): Promise<UserModel[]>;
  findById(id: number): Promise<UserModel>;
  create(newUser: IUser): Promise<IUser>;
}
