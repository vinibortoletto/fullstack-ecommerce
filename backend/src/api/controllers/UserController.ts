import { NextFunction, Request, Response } from 'express';
import { CREATED, OK } from '../utils/httpStatusCodes';
import { ILogin, IUserService } from '../interfaces';

export default class UserController {
  constructor(private _userService: IUserService) {}

  public async findAll(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const users = await this._userService.findAll();
      return res.status(OK).json(users);
    } catch (error) {
      next(error);
    }
  }

  public async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { id } = req.params;
    try {
      const user = await this._userService.findById(Number(id));
      return res.status(OK).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const newUser = req.body;
    try {
      const user = await this._userService.create(newUser);
      return res.status(CREATED).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const login: ILogin = req.body;

    try {
      const token = await this._userService.login(login);
      return res.status(OK).json(token);
    } catch (error) {
      next(error);
    }
  }
}
