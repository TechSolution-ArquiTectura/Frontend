import { Gender } from './users.model';

export interface Person {
  id?: number;
  name?: string;
  lastname?: string;
  birthdate?: number;
  phoneNumber?: number;
  imageSrc?: string;
  email?: string;
  password?: string;
  numberDni?: string;
  gender?: Gender;
  typeUser?: TypeUser;
}

export interface TypeUser {
  id?: number;
  name?: string;
}
