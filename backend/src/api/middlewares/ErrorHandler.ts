import { NextFunction, Request, Response } from 'express';
import { INTERNAL_SERVER_ERROR } from '../utils/httpErrorCodes';

export default class ErrorHandler {
  public static handle(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Response {
    const statusCode = Number(err.stack) || INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ message: err.message });
  }
}
