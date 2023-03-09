import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import BadRequest from '../errors/BadRequest';
import IUser from '../interfaces/IUser';

const schema = Joi.object({
  fullName: Joi.string().min(3).required(),
  email: Joi.string().min(5).max(100).required(),
  password: Joi.string().min(8).max(100).required(),
});

export default class ValidateNewUser {
  public static validate(
    req: Request,
    _res: Response,
    next: NextFunction
  ): Response | void {
    const { error } = schema.validate(req.body);
    if (error) throw new BadRequest('Some required fields are missing');
    next();
  }
}
