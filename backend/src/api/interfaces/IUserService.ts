import UserModel from '../../database/models/UserModel';
import ILogin from './ILogin';
import IToken from './IToken';

export default interface IUserService {
  findAll(): Promise<UserModel[]>;
  findById(id: number): Promise<UserModel>;
  create(newUser: UserModel): Promise<UserModel>;
  login(login: ILogin): Promise<IToken>;
}
