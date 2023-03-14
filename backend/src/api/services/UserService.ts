import { ModelStatic } from 'sequelize';
import UserModel from '../../database/models/UserModel';
import { Conflict } from '../errors';
import { NotFound } from '../errors';
import { Unauthorized } from '../errors';
import { ILogin, IToken, IUserService } from '../interfaces';
import BcryptHandler from '../utils/BcryptHandler';
import { emailAlreadyInUse, userNotFound } from '../utils/errorMessages';
import TokenHandler from '../utils/TokenHandler';

export default class UserService implements IUserService {
  private _userModel: ModelStatic<UserModel> = UserModel;

  public async findAll(): Promise<UserModel[]> {
    const users = await this._userModel.findAll();
    return users;
  }

  public async findById(id: number): Promise<UserModel> {
    const user = await this._userModel.findByPk(id);
    if (!user) throw new NotFound(userNotFound);
    return user;
  }

  public async create(user: UserModel): Promise<UserModel> {
    const hasUser: UserModel | null = await this._userModel.findOne({
      where: { email: user.email },
    });

    if (hasUser) throw new Conflict(emailAlreadyInUse);

    const password = BcryptHandler.hashPassword(user.password);
    const newUser: UserModel = await this._userModel.create({
      ...user,
      password,
    });

    return newUser;
  }

  public async login(login: ILogin): Promise<IToken> {
    const user = await this._userModel.findOne({
      where: { email: login.email },
    });

    if (!user) {
      throw new Unauthorized(userNotFound);
    }

    const token: string = TokenHandler.generate(login);
    return { token };
  }
}
