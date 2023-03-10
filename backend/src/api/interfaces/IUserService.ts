import UserModel from '../../database/models/UserModel';

export default interface IUserService {
  findAll(): Promise<UserModel[]>;
  findById(id: number): Promise<UserModel>;
  create(newUser: UserModel): Promise<UserModel>;
}
