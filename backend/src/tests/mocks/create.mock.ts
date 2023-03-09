import IUser from '../../api/interfaces/IUser';
import UserModel from '../../database/models/UserModel';

// export const createBody: IUser = {
//   fullName: 'Jacaré Pereira',
//   email: 'meu@email.com',
//   password: '123456',
// };

export const newUser: UserModel = {
  id: 19,
  fullName: 'Jacaré Pereira',
  email: 'meu@email.com',
  password: '123456',
} as UserModel;
