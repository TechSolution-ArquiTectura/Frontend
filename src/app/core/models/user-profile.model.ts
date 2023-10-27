import { BusinessType } from './cineclub.model';

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
  logoSrc?: string;
  bannerSrc?: string;
  description?: string;
  startTime?: string;
  endTime?: string;
  address?: string;
  user?: User;
  businessTypes?: BusinessType;
}

