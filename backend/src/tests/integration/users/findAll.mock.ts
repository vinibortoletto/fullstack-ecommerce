import UserModel from '../../../database/models/UserModel';

export const findAll: UserModel[] = [
  {
    id: 1,
    fullName: 'Dalva Moso Bortoletto',
    email: 'meu@email.com',
    password: '123456',
  },
  {
    id: 2,
    fullName: 'Antônio Pedro Bortoletto',
    email: 'meu@email.com',
    password: '123456',
  },
  {
    id: 3,
    fullName: 'Elaine Cristina Bortoletto Fedrizze',
    email: 'meu@email.com',
    password: '123456',
  },
] as unknown as UserModel[];
