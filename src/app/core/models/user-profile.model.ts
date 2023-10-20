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
    password?: string;
    imageSrc?: string;
    phoneNumber?: string;
    gender?: string[];    
    typeUser?: string[];
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
  user?: User;
  businessTypes?: BusinessType;
}

