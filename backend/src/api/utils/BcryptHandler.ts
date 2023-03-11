import bcrypt from 'bcryptjs';

export default class BcryptHandler {
  public static hashPassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    const hashedPassword: string = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }
}
