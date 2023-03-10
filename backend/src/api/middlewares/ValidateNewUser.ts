import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import BadRequest from '../errors/BadRequest';
import {
  emailErrorMessages,
  fullNameErrorMessages,
  passwordErrorMessages,
} from '../utils/errorMessages';

const schema = Joi.object({
  fullName: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.min': `${fullNameErrorMessages.minLength}`,
      'string.empty': `${fullNameErrorMessages.empty}`,
      'any.required': `${fullNameErrorMessages.required}`,
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': `${emailErrorMessages.invalid}`,
      'string.empty': `${emailErrorMessages.empty}`,
      'any.required': `${emailErrorMessages.required}`,
    }),
  password: Joi.string()
    .min(8)
    .max(100)
    .required()
    .messages({
      'string.min': `${passwordErrorMessages.minLength}`,
      'any.max': `${passwordErrorMessages.maxLength}`,
      'string.empty': `${passwordErrorMessages.empty}`,
      'any.required': `${passwordErrorMessages.required}`,
    }),
});

export default class ValidateNewUser {
  public static validate(
    req: Request,
    _res: Response,
    next: NextFunction
  ): Response | void {
    const { error } = schema.validate(req.body);
    if (error) throw new BadRequest(error.message);
    next();
  }
}
