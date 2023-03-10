import UserModel from '../../database/models/UserModel';

export const user: UserModel = {
  id: 1,
  fullName: 'Dalva Moso Bortoletto',
  email: 'meu@email.com',
  password: '12345678',
} as UserModel;

export const userList: UserModel[] = [
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
] as UserModel[];

export const newUser: UserModel = {
  id: 19,
  fullName: 'Jacaré Pereira',
  email: 'meu@email.com',
  password: '12345678',
} as UserModel;

export const newUserBody = {
  fullName: 'Jacaré Pereira',
  email: 'meu@email.com',
  password: '12345678',
};

export const newUserBodyWithoutFullName = {
  email: 'meu@email.com',
  password: '12345678',
};

export const newUserBodyWithoutEmail = {
  fullName: 'Jacaré Pereira',
  password: '12345678',
};

export const newUserBodyWithoutPassword = {
  fullName: 'Jacaré Pereira',
  email: 'meu@email.com',
};
