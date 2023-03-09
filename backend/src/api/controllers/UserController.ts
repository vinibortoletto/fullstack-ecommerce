import IUserService from '../interfaces/IUserService';
import { Request, Response } from 'express';

export default class UserController {
  constructor(private _userService: IUserService) {}

  public async findAll(_req: Request, res: Response): Promise<Response | void> {
    const users = await this._userService.findAll();
    return res.status(200).json(users);
  }

  public async findById(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const user = await this._userService.findById(Number(id));
    return res.status(200).json(user);
  }

  public async create(req: Request, res: Response): Promise<Response | void> {
    const newUser = req.body;
    const user = await this._userService.create(newUser);
    return res.status(200).json(user);
  }
}
