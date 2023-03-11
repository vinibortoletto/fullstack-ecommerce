import { JwtPayload, Secret, sign, verify } from 'jsonwebtoken';
import Unauthorized from '../errors/Unauthorized';
import { ILogin } from '../interfaces';
import { invalidToken } from './errorMessages';

const secret = process.env.JWT_SECRET as Secret;

export default class TokenHandler {
  public static generate(login: ILogin): string {
    const token = sign(login, secret);
    return token;
  }

  public static decode(token: string): string | JwtPayload {
    try {
      const decodedUserInfo = verify(token, secret);
      return decodedUserInfo;
    } catch (_e) {
      throw new Unauthorized(invalidToken);
    }
  }
}
