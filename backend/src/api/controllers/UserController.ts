import IUserService from '../interfaces/IUserService';
import { NextFunction, Request, Response } from 'express';

export default class UserController {
  constructor(private _userService: IUserService) {}

  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this._userService.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      next(error);
    }
  }
}
