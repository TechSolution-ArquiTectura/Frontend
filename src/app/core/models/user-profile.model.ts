import { BusinessType } from './cineclub.model';
import { TypeUser } from './person.model';

export interface Gender {
    id?: number;
    name: string;
}

export interface User{
    id?: any;
    name?: string;
    lastname?: string;
    birthdate?: string;
    email?: string;
    emailVerified?: string
    password?: string;
    imageSrc?: string;
    phoneNumber?: string;
    gender?: string[];    
    typeUser?: string[];
}

export interface Person{
    id?: any;
    firstName?: string;
    lastName?:string;
    birthdate?:string;
    phone?:string;
    photo?: string;
    email?: string;
    password?:string;
    numberDni?:string;
    Gender_id?:Gender;
    TypeUser_id?:TypeUser;
  }

export interface Customer {
    id?: any;
    Person_id?: Person
}

export interface Owner {
    id?: any;
    Person_id?: Person;
    bankAccount?: string;
}

export interface Business {
  id?: any,
  name?: string;
  socialReason?: string;
  ruc?: string;
  phone?: string;
  email?: string;
  imageLogo?: string;
  imageBanner?: string;
  description?: string;
  dateAttention?: string;
  address?: string;
  referenceAddress?: string;
  owner?: Owner;
  businessType?: BusinessType;
}